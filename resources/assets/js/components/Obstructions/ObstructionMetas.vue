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

    <router-link :to="{name: 'browser.obstructions.details', params: { obstructionId: obstruction.id }}" v-if="!obstruction.deleted_at" class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm text-blue no-underline mr-2 mb-2">

      <svg class="fill-current text-blue w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

        <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />

      </svg>

      <span class="mx-1">Détails</span>

    </router-link>

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
