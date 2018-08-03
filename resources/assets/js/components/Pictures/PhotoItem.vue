<template>
  <figure class="w-1/2 px-1 mb-2">
    <div class="border border-grey-light overflow-hidden rounded text-center" :class="{
      'bg-white': !selected,
      'bg-orange-lightest': selected
    }">
      <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg">
      <div class="px-2 py-2">
        Contenu
      </div>
    </div>
  </figure>
</template>

<script type="text/babel">
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  watch: {
    /*selected: function(newVal, oldVal) {
      if (newVal && !oldVal && document.body.clientWidth > 992)
        this.$el.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
    }*/
  },
  computed: {
    /*selected() {
      return this.photo.isSelectedInStore(this.$store);
    }*/
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
