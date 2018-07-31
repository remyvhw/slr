<template>
    <div class="w-auto rounded overflow-hidden mb-8 shadow-lg">
        <div class="spinner h-10" v-if="photo.processing"></div>
        <picture-upload-completed v-if="!photo.processing && apiPhoto" :photo="apiPhoto"></picture-upload-completed>
        <div v-if="!photo.processing && !apiPhoto">
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

                <div v-if="!apiPhoto" class="flex flex-wrap py-4">
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
export default {
  props: {
    photo: { type: Object, required: true }
  },
  computed: {},
  data() {
    return { apiPhoto: null };
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
      this.photo.getSavePromise().then(apiPhoto => {
        this.apiPhoto = apiPhoto;
      });
    }
  }
};
</script>
