<template>

  <div>
    <router-view></router-view>
    <div v-if="!$store.state.obstructions.content.data" class="spinner h-10"></div>

    <div v-if="obstructions && $store.state.obstructions.content.data">
      <obstruction-item v-for="obstruction in obstructions" :key="obstruction.id" :obstruction="obstruction"></obstruction-item>
      <div v-if="!$store.state.obstructions.content.data.length" class="border-t order-t-1 px-4 py-3 m-4  text-center" role="alert">
        <p class="font-sm italic text-grey-dark">Rien de neuf</p>
      </div>
    </div>

  </div>
</template>

<script type="text/babel">
export default {
  components: {
    obstructionItem: require("./ObstructionItem.vue")
  },
  mounted() {
    if (!this.$store.state.obstructions.content.data)
      this.retrieveObstructions();
  },
  computed: {
    obstructions() {
      return this.$store.state.obstructions.content.data
        ? this.$store.state.obstructions.content.data
        : {};
    }
  },
  methods: {
    retrieveObstructions() {
      this.$store.dispatch("obstructions/get");
    }
  }
};
</script>
