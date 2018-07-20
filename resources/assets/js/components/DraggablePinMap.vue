<template>
    <div class="block w-full h-64 text-grey-darker border border-grey-lighter rounded">

    </div>
</template>

<script type="text/babel">
import { colors } from "../../../../tailwind.js";
var MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");

export default {
  props: {
    lat: { type: Number, default: 45.5001181 },
    lng: { type: Number, default: -73.5664569 }
  },

  data() {
    return {
      map: null,
      marker: null,
      geocoder: null
    };
  },
  mounted() {
    this.map = new window.mapbox.Map({
      container: this.$el,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [this.lng, this.lat],
      zoom: 13,
      scrollZoom: false
    });

    this.geocoder = new MapboxGeocoder({
      accessToken: window.mapbox.accessToken
    });
    this.map.addControl(this.geocoder);
    this.map.on("load", () => {
      this.marker = new window.mapbox.Marker({
        draggable: true
      })
        .setLngLat([this.lng, this.lat])
        .addTo(this.map);

      this.marker.on("dragend", this.markerLocationDidUpdate);

      this.geocoder.on("result", ev => {
        this.marker.setLngLat(ev.result.geometry.coordinates);
        this.markerLocationDidUpdate();
      });
    });
  },
  methods: {
    markerLocationDidUpdate() {
      const lngLat = this.marker.getLngLat();
      this.$emit("update", { lat: lngLat.lat, lng: lngLat.lng });
    }
  }
};
</script>
