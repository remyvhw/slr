<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
  <div class="relative h-screen flex justify-center bg-brand-darkest bg-no-repeat bg-center" :class="{
    'bg-cover': presentationMode === 'cover',
    'bg-contain' : presentationMode === 'contain'
  }" :style="imageStyle">

    <div class="absolute pin-t pin-l ml-4 mt-4 bg-smoke-dark rounded-full px-4 py-2">
      <back-button @click="closeSubpage" :dark="true"></back-button>
    </div>

    <div class="spinner self-center h-10" v-if="!photo"></div>
    <template v-else>
      <div class="absolute pin-b pin-l w-full flex flex-wrap justify-end">

        <aside v-if="photo.legend" class="w-full lg:w-1/3">
          <div class="h-24 m-4 overflow-scroll bg-smoke-dark rounded text-grey text-sm px-4 py-2 tracking-tight">
            {{ photo.legend }}
          </div>
        </aside>

        <aside class="w-full lg:w-1/3">
          <div v-show="photo.lat && photo.lng" class="h-24 m-4 bg-smoke-dark rounded text-white">
            <place-map :lat="photo.lat" :lng="photo.lng" :direction="photo.direction"></place-map>
          </div>
        </aside>

        <aside class="w-full lg:w-1/3">
          <div class="flex justify-end">

            <!--<nav class="w-1/2">
              <div class="h-6 mt-4 mx-4 overflow-scroll bg-smoke-dark rounded border border-grey-darker cursor-pointer text-grey text-sm text-bold px-4 py-1 tracking-tight">
                <div @click="togglePresentation" class="flex items-center">
                  <svg class="h-3 w-3 fill-current inline-block " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 20 20 ">
                    <path v-if="presentationMode==='contain'" d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z" />
                    <path v-if="presentationMode==='cover'" d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  <div class="ml-2">Couvrir l'écran</div>
                </div>
              </div>
            </nav>-->

            <nav class=" w-1/2 ">
              <div class="h-6 mt-4 mx-4 overflow-scroll bg-smoke-dark border border-grey-darker rounded  cursor-pointer  text-sm text-bold px-4 py-1 tracking-tight ">
                <a :href="photo.versions.orig" target="_blank" class="flex items-center text-grey no-underline">
                  <svg class="h-3 w-3 fill-current inline-block " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 20 20 ">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z " />
                  </svg>
                  <div class="ml-2">Original</div>
                </a>
              </div>
            </nav>

          </div>

          <div class="flex items-center h-16 m-4 mt-2 bg-smoke-dark rounded text-grey text-sm px-4 py-2 tracking-tight ">
            <svg class="h-8 w-8 fill-current inline-block " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 20 20 ">
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z " />
            </svg>
            <div class="ml-2 ">{{ photo.user.name }}
              <br>{{ createdAt }}
            </div>
          </div>
        </aside>

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
      photo: null,
      presentationMode: "cover"
    };
  },
  components: {
    backButton: require("../BackButton.vue"),
    placeMap: require("../PlaceMap.vue")
  },
  computed: {
    imageStyle() {
      if (!this.photo) return null;
      let style = {
        "background-image": "url(" + this.photo.versions.orig + ")"
      };

      return style;
    },
    createdAt() {
      return this.photo.created_at.toLocaleString();
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
          this.photo = new Photo(data.data);
        });
    },
    togglePresentation() {
      if (this.presentationMode == "cover") this.presentationMode = "contain";
      else this.presentationMode = "cover";
    }
  }
};
</script>
