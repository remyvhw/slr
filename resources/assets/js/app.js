require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.prototype.$http = window.axios;



const app = new Vue({
    el: '#app',
    store,
    components: {
        obstructionBrowser: require("./components/ObstructionBrowser.vue")
    }
});
