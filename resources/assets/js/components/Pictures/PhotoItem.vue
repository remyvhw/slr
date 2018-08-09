<template>
  <figure class="w-1/2 px-1 mb-2">
    <div class="border border-grey-light overflow-hidden rounded text-center" :class="{
      'bg-white': !selected,
      'bg-orange-lightest': selected
    }">

      <div class="w-full  bg-cover overflow-hidden h-32" :style="imageStyle"></div>
      <div class=" px-2 py-2 ">
        <p class="text-sm text-grey-dark flex items-center">
          <svg class="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
          </svg>
          {{ photo.user.name }}
        </p>
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
    imageStyle() {
      return {
        "background-image": "url(" + this.photo.versions.orig + ")"
      };
    }
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
