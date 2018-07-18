<template>
  <section>
    <div class="flex flex-wrap">
      <div class="w-full fixed lg:relative lg:w-2/3">
        <div class="h-64 lg:h-screen">
          <slr-browser-map></slr-browser-map>
        </div>
      </div>
      <div class="w-full min-h-screen lg:h-screen lg:overflow-y-scroll bg-grey-lighter lg:w-1/3 mt-64 lg:mt-0">
        <slr-browser-settings></slr-browser-settings>
        <div class="py-4">
          <div class="w-full text-center">
            <div class="self-center"><img src="/logo.svg" class="h-10 w-10"></div>
          </div>

          <slr-browser-content></slr-browser-content>

        </div>
      </div>
    </div>
    <router-view>

    </router-view>
  </section>
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
    slrBrowserContent: require("./SlrBrowserContent.vue"),
    slrBrowserSettings: require("./SlrBrowserSettings.vue")
  }
};
</script>
