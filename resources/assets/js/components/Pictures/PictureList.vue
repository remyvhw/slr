<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>

  <div>

    <div class="text-center p-4">
      <router-link :to="{name: 'photos.upload'}" class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <span>Nouvelles photos</span>
      </router-link>
    </div>

    <div v-if="!$store.state.photos.content.data" class="spinner h-10"></div>
    <div v-if="$store.state.photos.content.data" class="flex flex-wrap justify-between px-1 pt-2">
      <photo-item v-for="photo in $store.state.photos.content.data" :key="photo.id" :photo="photo"></photo-item>
      <api-paginator resource="photos"></api-paginator>
    </div>

  </div>
</template>

<script type="text/babel">
import { Photo } from "../../store/models/Photo";
const collect = require("collect.js");

export default {
  data() {
    return { pages: null };
  },
  components: {
    photoItem: require("./PhotoItem.vue"),
    apiPaginator: require("../ApiPaginator.vue")
  },

  mounted() {
    this.retrievePhotos(this.$route.params.page ? this.$route.params.page : 1);
  },

  watch: {
    "$route.params.page": function(newVal, oldVal) {
      this.retrievePhotos(newVal ? newVal : 1);
    }
  },

  methods: {
    retrievePhotos(page) {
      this.$store.dispatch("photos/get", page);
    }
  }
};
</script>
