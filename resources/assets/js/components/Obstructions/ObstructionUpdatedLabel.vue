<template>
  <span>
    <span
      v-if="isNew || wasUpdated || wasDeleted"
      class="bg-transparent border text-xs py-1 rounded-full float-right"
      :class="labelClasses"
    >
      <span
        class="px-2"
        v-if="isNew && !wasDeleted"
      >Nouveau</span>
      <span
        class="px-2"
        v-if="wasUpdated && !wasDeleted"
      >Modifié</span>
      <span
        class="px-2"
        v-if="wasDeleted"
      >Supprimé</span>
    </span>
  </span>
</template>

<script type="text/babel">
export default {
  props: {
    createDate: {
      type: Date,
      required: true
    },
    updateDate: {
      type: Date,
      required: true
    },
    deleteDate: {
      type: Date,
      required: false
    }
  },
  computed: {
    isNew() {
      return this.$store.state.lastVisitDate <= this.createDate;
    },
    wasUpdated() {
      if (this.isNew || this.wasDeleted) return false;
      return this.$store.state.lastVisitDate <= this.updateDate;
    },
    wasDeleted() {
      if (!this.deleteDate) return false;
      return this.$store.state.lastVisitDate <= this.deleteDate;
    },
    labelClasses() {
      if (this.wasDeleted) {
        return ["border-red", "text-red"];
      } else if (this.wasUpdated) {
        return ["border-orange", "text-orange"];
      }
      return ["border-green", "text-green"];
    }
  }
};
</script>
