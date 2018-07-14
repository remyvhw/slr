
<template>
  <generic-modal @close="closeModal" title="Détails d'un chantier">

    <p class="text-sm text-grey-dark">
      {{ obstruction.date }}
    </p>
    <h2 class="font-bold text-grey-darkest border-b border-grey-light mb-4 pb-4">{{ obstruction.name }}</h2>

    <div v-html="payload" class="text-grey-darkest text-base"></div>

    <div class="mt-4 pt-4  border-t">
      <obstruction-link :url="'https://rem.info' + obstruction.url" type="external"></obstruction-link>
      <obstruction-link :url="'http://maps.google.com/maps?q=&layer=c&cbll=' + obstruction.lat + ',' + obstruction.lng" type="streetview"></obstruction-link>
    </div>
  </generic-modal>

</template>

<script type="text/babel">
const marked = require("marked");

export default {
  props: {
    obstruction: { type: Object, required: true }
  },
  components: {
    genericModal: require("../GenericModal.vue"),
    obstructionLink: require("./ObstructionLink.vue")
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  },
  computed: {
    payload() {
      return marked(
        this.obstruction.payload ? this.obstruction.payload : "(aucun contenu)",
        { sanitize: true }
      );
    }
  }
};
</script>
