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

          <div class="w-full text-center py-2">
            <radio-pills :buttons="buttons"></radio-pills>
          </div>

          <router-view></router-view>

        </div>
      </div>
    </div>

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
    slrBrowserSettings: require("./SlrBrowserSettings.vue")
  },
  computed: {
    buttons() {
      return [
        {
          label: "Changements",
          route: "browser.changes"
        },
        {
          label: "Chantiers",
          route: "browser.obstructions"
        },
        {
          label: "Photos",
          route: "browser.photos",
          beta: true
        }
      ];
    }
  }
};
</script>
