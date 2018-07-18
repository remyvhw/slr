
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
      if (this.$route.meta.shouldBackOnClose) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "browser" });
      }
    }
  }
};
</script>
