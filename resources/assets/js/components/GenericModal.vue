<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>

    <div @click.self="closeModal" class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
        <div class="fixed shadow-inner max-w-md relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
            <div class="h-12 pb-4 mb-4 overflow-hidden border-b border-grey-light">
                <span class="font-bold text-xl mb-2" v-text="title"></span>
                <span @click="closeModal" class="absolute bg-white pin-t pin-r pt-8 px-8">
                    <svg class="h-8 w-8 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>Fermer</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>
            </div>
            <slot></slot>

        </div>
    </div>

</template>

<script type="text/babel">
export default {
  props: {
    title: String
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
