<template>
  <div class="h-full w-full">
  </div>
</template>

<script type="text/babel">
const collect = require("collect.js");

export default {
  props: {
    apiEndpoint: {
      type: String
    }
  },
  data() {
    return {
      map: null
    };
  },
  watch: {
    markers: {
      deep: true,
      handler: function(val, oldVal) {
        this.putMarkersOnMap(val, oldVal);
      }
    }
  },
  mounted() {
    this.map = new window.mapbox.Map({
      container: this.$el,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-73.665923, 45.50219],
      zoom: 10
    });

    this.putMarkersOnMap(this.markers);
  },
  computed: {
    markers() {
      if (
        !this.$store.state.obstructions.content ||
        !this.$store.state.obstructions.content.data
      )
        return [];

      return collect(this.$store.state.obstructions.content.data)
        .map(obstruction => {
          let marker = new window.mapbox.Marker().setLngLat([
            obstruction.lng,
            obstruction.lat
          ]);
          return marker;
        })
        .toArray();
    }
  },
  methods: {
    putMarkersOnMap(newMarkers, oldMarkers) {
      // Remove old markers
      if (oldMarkers) {
        collect(oldMarkers).each(marker => {
          marker.remove();
        });
      }

      collect(newMarkers).each(marker => {
        marker.addTo(this.map);
      });
    }
  }
};
</script>
