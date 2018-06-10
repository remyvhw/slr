<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>

    <div>
        <obstruction-meta :type='"work:" + obstruction.type'></obstruction-meta>
        <obstruction-meta :type='"night:" + (obstruction.night ? "true" : "false")'></obstruction-meta>
        <obstruction-meta type='level:major' v-if="obstruction.major"></obstruction-meta>
        <obstruction-meta :type='"active:" + (obstruction.active ? "true" : "false")'></obstruction-meta>
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
    obstructionMeta: require("./ObstructionMeta.vue")
  }
};
</script>
