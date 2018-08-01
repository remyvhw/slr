<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>
  <generic-modal @close="closeModal" title="Envoi de photos">

    <div v-if="photos.length">
      <button @click="saveAll" class="flex items-center block w-full text-white font-bold py-2 px-4 rounded justify-center h-12 bg-brand hover:bg-brand-dark mb-8">
        <svg class="fill-current inline-block w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z" />
        </svg>
        <span>Enregistrer toutes les photos</span>
      </button>
    </div>

    <picture-upload-item v-for="photo in photos" :photo="photo" :key='photo.temporaryId'></picture-upload-item>

    <div class="flex flex-wrap py-4">
      <div class="w-full">
        <button @click="openFileDialog" class="flex items-center block w-full text-white font-bold py-2 px-4 rounded justify-center h-12" :class="{
          'bg-brand hover:bg-brand-dark': !photos.length,
          'bg-grey hover:bg-grey-dark': photos.length,
        }">
          <svg class="fill-current inline-block w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
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
    pictureUploadItem: require("./PictureUploadItem.vue")
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

      return Math.ceil(items.sum() / items.count());
    },
    awaitingPhotos() {
      return collect(this.photos)
        .reject(photo => {
          return photo.uploadProgress !== false || photo.resultingPhoto;
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
