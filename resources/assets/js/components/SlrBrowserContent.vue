<template>

  <div>

    <div class="w-full text-center py-2">
      <radio-pills @select="toggleButtons" :buttons="buttons"></radio-pills>
    </div>

    <change-list v-if="selectedButton.id === 'changes'"></change-list>
    <obstruction-list v-if="selectedButton.id === 'obstructions'"></obstruction-list>
    <picture-list v-if="selectedButton.id === 'pictures'"></picture-list>

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
          selected: true,
          id: "changes"
        },
        {
          label: "Chantiers",
          selected: false,
          id: "obstructions"
        },
        {
          label: "Photos",
          selected: false,
          id: "pictures",
          beta: true
        }
      ]
    };
  },
  components: {
    radioPills: require("./RadioPills.vue"),
    obstructionList: require("./Obstructions/ObstructionList.vue"),
    changeList: require("./Changes/ChangeList.vue"),
    pictureList: require("./Pictures/PictureList.vue")
  },
  mounted() {},
  computed: {
    obstructions() {
      return this.$store.state.obstructions.content.data
        ? this.$store.state.obstructions.content.data
        : {};
    },
    selectedButton() {
      return collect(this.buttons).first(item => item.selected);
    }
  },
  methods: {
    toggleButtons(pressedButton) {
      this.$store.commit("browser/setPresentationType", pressedButton.id);

      this.buttons = collect(this.buttons)
        .map(button => {
          button.selected = button.id === pressedButton.id;
          return button;
        })
        .toArray();
    }
  }
};
</script>
