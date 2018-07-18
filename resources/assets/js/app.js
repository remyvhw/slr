require('./bootstrap');
const collect = require("collect.js");


window.Vue = require('vue');
Vue.prototype.$http = window.axios;
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store/index.js'

import routes from './routes.js'

const router = new VueRouter({ routes })

const app = new Vue({
    el: '#app',
    store,
    router
});
