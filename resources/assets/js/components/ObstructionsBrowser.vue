<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-2/3">
      <div class="h-64 lg:h-screen">
        <obstructions-map></obstructions-map>
      </div>
    </div>
    <div class="w-full h-screen lg:overflow-y-scroll bg-grey-lighter lg:w-1/3 py-4">
      <div class="w-full text-center">
        <div class="self-center"><img src="/logo.svg" class="h-10 w-10"></div>
      </div>

      <obstructions-list :api-endpoint="apiEndpoint"></obstructions-list>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {};
  },
  props: {
    apiEndpoint: {
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
