const deep = require("deep-get-set");

export default class Station {
    constructor(feature) {
        this.id = deep(feature, "name");
        this.name = deep(feature, "payload.properties.name");
        this.lat = deep(feature, "payload.geometry.coordinates.1");
        this.lng = deep(feature, "payload.geometry.coordinates.0");
    }
}