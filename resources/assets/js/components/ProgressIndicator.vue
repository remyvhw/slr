<template>
  <div class="w-full">
    <div class="shadow w-full bg-grey-light">
      <div class="bg-blue text-xs leading-none py-1 text-center text-white" :style="{width: progress + '%'}">{{ progress }}%</div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    progress: { type: Number, required: true }
  }
};
</script>
