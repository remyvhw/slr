<template>
  <div class="flex flex-wrap">
    <div class="w-full fixed lg:relative lg:w-2/3">
      <div class="h-64 lg:h-screen">
        <obstructions-map :api-endpoint="featuresApiEndpoint"></obstructions-map>
      </div>
    </div>
    <div class="w-full min-h-screen lg:overflow-y-scroll bg-grey-lighter lg:w-1/3 mt-64 lg:mt-0">
      <div class=" py-4">
        <div class="w-full text-center">
          <div class="self-center"><img src="/logo.svg" class="h-10 w-10"></div>
        </div>

        <obstructions-list :api-endpoint="obstructionsApiEndpoint"></obstructions-list>
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
    obstructionsMap: require("./ObstructionsMap.vue"),
    obstructionsList: require("./ObstructionsList.vue")
  }
};
</script>
