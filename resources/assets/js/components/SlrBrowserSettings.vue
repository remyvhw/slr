<!--
 * Icons by Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
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
                <svg class=" h-4 w-4 fill-current  inline-block " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 512 512 ">
                    <!--<path d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z " />-->
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
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