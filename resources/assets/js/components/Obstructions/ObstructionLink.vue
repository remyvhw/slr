<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
  <a :href="url" target="_blank" class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm text-blue no-underline mr-2">

    <svg v-if="type" class="fill-current text-blue w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">

      <path v-if="type === 'external'" d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z" />

      <path v-if="type === 'streetview'" d="M0 0l6 4 8-4 6 4v16l-6-4-8 4-6-4V0zm7 6v11l6-3V3L7 6z" />

    </svg>

    <span class="mx-1">
      <span v-if="title" v-text="title"></span>
      <span v-else>
        <span v-if="type === 'external'">Voir sur le site</span>
        <span v-if="type === 'streetview'">Street View</span>
      </span>
    </span>

  </a>

</template>

<script type="text/babel">
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    type: {
      type: String,

      validator: function(value) {
        // The value must match one of these strings
        return ["external", "streetview"].indexOf(value) !== -1;
      },
      default: "external"
    }
  },
  methods: {
    openLink() {
      window.location.href = this.url;
    }
  }
};
</script>
