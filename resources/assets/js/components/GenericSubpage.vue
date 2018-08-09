<style scoped>
.back {
  transition: all 0.2s ease-in-out;
}
.back:hover {
  transform: scale(1.1);
}
</style>

<template>

  <section>

    <nav class="flex items-center justify-between flex-wrap p-6" :class="{'bg-grey-darkest':dark, 'bg-grey-light': !dark}">
      <div class="flex items-center flex-no-shrink text-white mr-6 ">
        <back-button @click="closeSubpage" :dark="dark"></back-button>

      </div>

    </nav>

    <main>
      <slot></slot>
    </main>

  </section>

</template>

<script type="text/babel">
export default {
  components: {
    backButton: require("./BackButton.vue")
  },
  props: {
    title: String,
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeSubpage() {
      this.$emit("close");
    }
  }
};
</script>
