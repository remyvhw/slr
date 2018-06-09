<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>
  <div class="h-full w-full">
  </div>
</template>

<script type="text/babel">
const collect = require("collect.js");
const defaultMapCenter = [-73.665923, 45.50219];
const defaultZoomLevel = 10;

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
    },
    selectedObstruction: {
      deep: false,
      handler: function(val, oldVal) {
        if (val) {
          let flyToPoint = { center: [val.lng, val.lat] };
          if (this.map.getZoom() == 10) {
            flyToPoint["zoom"] = 12;
          }
          this.map.flyTo(flyToPoint);
        } else {
          this.map.flyTo({ center: defaultMapCenter, zoom: defaultZoomLevel });
        }
      }
    }
  },
  mounted() {
    this.map = new window.mapbox.Map({
      container: this.$el,
      style: "mapbox://styles/mapbox/streets-v10",
      center: defaultMapCenter,
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

      const mapMarkerSvgPath =
        "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z";

      return collect(this.$store.state.obstructions.content.data)
        .map(obstruction => {
          let enclosingDiv = document.createElement("div");
          enclosingDiv.className = "marker";
          let svgElement = document.createElement("svg");
          svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          const sizeClasses = obstruction.selected ? "h-10 w-10" : "h-8 w-8";
          const colorClasses = obstruction.selected
            ? "text-orange-dark"
            : "text-orange";
          svgElement.setAttribute(
            "class",
            collect([
              "fill-current",
              "inline-block",
              sizeClasses,
              colorClasses
            ]).implode(" ")
          );
          svgElement.setAttribute("viewBox", "0 0 384 512");
          let pathElement = document.createElement("path");
          pathElement.setAttribute("d", mapMarkerSvgPath);
          svgElement.appendChild(pathElement);

          enclosingDiv.innerHTML = svgElement.outerHTML;
          enclosingDiv.addEventListener("click", () => {
            this.$store.commit("setObstructionSelection", obstruction);
          });

          let marker = new window.mapbox.Marker(enclosingDiv).setLngLat([
            obstruction.lng,
            obstruction.lat
          ]);
          marker.setOffset([0, obstruction.selected ? -10 : -8]);

          return marker;
        })
        .toArray();
    },
    selectedObstruction() {
      if (!this.markers) return null;
      return collect(this.$store.state.obstructions.content.data).firstWhere(
        "selected",
        true
      );
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
