<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>
  <generic-modal @close="closeModal" title="Envoi de photos">

    <picture-upload-item v-for="file in files" :photo="file" :key='file.temporaryId'></picture-upload-item>

    <div class="flex flex-wrap py-4">
      <div class="w-full">
        <button @click="openFileDialog" class="flex items-center block w-full text-white font-bold py-2 px-4 rounded justify-center h-12" :class="{
          'bg-brand hover:bg-brand-dark': !files.length,
          'bg-grey hover:bg-grey-dark': files.length,
          
        }">
          <svg class="fill-current inline-block w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
          </svg>
          <span>Ajouter des photos</span>
        </button>
        <input ref="fileinput" multiple type="file" @change="processFiles" class="opacity-0">
      </div>
    </div>

  </generic-modal>

</template>

<script type="text/babel">
const marked = require("marked");
import { PhotoScaffold } from "../../store/models/Photo";

export default {
  components: {
    genericModal: require("../GenericModal.vue"),
    pictureUploadItem: require("./PictureUploadItem.vue")
  },
  data() {
    return {
      files: []
    };
  },
  methods: {
    closeModal() {
      if (this.$route.meta.shouldBackOnClose) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "browser" });
      }
    },

    openFileDialog() {
      this.$refs.fileinput.click();
    },

    processFiles(event) {
      Array.from(event.target.files).forEach(file => {
        let photo = new PhotoScaffold(file);
        this.files.push(photo);
      });
      event.target.value = "";
    }
  }
};
</script>
