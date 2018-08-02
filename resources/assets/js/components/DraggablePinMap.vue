<template>
  <div class="block w-full h-64 text-grey-darker border border-grey-lighter rounded">
  </div>
</template>

<script type="text/babel">
import { colors } from "../../../../tailwind.js";
var MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");
const Fuse = require("fuse.js");
const collect = require("collect.js");

const defaultCenter = { lat: 45.5001181, lng: -73.5664569 };

export default {
  props: {
    lat: { type: Number, default: defaultCenter.lat },
    lng: { type: Number, default: defaultCenter.lng }
  },

  data() {
    return {
      map: null,
      marker: null,
      geocoder: null,
      fuse: null
    };
  },
  mounted() {
    this.instanciateLocalSearch();

    this.map = new window.mapbox.Map({
      container: this.$el,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [
        this.lng ? this.lng : defaultCenter.lng,
        this.lat ? this.lat : defaultCenter.lat
      ],
      zoom: this.lat && this.lng ? 14 : 12,
      scrollZoom: false
    });

    this.geocoder = new MapboxGeocoder({
      accessToken: window.mapbox.accessToken,
      localGeocoder: this.geocoderLocalSearchWithQuery
    });
    this.map.addControl(this.geocoder);
    this.map.on("load", () => {
      this.marker = new window.mapbox.Marker({
        draggable: true
      })
        .setLngLat([
          this.lng ? this.lng : defaultCenter.lng,
          this.lat ? this.lat : defaultCenter.lat
        ])
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
    },
    instanciateLocalSearch() {
      this.fuse = new Fuse(this.$store.getters["features/stations"], {
        keys: ["name"],
        threshold: 0.3
      });
    },
    geocoderLocalSearchWithQuery(query) {
      return collect(this.fuse.search(query))
        .map(station => {
          return station.getCarmenGeojsonRepresentation();
        })
        .toArray();
    }
  }
};
</script>
