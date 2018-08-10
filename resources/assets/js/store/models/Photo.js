const collect = require("collect.js");
const EXIF = require('exif-js');
const deep = require("deep-get-set");
const endpoint = "/photos";

export class AbstractPhoto {

    constructor() {
        this.id = null;
        this.versions = {
            orig: null,
        };
        this.type = null;
        this.lat = null;
        this.lng = null;
        this.legend = null;
        this.created_at = null;
        this.direction = null;
    }

    static getEndpoint() {
        return endpoint;
    }

    /**
     * Find the nearest station, if any within 5 km from photo.
     * @param {array} stations an array of Station objects 
     */
    nearestStationInStations(stations) {
        if (!this.lat || !this.lng) return null;

        return collect(stations).map(station => {
            return {
                distance: station.distanceFromPoint(this.lat, this.lng),
                station: station,
            };
        }).reject(stationItem => {
            return stationItem.distance > 5;
        }).sortBy(stationItem => {
            return stationItem.distance;
        }).pluck("station").first();
    }
}

export class Photo extends AbstractPhoto {
    constructor(apiPhoto) {
        super();
        Object.keys(apiPhoto).forEach((key) => {
            this[key] = apiPhoto[key];
        });
        this.created_at = new Date(this.created_at);
        this.updated_at = new Date(this.updated_at);

    }
    isSelectedInStore(store) {
        return store.state.browser.selection &&
            store.state.browser.selection.constructor.name ===
            this.constructor.name &&
            store.state.browser.selection.id === this.id;
    }
}


export class PhotoScaffold extends AbstractPhoto {
    constructor(file) {
        super();
        this.created_at = new Date();
        this.exif = null;
        this.temporaryId = window.crypto.getRandomValues(new Uint32Array(10))[0];
        this.processing = true;
        this.file = file;
        this.uploadProgress = false;
        this.resultingPhoto = null;
        this.errors = null;

        this.readFile();
        try {
            this.extractExif();
        } catch (e) {
            this.processing = false;
        }

    }

    readFile() {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.versions.orig = reader.result;
            this.type = this.file.type;
        };
        reader.readAsDataURL(this.file);
    }

    extractExif() {
        let reader = new FileReader();
        reader.onloadend = () => {
            const exif = EXIF.readFromBinaryFile(reader.result);
            this.exif = exif;
            this.extractLocation(exif);
            this.extractOriginalDate(exif);
            this.processing = false;
        };
        reader.readAsArrayBuffer(this.file);

    }

    convertDmsToDecimalDegrees(degrees, minutes, seconds, direction) {
        let dd = degrees + minutes / 60 + seconds / (60 * 60);

        return (direction === "S" || direction === "W") ? dd * -1 : dd;
    }

    extractLocation(exif) {
        if (!exif.GPSLongitude || !exif.GPSLatitude || !exif.GPSLatitudeRef)
            return;

        this.lat = this.convertDmsToDecimalDegrees(
            exif.GPSLatitude[0].numerator / exif.GPSLatitude[0].denominator,
            exif.GPSLatitude[1].numerator / exif.GPSLatitude[1].denominator,
            exif.GPSLatitude[2].numerator / exif.GPSLatitude[2].denominator,
            exif.GPSLatitudeRef
        );

        this.lng = this.convertDmsToDecimalDegrees(
            exif.GPSLongitude[0].numerator / exif.GPSLongitude[0].denominator,
            exif.GPSLongitude[1].numerator / exif.GPSLongitude[1].denominator,
            exif.GPSLongitude[2].numerator / exif.GPSLongitude[2].denominator,
            exif.GPSLongitudeRef
        );

        if (deep(exif, "GPSImgDirection.numerator") && exif.GPSImgDirectionRef) {
            this.direction = String(deep(exif, "GPSImgDirection.numerator") / deep(exif, "GPSImgDirection.denominator")) + exif.GPSImgDirectionRef;
        }
    }

    extractOriginalDate(exif) {
        this.created_at = Date(exif.DateTimeOriginal);
    }

    getSavePromise() {
        return new Promise((resolve, reject) => {

            this.errors = null;

            const url = new URL(window.apiRoot + endpoint);
            let data = new FormData();
            data.append("photo", this.file);
            data.append("photo", this.legend);

            if (this.lat && this.lng) {
                data.append("lat", this.lat);
                data.append("lng", this.lng);
            }

            if (this.direction && (RegExp(/^\d+\.?\d*[TM]$/)).test(this.direction)) {
                data.append("direction", this.direction);
            }

            if (this.created_at) {
                data.append("created_at", (new Date(this.created_at)).toISOString());
            }

            window.axios
                .post(url, data, {
                    onUploadProgress: e => {
                        this.uploadProgress = Math.round(e.loaded * 100 / e.total);
                    }
                })
                .then(res => {
                    let apiPhoto = new Photo(res.data.data);
                    apiPhoto.versions.orig = this.versions.orig;
                    this.resultingPhoto = apiPhoto;
                    this.uploadProgress = false;
                    resolve(this);
                })
                .catch(err => {
                    this.uploadProgress = false;
                    this.errors = deep(err, "response.data.errors");
                });
        });



    }
}