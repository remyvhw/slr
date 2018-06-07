<template>
  <div class="max-w-md w-full lg:flex px-2 pt-2 ">
    <obstruction-static-map :obstruction="obstruction"></obstruction-static-map>
    <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <obstruction-updated-label :create-date="obstruction.created_at" :update-date="obstruction.updated_at" :delete-date="obstruction.deleted_at"></obstruction-updated-label>
        <div class="text-black font-bold text-l mb-2">{{ obstruction.name }}</div>
        <p class="text-grey-darker text-base">{{ obstruction.description }}</p>
        <p class="mt-2 text-center">
          <obstruction-metas :obstruction="obstruction"></obstruction-metas>
        </p>

      </div>

    </div>
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
  components: {
    obstructionStaticMap: require("./ObstructionStaticMap.vue"),
    obstructionMetas: require("./ObstructionMetas.vue"),
    obstructionUpdatedLabel: require("./ObstructionUpdatedLabel.vue")
  }
};
</script>
