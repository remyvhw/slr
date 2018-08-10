<template>

  <div>

    <div v-if="!$store.state.changes.content.data" class="spinner h-10"></div>

    <div v-if="changes && $store.state.changes.content.data">
      <div v-for="change in changes" :key="change.id">
        <obstruction-item v-if="change.type==='Obstruction'" :obstruction="change.payload"></obstruction-item>
        <photo-item v-if="change.type==='Photo'" :photo="change.payload" :full-width="true"></photo-item>
      </div>
      <div v-if="!$store.state.changes.content.data.length" class="border-t order-t-1 px-4 py-3 m-4  text-center" role="alert">
        <p class="font-sm italic text-grey-dark">Rien de neuf</p>
      </div>
    </div>

  </div>
</template>

<script type="text/babel">
export default {
  components: {
    obstructionItem: require("../Obstructions/ObstructionItem.vue"),
    photoItem: require("../Pictures/PhotoItem.vue")
  },
  mounted() {
    if (!this.$store.state.changes.content.data) this.retrieveChanges();
  },
  computed: {
    changes() {
      return this.$store.state.changes.content.data
        ? this.$store.state.changes.content.data
        : {};
    }
  },
  methods: {
    retrieveChanges() {
      this.$store.dispatch("changes/get");
    }
  }
};
</script>
