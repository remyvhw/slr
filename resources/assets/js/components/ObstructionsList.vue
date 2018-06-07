<template>

    <div>
        <div class="w-full text-center py-2">
            <radio-pills :buttons="[{label: 'Changements', selected: true}, {label: 'Chantiers', selected: false}]"></radio-pills>
        </div>

        <div v-if="!$store.state.obstructions.content.data" class="spinner h-10"></div>

        <div v-if="obstructions">
            <obstruction-item v-for="obstruction in obstructions" :key="obstruction.id" :obstruction="obstruction"></obstruction-item>
        </div>

    </div>
</template>

<script type="text/babel">
export default {
  props: {
    apiEndpoint: {
      Type: String
    }
  },
  components: {
    radioPills: require("./RadioPills.vue"),
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
