
<template>
    <generic-modal @close="closeModal">
        <div v-html="payload"></div>

        <div class="my-3 py-3 border-grey-light border-t">
            <obstruction-link :url="'https://rem.info' + obstruction.url"></obstruction-link>
        </div>
    </generic-modal>

</template>

<script type="text/babel">
const marked = require("marked");

export default {
  props: {
    obstruction: { type: Object, required: true }
  },
  components: {
    genericModal: require("./GenericModal.vue"),
    obstructionLink: require("./ObstructionLink.vue")
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
