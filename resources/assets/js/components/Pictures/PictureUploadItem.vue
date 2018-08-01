<template>
    <div class="w-auto rounded overflow-hidden mb-8 shadow-lg">
        <div class="spinner h-10" v-if="photo.processing"></div>
        <picture-upload-completed v-if="!photo.processing && photo.resultingPhoto" :photo="photo.resultingPhoto"></picture-upload-completed>
        <div v-if="!photo.processing && !photo.resultingPhoto">
            <img class="w-full" :src="photo.versions.orig">

            <div class="px-6 ">
                <div class="flex flex-wrap py-4">
                    <div class="w-full">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" :for="'legend_'+_uid">
                            Localisation
                        </label>
                        <draggable-pin-map @update="updateLatLng" :lat="photo.lat" :lng="photo.lng"></draggable-pin-map>
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

                <div v-if="errors" class="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">Oups!</strong>
                    <span class="block sm:inline">SurLesRails ne peut accepter votre photo. Les messages suivants ont été retournés par le serveur:
                        <ul>
                            <li v-for="(error, key) in errors">
                                <em>{{ key }}</em>
                                <ul>
                                    <li v-for="problem in error">{{ problem }}</li>
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
    </div>
</template>

<script type="text/babel">
var deep = require("deep-get-set");

export default {
  props: {
    photo: { type: Object, required: true }
  },
  computed: {},
  data() {
    return { errors: null };
  },
  components: {
    draggablePinMap: require("../DraggablePinMap.vue"),
    progressIndicator: require("../ProgressIndicator.vue"),
    pictureUploadCompleted: require("./PictureUploadCompleted.vue")
  },
  methods: {
    updateLatLng(point) {
      this.photo.lat = point.lat;
      this.photo.lng = point.lng;
    },
    saveImage() {
      this.errors = null;
      this.photo.getSavePromise().then(
        photo => {},
        err => {
          this.errors = deep(err, "response.data.errors");
        }
      );
    }
  }
};
</script>
