<template>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-2/3">
            <div class="h-full h-screen">
                <obstruction-map></obstruction-map>
            </div>
        </div>
        <div class="w-full h-screen overflow-y-scroll bg-grey-lighter lg:w-1/3 py-4">
            <div class="w-full text-center">
                <div class="self-center"><img src="/logo.svg" class="h-8 w-8"></div>
            </div>
            <div class="px-2 lg:px-0 ">

            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {};
  },
  components: {
    obstructionMap: require("./ObstructionMap.vue")
  }
};
</script>
