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

    this.map.on("load", () => {
      this.loadGeojsonFeatures();
    });
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
    },
    loadGeojsonFeatures() {
      axios.get(this.apiEndpoint).then(response => {
        const features = collect(response.data)
          .map(feature => {
            return feature.payload;
          })
          .toArray();

        this.map.addSource("rem", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: features
          }
        });

        this.map.addLayer({
          id: "lines",
          type: "line",
          source: "rem",
          paint: {
            "line-color": "#084638",
            "line-width": 2
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          filter: ["==", "$type", "LineString"]
        });

        this.map.addLayer({
          id: "stations",
          type: "circle",
          source: "rem",
          paint: {
            "circle-radius": 3,
            "circle-color": "#85bb23"
          },
          filter: ["==", "$type", "Point"]
        });
      });
    }
  }
};
</script>
