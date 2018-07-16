require('./bootstrap');
const collect = require("collect.js");


window.Vue = require('vue');
Vue.prototype.$http = window.axios;

import store from './store/index.js'

const app = new Vue({
    el: '#app',
    store,
    components: {
        slrBrowser: require("./components/SlrBrowser.vue")
    },
    mounted() {

    }
});
