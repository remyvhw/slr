<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
  <generic-modal @close="closeModal" title="Envoi de photos">
    <div class="mb-8">
      <progress-indicator v-if="uploading" :progress="progress"></progress-indicator>
      <div role="alert" v-if="hasErrors" class="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative">
        <strong class="font-bold">Oups!</strong> Une photo ne peut être enregistrée.</div>
    </div>
    <button v-if="awaitingUpload > 1 && !uploading" @click="saveAll" class="flex items-center block w-full text-white font-bold py-2 px-4 rounded justify-center h-12 bg-brand hover:bg-brand-dark mb-8">
      <svg class="fill-current inline-block w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z" />
      </svg>
      <span>Enregistrer toutes les photos</span>
    </button>

    <picture-upload-item v-for="photo in photos" :photo="photo" :key='photo.temporaryId'></picture-upload-item>

    <div class="flex flex-wrap py-4">
      <div class="w-full">
        <button @click="openFileDialog" class="flex items-center block w-full text-white font-bold py-2 px-4 rounded justify-center h-12" :class="{
          'bg-brand hover:bg-brand-dark': !awaitingUpload,
          'bg-grey hover:bg-grey-dark': awaitingUpload,
        }">
          <svg class="fill-current inline-block w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          </svg>
          <span>Ajouter des photos</span>
        </button>
        <input ref="fileinput" multiple type="file" @change="processPhotos" class="opacity-0">
      </div>
    </div>

  </generic-modal>

</template>

<script type="text/babel">
const marked = require("marked");
const collect = require("collect.js");
import { PhotoScaffold } from "../../store/models/Photo";

export default {
  components: {
    genericModal: require("../GenericModal.vue"),
    pictureUploadItem: require("./PictureUploadItem.vue"),
    progressIndicator: require("../ProgressIndicator.vue")
  },
  data() {
    return {
      photos: []
    };
  },
  computed: {
    progress() {
      const items = collect(this.photos).map(photo => {
        return photo.uploadProgress === false ? 0 : photo.uploadProgress;
      });

      if (!items.count()) {
        return false;
      }

      return Math.ceil(items.sum() / items.count());
    },
    uploading() {
      return (
        this.progress < 100 &&
        collect(this.photos).contains(photo => {
          return photo.uploadProgress !== false;
        })
      );
    },
    awaitingUpload() {
      return collect(this.photos)
        .reject(photo => {
          return photo.uploadProgress !== false || photo.resultingPhoto;
        })
        .count();
    },
    hasErrors() {
      return collect(this.photos)
        .filter(photo => {
          return photo.errors;
        })
        .count();
    }
  },
  methods: {
    closeModal() {
      if (this.$route.meta.shouldBackOnClose) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "browser" });
      }
    },

    openFileDialog() {
      this.$refs.fileinput.click();
    },

    processPhotos(event) {
      Array.from(event.target.files).forEach(file => {
        let photo = new PhotoScaffold(file);
        this.photos.push(photo);
      });
      event.target.value = "";
    },

    saveAll() {
      Promise.all(
        collect(this.photos)
          .reject(photo => {
            return photo.progress == 100;
          })
          .map(photo => {
            return photo.getSavePromise();
          })
          .toArray()
      );
    }
  }
};
</script>
