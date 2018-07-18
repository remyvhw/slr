
<template>
  <generic-modal @close="closeModal" title="Détails d'un chantier">
    <div v-if="!obstructions.length && !obstruction" class="spinner h-10"></div>
    <div v-if="obstructions.length && !obstruction">
      Oups! 404: Obstruction introuvable.
    </div>
    <main v-if="obstruction">
      <p class="text-sm text-grey-dark">
        {{ obstruction.date }}
      </p>
      <h2 class="font-bold text-grey-darkest border-b border-grey-light mb-4 pb-4">{{ obstruction.name }}</h2>

      <div v-html="payload" class="text-grey-darkest text-base"></div>

      <div class="mt-4 pt-4  border-t">
        <obstruction-link :url="'https://rem.info' + obstruction.url" type="external"></obstruction-link>
        <obstruction-link :url="'http://maps.google.com/maps?q=&layer=c&cbll=' + obstruction.lat + ',' + obstruction.lng" type="streetview"></obstruction-link>
      </div>
    </main>
  </generic-modal>

</template>

<script type="text/babel">
const marked = require("marked");
const collect = require("collect.js");

export default {
  props: {
    obstructionId: { type: String, required: true }
  },
  components: {
    genericModal: require("../GenericModal.vue"),
    obstructionLink: require("./ObstructionLink.vue")
  },
  methods: {
    closeModal() {
      if (this.$route.meta.shouldBackOnClose) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "browser" });
      }
    }
  },
  mounted() {
    if (!this.$store.state.obstructions.content.data) {
      this.$store.dispatch("obstructions/get");
    }
  },
  computed: {
    payload() {
      if (!this.obstruction) return null;
      return marked(
        this.obstruction.payload ? this.obstruction.payload : "(aucun contenu)",
        { sanitize: true }
      );
    },
    obstructions() {
      return this.$store.state.obstructions.content.data
        ? this.$store.state.obstructions.content.data
        : {};
    },
    obstruction() {
      const obstruction = collect(this.obstructions).first(obstruction => {
        return obstruction.id === this.obstructionId;
      });
      return obstruction;
    }
  }
};
</script>
