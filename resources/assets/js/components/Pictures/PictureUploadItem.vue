<template>
    <div class="w-auto rounded overflow-hidden mb-8 shadow-lg">
        <div v-if="photo.processing" class="spinner h-10"></div>
        <div v-else>
            <img class="w-full" :src="photo.blob">

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
                        <textarea :id="'legend_'+_uid" class="appearance-none block w-full h-16 bg-grey-lighter text-grey-darker border border-grey-lighter rounded p-2 leading-tight"></textarea>
                    </div>
                </div>

                <div class="flex flex-wrap py-4">
                    <div class="w-full">
                        <button class="bg-brand block w-full hover:bg-brand-dark text-white font-bold py-2 px-4 rounded h-12">Enregistrer l'image</button>
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
    return {
      editingLocation: false
    };
  },
  components: {
    draggablePinMap: require("../DraggablePinMap.vue")
  },
  methods: {
    updateLatLng(point) {
      this.photo.lat = point.lat;
      this.photo.lng = point.lng;
    }
  }
};
</script>
