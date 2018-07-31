<template>
    <div class="border border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="flex items-center">
            <div :style='imageStyle' alt="Photo enregistrée" class="w-12 h-12 rounded mr-4 bg-cover">

            </div>

            <div class="text-sm">
                <p class="text-green-dark leading-none">Votre image a été entregistrée!</p>
                <!--<p class="text-grey-dark"></p>-->
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    photo: { type: Object, required: true }
  },
  computed: {
    imageStyle() {
      return {
        "background-image": "url('" + this.photo.versions.orig + "')"
      };
    }
  }
};
</script>
