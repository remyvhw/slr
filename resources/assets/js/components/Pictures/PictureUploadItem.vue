<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
    <div class="w-auto rounded overflow-hidden mb-8 shadow-lg">
        <div class="spinner h-10" v-if="photo.processing"></div>
        <picture-upload-completed v-if="!photo.processing && photo.resultingPhoto" :photo="photo.resultingPhoto"></picture-upload-completed>
        <div v-if="!photo.processing && !photo.resultingPhoto">

            <div class="relative bg-grey-dark">
                <img class="w-full" :src="photo.versions.orig">
                <div class="absolute pin-t pin-r pr-4 pt-4">
                    <button @click="deleteImage" class="bg-smoke  h-8 w-8 rounded-full">
                        <svg class="fill-current text-white inline-block h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="px-6 ">
                <div class="flex flex-wrap py-4">
                    <div class="w-full">
                        <button @click="toggleLocalization" class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">

                            Localisation
                            <svg class="fill-current text-grey-darker inline-block h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path v-if="photo.lat && photo.lng" d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
                                <path v-else d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                            </svg>

                        </button>
                        <draggable-pin-map v-if="photo.lat && photo.lng" @update="updateLatLng" :lat="photo.lat" :lng="photo.lng"></draggable-pin-map>
                    </div>
                </div>

                <div class="flex flex-wrap py-4">
                    <div class="w-full">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" :for="'legend_'+_uid">
                            Légende (facultative)
                        </label>
                        <textarea v-model="photo.legend" :id="'legend_'+_uid" class="appearance-none block w-full h-16 bg-grey-lighter text-grey-darker border border-grey-lighter rounded p-2 leading-tight"></textarea>
                    </div>
                </div>

                <div v-if="photo.errors" class="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">Oups!</strong>
                    <span class="block sm:inline">SurLesRails ne peut accepter votre photo. Les messages suivants ont été retournés par le serveur:
                        <ul>
                            <li v-for="(error, key) in photo.errors" :key="key">
                                <em>{{ key }}</em>
                                <ul>
                                    <li v-for="problem in error" :key="problem">{{ problem }}</li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                </div>

                <div v-if="!photo.resultingPhoto" class="flex flex-wrap py-4">
                    <div class="w-full">
                        <progress-indicator v-if="this.photo.uploadProgress !== false" :progress="this.photo.uploadProgress"></progress-indicator>
                        <button v-else @click="saveImage" class="bg-brand block w-full hover:bg-brand-dark text-white font-bold py-2 px-4 rounded h-12" :disabled="photo.uploadProgress !== false">Enregistrer la photo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    photo: { type: Object, required: true }
  },
  computed: {},

  components: {
    draggablePinMap: require("../DraggablePinMap.vue"),
    progressIndicator: require("../ProgressIndicator.vue"),
    pictureUploadCompleted: require("./PictureUploadCompleted.vue")
  },
  methods: {
    updateLatLng(point) {
      this.photo.lat = point.lat;
      this.photo.lng = point.lng;
      this.photo.direction = null;
    },
    saveImage() {
      this.photo.getSavePromise().then(photo => {}, err => {});
    },
    deleteImage() {
      this.$emit("delete", this.photo);
    },
    toggleLocalization() {
      if (this.photo.lat && this.photo.lng) {
        this.photo.lat = null;
        this.photo.lng = null;
      } else {
        this.photo.lat = 45.5001181;
        this.photo.lng = -73.5664569;
      }
    }
  }
};
</script>
