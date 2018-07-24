import './bootstrap';

const collect = require("collect.js");


window.Vue = require('vue');
Vue.prototype.$http = window.axios;
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store/index.js'

import router from './router.js'



const app = new Vue({
    el: '#app',
    store,
    router
});
