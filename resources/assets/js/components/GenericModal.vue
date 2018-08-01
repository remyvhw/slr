<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>

    <div @click.self="closeModal" class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
        <div class="fixed shadow-inner max-w-md relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
            <div class="h-12 pb-4 mb-4 overflow-hidden border-b border-grey-light">
                <span class="font-bold text-xl mb-2" v-text="title"></span>
                <span @click="closeModal" class="absolute bg-white pin-t pin-r pt-8 px-8">
                    <svg class="h-8 w-8 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>Fermer</title>
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
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
