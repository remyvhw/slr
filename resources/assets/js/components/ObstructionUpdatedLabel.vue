<template>
  <span>
    <span v-if="isNew || wasUpdated || wasDeleted" class="bg-transparent border text-xs py-1 rounded-full float-right" :class="{
    'border-orange': wasUpdated,
    'text-orange': wasUpdated,
    'border-green': isNew,
    'text-green': isNew,
    'border-red': wasDeleted,
    'text-red': wasDeleted
  }">
      <span class="px-2" v-if="isNew">Nouveau</span>
      <span class="px-2" v-if="wasUpdated">Modifié</span>
      <span class="px-2" v-if="wasDeleted">Supprimé</span>
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
      if (this.isNew) return false;
      return this.$store.state.lastVisitDate <= this.updateDate;
    },
    wasDeleted() {
      if (!this.deleteDate) return false;
      return this.$store.state.lastVisitDate <= this.deleteDate;
    }
  }
};
</script>
