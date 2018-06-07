<template>

    <div>
        <div class="w-full text-center py-2">
            <radio-pills @select="toggleButtons" :buttons="buttons"></radio-pills>
        </div>

        <div v-if="!$store.state.obstructions.content.data" class="spinner h-10"></div>

        <div v-if="obstructions">
            <obstruction-item v-for="obstruction in obstructions" :key="obstruction.id" :obstruction="obstruction"></obstruction-item>
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
      this.$store.dispatch(
        "setObstructionsUrl",
        this.apiEndpoint + pressedButton.urlSuffix
      );
    }
  }
};
</script>
