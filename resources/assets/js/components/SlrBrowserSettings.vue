<!--
 * Icons by Zondicons by Steve Schoger - http://www.zondicons.com/
 * License CC
-->
<template>
    <div>
        <transition name="fadeDown" enter-active-class="fadeInDown" leave-active-class="fadeOutUp" mode="out-in">
            <div v-if="!collapsed" class="bg-grey-darker shadow-inner text-grey-lightest px-2 py-4">

                <ul class="list-reset">
                    <setting-item-link v-if="$store.state.settings.user" title="Déconnexion" href="/logout" method="post"></setting-item-link>
                    <template v-else>
                        <setting-item-link title="Connexion" href="/login"></setting-item-link>
                        <setting-item-link title="Créer un compte" href="/register"></setting-item-link>
                    </template>
                </ul>

            </div>
        </transition>

        <div class="text-right -mb-8">
            <button @click="collapsed=!collapsed" class="p-2 hover:text-blue" :class="{'text-grey': collapsed, 'text-grey-darkest': !collapsed}" aria-label="Paramètres">
                <svg class=" h-4 w-4 fill-current  inline-block " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 20 20 ">
                    <!--<path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />-->
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      collapsed: true
    };
  },
  components: {
    settingItemLink: require("./Settings/SettingItemLink.vue")
  }
};
</script>