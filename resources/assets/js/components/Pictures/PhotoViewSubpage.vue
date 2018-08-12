<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
  <div class="relative h-screen flex justify-center bg-brand-darkest bg-cover bg-no-repeat bg-center" :style="imageStyle">

    <div class="absolute pin-t pin-l ml-4 mt-4 bg-smoke-dark rounded-full px-4 py-2">
      <back-button @click="closeSubpage" :dark="true"></back-button>
    </div>

    <div class="spinner self-center h-10" v-if="!photo"></div>
    <template v-else>
      <div class="absolute pin-b pin-l flex flex-wrap">
        <div v-show="photo.legend" class="w-full lg:w-1/3 h-24 overflow-scroll m-4 bg-smoke-dark rounded text-grey text-sm px-4 py-2 tracking-tight">
          {{ photo.legend }}
        </div>
        <div v-show="photo.lat && photo.lng" class="w-full lg:w-1/3 h-24 m-4 bg-smoke-dark rounded text-white">
          <place-map :lat="photo.lat" :lng="photo.lng" :direction="photo.direction"></place-map>
        </div>

      </div>
    </template>

  </div>

</template>

<script type="text/babel">
const collect = require("collect.js");
const deep = require("deep-get-set");
import { Photo } from "../../store/models/Photo";

export default {
  data() {
    return {
      photo: null
    };
  },
  components: {
    backButton: require("../BackButton.vue"),
    placeMap: require("../PlaceMap.vue")
  },
  computed: {
    imageStyle() {
      if (!this.photo) return null;
      return {
        "background-image": "url(" + this.photo.versions.orig + ")"
      };
    }
  },
  mounted() {
    const photo = collect(
      this.$store.state.photos.content
        ? this.$store.state.photos.content.data
        : []
    ).first(item => {
      return item.id === this.$route.params.id;
    });
    if (photo) {
      this.photo = photo;
    } else {
      this.retrievePhoto();
    }
  },
  methods: {
    closeSubpage() {
      if (this.$route.meta.shouldBackOnClose) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "browser.photos" });
      }
    },
    retrievePhoto() {
      axios
        .get(
          this.$store.state.apiRoot +
            Photo.getEndpoint() +
            "/" +
            this.$route.params.id
        )
        .then(({ data }) => {
          this.photo = data.data;
        });
    }
  }
};
</script>
