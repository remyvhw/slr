<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>
    <nav class="inline-flex w-full px-1 py-4 text-center text-sm">
        <div class="inline-flex w-1/3">
            <button aria-label="Première page" @click="first" class="bg-grey-light border-r border-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-l w-1/3">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 448 375">
                    <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" />
                </svg>
            </button>
            <button aria-label="Page précédente" @click="previous" class="bg-grey-light  border-l border-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 w-2/3">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-200 20 448 375">
                    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                </svg>
            </button>
        </div>
        <div class="bg-grey-lighter  border-t border-b border-grey-light text-grey-darkest font-bold py-2 px-4 w-1/3">{{ data.meta.current_page }}/{{ data.meta.last_page }}</div>
        <div class="inline-flex w-1/3">
            <button aria-label="Page suivante" @click="next" class="bg-grey-light border-r border-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4  w-2/3">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-200 20 448 375">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
            </button>
            <button aria-label="Dernière page" @click="last" class="bg-grey-light border-l border-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-r  w-1/3">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 448 375">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                </svg>

            </button>
        </div>
    </nav>
</template>

<script type="text/babel">
export default {
  props: {
    resource: { type: String, required: true }
  },

  computed: {
    data() {
      return this.$store.state[this.resource].content;
    }
  },

  mounted() {},
  methods: {
    previous() {},
    next() {},
    first() {},
    last() {}
  }
};
</script>
