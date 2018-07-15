<template>
    <setting-item>
        <a class="no-underline hover:underline text-white cursor-pointer" @click.stop="handleClick">
            {{ title }}
        </a>
    </setting-item>
</template>
<script type="text/babel">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: "get"
    }
  },
  components: {
    settingItem: require("./SettingItem.vue")
  },
  methods: {
    handleClick() {
      if (this.method === "post") {
        let form = document.createElement("form");
        let csrf = document.createElement("input");
        form.method = "POST";
        form.action = this.href;
        csrf.value = window.axios.defaults.headers.common["X-CSRF-TOKEN"];
        csrf.name = "_token";
        form.appendChild(csrf);
        document.body.appendChild(form);
        form.submit();
      } else {
        document.location.href = this.href;
      }
    }
  }
};
</script>