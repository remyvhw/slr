<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>

  <div>

    <div class="text-center p-4">
      <router-link :to="{name: 'pictureUploadModal'}" class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <span>Nouvelles photos</span>
      </router-link>
    </div>

    <div v-if="!photos" class="spinner h-10"></div>
    <div v-if="photos" class="flex flex-wrap justify-between px-1 pt-2">
      <photo-item v-for="photo in photos" :key="photo.id" :photo="photo"></photo-item>
      <api-paginator :resource="pages"></api-paginator>
    </div>

  </div>
</template>

<script type="text/babel">
import { Photo } from "../../store/models/Photo";
const collect = require("collect.js");

export default {
  computed: {
    photos() {
      if (!this.pages) return null;
      return collect(this.pages.data)
        .map(apiPhoto => {
          return new Photo(apiPhoto);
        })
        .toArray();
    }
  },
  data() {
    return { pages: null };
  },
  components: {
    photoItem: require("./PhotoItem.vue"),
    apiPaginator: require("../ApiPaginator.vue")
  },

  mounted() {
    this.retrievePhotosAtUrl();
  },

  methods: {
    retrievePhotosAtUrl(url) {
      if (!url) {
        url = new URL(this.$store.state.apiRoot + Photo.getEndpoint());
      }
      this.pages = null;
      axios.get(url).then(response => {
        this.pages = response.data;
      });
    }
  }
};
</script>
