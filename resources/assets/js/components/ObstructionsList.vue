<template>

  <div>
    <div class="w-full text-center py-2">
      <radio-pills @select="toggleButtons" :buttons="buttons"></radio-pills>
    </div>

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
const collect = require("collect.js");
export default {
  data() {
    return {
      buttons: [
        {
          label: "Changements",
          selected: false,
          id: "whatsnew",
          urlSuffix: "/new"
        },
        {
          label: "Chantiers",
          selected: false,
          id: "present",
          urlSuffix: ""
        }
      ]
    };
  },
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
    this.toggleButtons(collect(this.buttons).first());
  },
  computed: {
    obstructions() {
      return this.$store.state.obstructions.content.data
        ? this.$store.state.obstructions.content.data
        : {};
    }
  },
  methods: {
    toggleButtons(pressedButton) {
      this.buttons = collect(this.buttons)
        .map(button => {
          button.selected = button.id === pressedButton.id;
          return button;
        })
        .toArray();

      var url = new URL(this.apiEndpoint + pressedButton.urlSuffix);
      if (pressedButton.id === "whatsnew" && this.$store.state.lastVisitDate)
        url.searchParams.append(
          "since",
          this.$store.state.lastVisitDate.toISOString()
        );
      this.$store.dispatch("setObstructionsUrl", url);
    }
  }
};
</script>
