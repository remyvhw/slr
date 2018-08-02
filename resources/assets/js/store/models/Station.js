const deep = require("deep-get-set");

export default class Station {
    constructor(feature) {
        this.id = deep(feature, "name");
        this.name = deep(feature, "payload.properties.name");
        this.lat = deep(feature, "payload.geometry.coordinates.1");
        this.lng = deep(feature, "payload.geometry.coordinates.0");
    }

    getCarmenGeojsonRepresentation() {
        return {
            "type": "Feature",
            "id": this.id,
            "text": this.name,
            "place_name": "🚉 " + this.name,
            "place_type": ["place"],
            "center": [this.lng, this.lat],
            "geometry": {
                "type": "Point",
                "coordinates": [this.lng, this.lat]
            },
        };
    }
}