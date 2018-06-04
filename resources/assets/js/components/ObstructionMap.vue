<template>
    <div class="h-full w-full">
    </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {};
  },
  mounted() {
    var map = new window.mapbox.Map({
      container: this.$el,
      style: "mapbox://styles/mapbox/streets-v10"
    });
  }
};
</script>
