<template>
  <div class="w-full lg:flex px-2 pt-2">

    <obstruction-static-map @click="selectObstruction" :obstruction="obstruction"></obstruction-static-map>
    <div class="border border-grey-light rounded-b rounded-t lg:rounded-b-none lg:rounded-t-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" :class="{
      'bg-white': !selected,
      'bg-orange-lightest': selected
    }">
      <div class="mb-8">
        <obstruction-updated-label :create-date="obstruction.created_at" :update-date="obstruction.updated_at" :delete-date="obstruction.deleted_at"></obstruction-updated-label>
        <div class="text-black font-bold text-l mb-2" @click="selectObstruction">{{ obstruction.name }}</div>
        <p class="text-grey-darker text-base">{{ obstruction.description }}</p>
        <div class="mt-2">
          <obstruction-metas :obstruction="obstruction"></obstruction-metas>
        </div>

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
  watch: {
    selected: function(newVal, oldVal) {
      if (newVal && !oldVal && document.body.clientWidth > 992)
        this.$el.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
    }
  },
  computed: {
    selected() {
      return this.obstruction.isSelectedInStore(this.$store);
    }
  },
  components: {
    obstructionStaticMap: require("./ObstructionStaticMap.vue"),
    obstructionMetas: require("./ObstructionMetas.vue"),
    obstructionUpdatedLabel: require("./ObstructionUpdatedLabel.vue")
  },
  methods: {
    selectObstruction() {
      this.$store.commit(
        "browser/setSelection",
        this.selected ? null : this.obstruction
      );
    }
  }
};
</script>
