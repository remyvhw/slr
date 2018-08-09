<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
    <generic-subpage @close="closeSubpage" :dark="true">
        hello, world

    </generic-subpage>

</template>

<script type="text/babel">
export default {
  components: {
    genericSubpage: require("../GenericSubpage.vue"),
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
