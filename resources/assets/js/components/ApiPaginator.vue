
<template>
    <div class="inline-flex w-full px-1">
        <button class="bg-grey-light  border-r border-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-l w-1/2">
            Prev
        </button>
        <button class="bg-grey-light border-l border-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-r  w-1/2">
            Next
        </button>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    resource: { type: Object, required: true }
  },

  mounted() {},
  methods: {}
};
</script>
