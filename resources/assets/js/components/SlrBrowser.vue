<template>
  <div class="flex flex-wrap">
    <div class="w-full fixed lg:relative lg:w-2/3">
      <div class="h-64 lg:h-screen">
        <slr-browser-map :api-endpoint="featuresApiEndpoint"></slr-browser-map>
      </div>
    </div>
    <div class="w-full min-h-screen lg:h-screen lg:overflow-y-scroll bg-grey-lighter lg:w-1/3 mt-64 lg:mt-0">
      <div class=" py-4">
        <div class="w-full text-center">
          <div class="self-center"><img src="/logo.svg" class="h-10 w-10"></div>
        </div>

        <slr-sidebar :api-endpoint="obstructionsApiEndpoint"></slr-sidebar>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {};
  },
  props: {
    obstructionsApiEndpoint: {
      Type: String
    },
    featuresApiEndpoint: {
      Type: String
    }
  },
  components: {
    radioPills: require("./RadioPills.vue"),
    slrBrowserMap: require("./SlrBrowserMap.vue"),
    slrSidebar: require("./SlrSidebar.vue")
  }
};
</script>
