require('./bootstrap');

window.Vue = require('vue');

Vue.prototype.$http = window.axios;

const app = new Vue({
    el: '#app',
    components: {
        obstructionBrowser: require("./components/ObstructionBrowser.vue")
    }
});
