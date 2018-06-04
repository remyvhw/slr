require('./bootstrap');

window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    components: {
        obstructionBrowser: require("./components/ObstructionBrowser.vue")
    }
});
