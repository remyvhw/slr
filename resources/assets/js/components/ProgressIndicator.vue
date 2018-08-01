
<template>
  <div class="w-full rounded overflow-hidden">
    <transition name="fadeLeft">
      <div class="shadow w-full bg-grey-light">
        <div class="bg-blue text-sm font-bold leading-none py-1 text-center text-white" :style="{width: progress + '%'}">{{ progress }}%</div>
      </div>
    </transition>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    progress: { type: Number, required: true }
  }
};
</script>
