<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
  <div class="relative h-screen bg-red">

    <div class="absolute pin-t pin-l ml-4 mt-4 bg-smoke-dark rounded-full px-4 py-2">
      <back-button @click="closeSubpage" :dark="true"></back-button>
    </div>
  </div>

</template>

<script type="text/babel">
export default {
  components: {
    backButton: require("../BackButton.vue"),
    progressIndicator: require("../ProgressIndicator.vue")
  },

  computed: {},
  methods: {
    closeSubpage() {
      if (this.$route.meta.shouldBackOnClose) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "browser.photos" });
      }
    }
  }
};
</script>
