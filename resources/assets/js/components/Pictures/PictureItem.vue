<template>
    <div class="w-full lg:flex px-2 pt-2">

    </div>
</template>

<script type="text/babel">
const haversine = require("haversine");

export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  watch: {
    selected: function(newVal, oldVal) {
      if (newVal && !oldVal && document.body.clientWidth > 992)
        this.$el.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
    }
  },
  computed: {
    selected() {
      return this.photo.isSelectedInStore(this.$store);
    }
  },
  components: {},
  methods: {
    selectPhoto() {
      this.$store.commit(
        "browser/setSelection",
        this.selected ? null : this.photo
      );
    }
  }
};
</script>
