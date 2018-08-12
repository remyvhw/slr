<template>
    <div class="block w-full h-full text-grey-darker rounded">
    </div>
</template>

<script type="text/babel">
import { colors } from "../../../../tailwind.js";
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
      this.marker = new window.mapbox.Marker()
        .setLngLat([this.lng, this.lat])
        .addTo(this.map);
    });
  },
  methods: {}
};
</script>
