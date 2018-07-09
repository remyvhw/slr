
<template>
    <generic-modal @close="closeModal">
        <div v-html="payload"></div>
    </generic-modal>

</template>

<script type="text/babel">
const marked = require("marked");

export default {
  props: {
    obstruction: { type: Object, required: true }
  },
  components: {
    genericModal: require("./GenericModal.vue")
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  },
  computed: {
    payload() {
      return marked(this.obstruction.payload, { sanitize: true });
    }
  }
};
</script>
