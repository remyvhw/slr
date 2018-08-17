<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
  <generic-subpage @close="closeSubpage">

    <main class="lg:w-1/2 mx-auto">

      <transition name="bounce">
        <div class="my-8">
          <progress-indicator v-if="uploading" :progress="progress"></progress-indicator>
          <div role="alert" v-if="hasErrors" class="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative">
            <strong class="font-bold">Oups!</strong> Une photo ne peut être enregistrée.</div>
        </div>
      </transition>

      <nav class="w-full flex flex-wrap mb-8 px-2 lg:px-0">
        <div class="w-1/2 pr-1">
          <button @click="openFileDialog" class="flex text-grey-darkest items-center block w-full bg-grey-light font-bold py-2 px-4 rounded justify-center h-16 lg:h-12 hover:bg-grey">
            <svg class="fill-current inline-block w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            </svg>
            <span class="text-sm lg:text-base">Ajouter des photos</span>
          </button>
          <input ref="fileinput" multiple type="file" @change="processPhotos" accept="image/jpeg,image/png" class="opacity-0">
        </div>

        <div class="w-1/2 pl-1">
          <button @click="saveAll" :disabled="shouldDisableSaveButton" class="flex items-center block h-16 lg:h-12 w-full font-bold py-2 px-4 rounded bg-grey-light justify-center" :class="{
            'hover:bg-grey text-grey-darkest': !shouldDisableSaveButton,
            'text-grey-dark cursor-auto': shouldDisableSaveButton
          }">
            <svg class="fill-current inline-block w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z" />
            </svg>
            <span class="text-sm lg:text-base">Enregistrer toutes les photos</span>
          </button>
        </div>

      </nav>

      <collapsable-warning v-if="shouldUseDeviceLocation && !awaitingUpload">
        <title>Génération de la localisation sur iOS</title>
        <slot>Il semble que vous utilisez un iPhone ou un iPad pour ajouter des photos. Prenez note que ces appareils éliminent les données de localisation des photos (EXIF) lorsqu'elles sont téléversées depuis un navigateur. Pour cette raison,
          <b>la localisation de vos photo sera automatiquement celle de votre appareil au moment de l'ajout des photos sur cette page</b>. Si possible, ajoutez les photos au fur et à mesure de leur prise, ou attendez d'être devant un ordinateur à la fin de la journée pour tout uploader en masse (la bonne vieille méthode).</slot>
      </collapsable-warning>

      <picture-upload-item v-for="photo in photos" :photo="photo" :key='photo.temporaryId' @delete="deleteImage"></picture-upload-item>

    </main>

  </generic-subpage>

</template>

<script type="text/babel">
const marked = require("marked");
const collect = require("collect.js");
import { PhotoScaffold } from "../../store/models/Photo";
import GeolocationManager from "../../GeolocationManager";

export default {
  components: {
    genericSubpage: require("../GenericSubpage.vue"),
    pictureUploadItem: require("./PictureUploadItem.vue"),
    progressIndicator: require("../ProgressIndicator.vue"),
    collapsableWarning: require("../CollapsableWarning.vue")
  },
  data() {
    return {
      photos: [],
      shouldUseDeviceLocation:
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
      geolocationManager: null
    };
  },
  mounted() {
    if (this.shouldUseDeviceLocation && "geolocation" in navigator) {
      this.geolocationManager = new GeolocationManager();
    }
  },
  computed: {
    shouldDisableSaveButton() {
      return !this.awaitingUpload || this.uploading;
    },
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
    closeSubpage() {
      if (this.$route.meta.shouldBackOnClose) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "browser.photos" });
      }
    },

    openFileDialog() {
      this.$refs.fileinput.click();
    },

    processPhotos(event) {
      Array.from(event.target.files).forEach(file => {
        let photo = new PhotoScaffold(file);
        if ((!photo.lat || !photo.lng) && this.shouldUseDeviceLocation) {
          photo.lat = this.geolocationManager.lat;
          photo.lng = this.geolocationManager.lng;
        }
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
    },
    deleteImage(photo) {
      this.$delete(this.photos, this.photos.indexOf(photo));
    }
  }
};
</script>
