<template>
    <div class="block w-full h-full text-grey-darker rounded">
    </div>
</template>

<script type="text/babel">
import { colors } from "../../../../tailwind.js";
const collect = require("collect.js");

const withoutDirection = `M17.94 11H13V9h4.94A8 8 0 0 0 11 2.06V7H9V2.06A8 8 0 0 0 2.06 9H7v2H2.06A8 8 0 0 0 9 17.94V13h2v4.94A8 8 0 0 0 17.94 11zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z`;

const withDirection = `M12 10a2 2 0 0 1-3.41 1.41A2 2 0 0 1 10 8V0a9.97 9.97 0 0 1 10 10h-8zm7.9 1.41A10 10 0 1 1 8.59.1v2.03a8 8 0 1 0 9.29 9.29h2.02zm-4.07 0a6 6 0 1 1-7.25-7.25v2.1a3.99 3.99 0 0 0-1.4 6.57 4 4 0 0 0 6.56-1.42h2.1z`;

export default {
  props: {
    lat: { required: true },
    lng: { required: true },
    direction: { type: String }
  },

  data() {
    return {
      map: null,
      marker: null
    };
  },
  mounted() {
    this.map = new window.mapbox.Map({
      container: this.$el,
      style: "mapbox://styles/mapbox/dark-v9",
      center: [
        this.lng ? this.lng : defaultCenter.lng,
        this.lat ? this.lat : defaultCenter.lat
      ],
      zoom: this.lat && this.lng ? 14 : 12,
      scrollZoom: false
    });

    this.map.on("load", () => {
      this.marker = new window.mapbox.Marker(this.buildMarkerContent())
        .setLngLat([this.lng, this.lat])
        .addTo(this.map);
    });
  },
  computed: {
    adjustedDirection() {
      if (!this.direction) return null;
      return parseFloat(this.direction) - 45;
    }
  },
  methods: {
    buildMarkerContent() {
      let enclosingDiv = document.createElement("div");

      let svgElement = document.createElement("svg");
      svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgElement.setAttribute(
        "style",
        "transform: rotate(" +
          (this.adjustedDirection ? this.adjustedDirection : 0) +
          "deg)"
      );
      svgElement.setAttribute(
        "class",
        collect([
          "fill-current",
          "inline-block",
          "h-6 w-6",
          "text-brand"
        ]).implode(" ")
      );
      svgElement.setAttribute("viewBox", "0 0 20 20");

      const pathElement = document.createElement("path");
      pathElement.setAttribute(
        "d",
        this.direction ? withDirection : withoutDirection
      );

      svgElement.appendChild(pathElement);

      enclosingDiv.innerHTML = svgElement.outerHTML;

      return enclosingDiv;
    }
  }
};
</script>
