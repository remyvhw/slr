<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>
  <div class="h-full w-full">
  </div>
</template>

<script type="text/babel">
import { colors } from "../../../../tailwind.js";
const collect = require("collect.js");
const defaultMapCenter = [-73.665923, 45.50219];
const defaultZoomLevel = 10;

const mapMarkerSvgPath = `M22 11c0 1.42-.226 2.585-.677 3.496l-7.465 15.117c-.218.43-.543.77-.974 1.016-.43.246-.892.37-1.384.37-.492 0-.954-.124-1.384-.37-.43-.248-.75-.587-.954-1.017L1.677 14.496C1.227 13.586 1 12.42 1 11c0-2.76 1.025-5.117 3.076-7.07C6.126 1.977 8.602 1 11.5 1c2.898 0 5.373.977 7.424 2.93C20.974 5.883 22 8.24 22 11z`;

const obstructionIcon = {
  path: `M1024 161v190q0 14 -9.5 23.5t-22.5 9.5h-192q-13 0 -22.5 -9.5t-9.5 -23.5v-190q0 -14 9.5 -23.5t22.5 -9.5h192q13 0 22.5 9.5t9.5 23.5zM1022 535l18 459q0 12 -10 19q-13 11 -24 11h-220q-11 0 -24 -11q-10 -7 -10 -21l17 -457q0 -10 10 -16.5t24 -6.5h185 q14 0 23.5 6.5t10.5 16.5zM1008 1469l768 -1408q35 -63 -2 -126q-17 -29 -46.5 -46t-63.5 -17h-1536q-34 0 -63.5 17t-46.5 46q-37 63 -2 126l768 1408q17 31 47 49t65 18t65 -18t47 -49z`,
  defaultColor: colors.orange,
  selectedColor: colors["orange-dark"]
};

export default {
  props: {},
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
    "$store.state.features.geojson": {
      handler: function(val, oldVal) {
        if (val && !oldVal && this.map.loaded()) {
          this.generateMapFeatures();
        }
      }
    },
    selectedObstruction: {
      deep: false,
      handler: function(val, oldVal) {
        if (val) {
          const latLng = val.getLngLat();
          let flyToPoint = { center: [latLng.lng, latLng.lat] };
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
      if (this.$store.state.features.geojson) this.generateMapFeatures();
    });
  },
  computed: {
    /**
     * We re-use the format of a "Change" item to present items on the map.
     * Therefore, if the browser presention type is Obstruction, we'll need to
     * wrap our Obstructions objects in an object that, at lease, present a `type`
     * and a `payload` property.
     */
    basicItems() {
      if (
        this.$route.name.startsWith("browser.changes") &&
        this.$store.state.changes.content.data
      ) {
        return this.$store.state.changes.content.data;
      } else if (
        this.$route.name.startsWith("browser.obstructions") &&
        this.$store.state.obstructions.content.data
      ) {
        return collect(this.$store.state.obstructions.content.data)
          .map(obstruction => {
            return {
              payload: obstruction,
              type: "obstruction"
            };
          })
          .toArray();
      }
      return [];
    },

    markers() {
      return collect(this.basicItems)
        .map(item => {
          let enclosingDiv = document.createElement("div");
          enclosingDiv.className = "marker cursor-pointer";
          let svgElement = document.createElement("svg");
          svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          const sizeClasses = item.payload.isSelectedInStore(this.$store)
            ? "h-10 w-10"
            : "h-8 w-8";
          const colorClasses = item.payload.isSelectedInStore(this.$store)
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
          svgElement.setAttribute("viewBox", "0 0 30 42");

          const gElement = document.createElement("g");
          gElement.setAttribute("fill", "none");
          gElement.setAttribute("fill-rule", "evenodd");
          gElement.setAttribute("transform", "scale(1.3125)");
          gElement.innerHTML = mapMarkerSvgPath;
          svgElement.appendChild(gElement);

          const secondaryIcon = obstructionIcon;

          let markerPathElement = document.createElement("path");
          markerPathElement.setAttribute("d", mapMarkerSvgPath);
          markerPathElement.setAttribute("stroke", "#ffffff");
          markerPathElement.setAttribute("stroke-width", ".6");
          markerPathElement.setAttribute(
            "fill",
            item.payload.isSelectedInStore(this.$store)
              ? secondaryIcon.selectedColor
              : secondaryIcon.defaultColor
          );
          markerPathElement.setAttribute("fill-rule", "nonzero");
          gElement.appendChild(markerPathElement);

          let iconPathElement = document.createElement("path");
          iconPathElement.setAttribute("d", secondaryIcon.path);
          iconPathElement.setAttribute(
            "transform",
            "translate(11.5 10) scale(0.006 -0.006) translate(-896, -768)"
          );
          iconPathElement.setAttribute("fill", "#ffffff");
          gElement.appendChild(iconPathElement);

          enclosingDiv.innerHTML = svgElement.outerHTML;
          enclosingDiv.addEventListener("click", () => {
            this.$store.commit("browser/setSelection", item.payload);
          });

          let marker = new window.mapbox.Marker(enclosingDiv).setLngLat([
            item.payload.lng,
            item.payload.lat
          ]);
          marker.setOffset([
            0,
            item.payload.isSelectedInStore(this.$store) ? -10 : -8
          ]);
          marker._slr_item = item;

          return marker;
        })
        .toArray();
    },
    selectedObstruction() {
      if (!this.$store.state.browser.selection) return null;
      return collect(this.markers).first(marker => {
        return marker._slr_item.payload.isSelectedInStore(this.$store);
      });
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

    generateMapFeatures() {
      const features = collect(this.$store.state.features.geojson)
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
    }
  }
};
</script>
