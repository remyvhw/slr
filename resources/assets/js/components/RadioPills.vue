<template>
    <div class="inline-flex">
        <button v-for="(button, index) in buttons" :key="button.label" @click="$emit('select', button)" :class="{
            'rounded-l': index === 0,
            'rounded-r': index === buttons.length - 1,
            'bg-grey-lighter': !button.selected,
            'bg-grey-light': button.selected,
        }" class="hover:bg-grey border border-color-grey text-grey-darkest text-sm font-bold py-2 px-4">
            {{ button.label }}
            <span v-if="button.beta" class="bg-orange text-xs text-white font-bold py-1 px-2 -mr-2 rounded-full">
                Beta
            </span>

        </button>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    /**
     *
     * [{label: "Hello", selected: true}]
     *
     */
    buttons: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>