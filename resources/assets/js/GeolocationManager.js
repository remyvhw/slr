
export default class GeolocationManager {
    constructor() {
        this.id = navigator.geolocation.watchPosition((position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
        }, (error) => {
            this.error = error;
        }, {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000
            });
        this.lat = null;
        this.lng = null;
        this.error = null;
    }



    stop() {
        navigator.geolocation.clearWatch(this.id);
    }
}