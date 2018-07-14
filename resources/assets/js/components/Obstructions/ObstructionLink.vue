<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>
  <a :href="url" target="_blank" class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm text-blue no-underline mr-2">

    <svg v-if="type" class="fill-current text-blue w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

      <path v-if="type === 'external'" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" />

      <path v-if="type === 'streetview'" d="M192 64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zm112 80h-11.36c-22.711 10.443-49.59 10.894-73.28 0H208c-26.51 0-48 21.49-48 48v104c0 13.255 10.745 24 24 24h16v104c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V320h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48zm85.642 189.152a72.503 72.503 0 0 1-29.01 27.009C391.133 365.251 480 385.854 480 416c0 46.304-167.656 64-224 64-70.303 0-224-20.859-224-64 0-30.123 88.361-50.665 119.367-55.839a72.516 72.516 0 0 1-29.01-27.009C74.959 343.395 0 367.599 0 416c0 77.111 178.658 96 256 96 77.249 0 256-18.865 256-96 0-48.403-74.967-72.606-122.358-82.848z" />

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
