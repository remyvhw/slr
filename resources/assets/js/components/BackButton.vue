<style scoped>
button {
  transition: all 0.2s ease-in-out;
}
button:hover {
  transform: scale(1.1);
}
</style>
<template>
  <button @click="closeSubpage" aria-label="Retour">
    <svg class="fill-current h-8 w-8" :class="{'text-grey-light':dark, 'text-grey-dark': !dark}" width="54 " height="54 " viewBox="0 0 256 512 " xmlns="http://www.w3.org/2000/svg">
      <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z " />
    </svg>

    <img src="/logo.svg " class="h-8 w-8">
  </button>
</template>
<script type="text/babel">
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeSubpage() {
      this.$emit("click");
    }
  }
};
</script>
