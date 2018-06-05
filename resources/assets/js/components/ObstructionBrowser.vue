<template>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-2/3">
            <div class="h-64 lg:h-screen">
                <obstruction-map></obstruction-map>
            </div>
        </div>
        <div class="w-full h-screen lg:overflow-y-scroll bg-grey-lighter lg:w-1/3 py-4">
            <div class="w-full text-center">
                <div class="self-center"><img src="/logo.svg" class="h-10 w-10"></div>
            </div>
            <div>
                <obstruction-item v-for="obstruction in obstructions" :key="obstruction.id" :obstruction="obstruction"></obstruction-item>

            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {};
  },
  props: {
    apiEndpoint: {
      Type: String
    }
  },
  components: {
    obstructionMap: require("./ObstructionMap.vue"),
    obstructionItem: require("./ObstructionItem.vue")
  },
  mounted() {
    this.$store.dispatch("setObstructionsUrl", this.apiEndpoint);
  },
  computed: {
    obstructions() {
      return this.$store.state.obstructions.content.data
        ? this.$store.state.obstructions.content.data
        : {};
    }
  }
};
</script>
