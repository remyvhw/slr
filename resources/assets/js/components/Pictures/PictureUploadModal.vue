<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<template>
  <generic-modal @close="closeModal" title="Envoi de photos">

    <picture-upload-item v-for="file in files" :photo="file" :key='file.temporaryId'></picture-upload-item>

    <button @click="openFileDialog" class="bg-grey-light hover:bg-grey text-grey-darkest font-bold mx-auto my-2 py-2 px-4 rounded inline-flex items-center text-center">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
      </svg>
      <span>Ajouter des photos</span>
    </button>
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
      let fileInput = document.createElement("input");
      fileInput.setAttribute("type", "file");
      fileInput.setAttribute("multiple", "");

      fileInput.addEventListener("change", () => {
        Array.from(fileInput.files).forEach(file => {
          let photo = new PhotoScaffold(file);
          this.files.push(photo);
        });
      });

      fileInput.click();
    }
  }
};
</script>
