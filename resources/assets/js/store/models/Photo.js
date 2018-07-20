var EXIF = require('exif-js');

export class AbstractPhoto {
    constructor() {
        this.id = null;
        this.blob = null;
        this.type = null;
        this.lat = null;
        this.lng = null;
        this.created_at = null;
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
}


export class PhotoScaffold extends AbstractPhoto {
    constructor(file) {
        super();
        this.created_at = new Date();
        this.exif = null;
        this.temporaryId = window.crypto.getRandomValues(new Uint32Array(10))[0];
        this.processing = true;
        this.readFile(file);
        try {
            this.extractExif(file);
        } catch (e) {
            this.processing = false;
        }

    }

    readFile(file) {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.blob = reader.result;
            this.type = file.type;
        };
        reader.readAsDataURL(file);
    }

    extractExif(file) {
        let reader = new FileReader();
        reader.onloadend = () => {
            const exif = EXIF.readFromBinaryFile(reader.result);
            this.exif = exif;
            this.extractLocation(exif);
            this.extractOriginalDate(exif);
            this.processing = false;
        };
        reader.readAsArrayBuffer(file);

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

    }

    extractOriginalDate(exif) {
        this.created_at = Date(exif.DateTimeOriginal);
    }
}