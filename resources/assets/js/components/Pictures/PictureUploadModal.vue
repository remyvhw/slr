
<template>
    <generic-modal @close="closeModal" title="Envoi de photos">

    </generic-modal>

</template>

<script type="text/babel">
const marked = require("marked");

export default {
  components: {
    genericModal: require("../GenericModal.vue")
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
