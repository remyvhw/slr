<template>
  <div class="h-auto lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center" :style="{'background-image': 'url(\'' + imageUrl + '\')'}">
  </div>

</template>

<script type="text/babel">
export default {
  props: {
    obstruction: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() {
      const longLat = this.obstruction.lng + "," + this.obstruction.lat;
      return (
        "https://api.mapbox.com/v4/mapbox.streets-satellite/" +
        longLat +
        ",14.25,0,30/300x300@2x.png32?access_token=" +
        window.mapbox.accessToken
      );
    }
  }
};
</script>
