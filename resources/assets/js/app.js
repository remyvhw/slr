require('./bootstrap');
const collect = require("collect.js");

window.Vue = require('vue');
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.prototype.$http = window.axios;


const store = new Vuex.Store({
    state: {
        obstructions: {
            url: null,
            content: {},
            filters: {
                "include-deleted": false,
            }
        },
        lastVisitDate: null,
    },
    mutations: {
        setObstructionsUrl(state, url) {
            state.obstructions.url = url;
        },
        setObstructionFilters(state, filters) {
            state.obstructions.filters = filters;
        },
        setObstructionData(state, obstructions) {
            state.obstructions.content = obstructions;
        },
        setLastVisitDate(state, lDate) {
            state.lastVisitDate = lDate;
        }
    },
    actions: {
        setObstructionsUrl(context, url) {
            context.commit("setObstructionsUrl", url);
            context.dispatch("getObstructions");
        },
        getObstructions(context) {
            context.commit("setObstructionData", {});
            const url = new URL(context.state.obstructions.url);
            collect(context.state.obstructions.filters).each((value, filter) => {
                url.searchParams.append(filter, value);
            });
            axios.get(url).then(response => {
                context.commit('setObstructionData', response.data);
            });
        }
    }
});

const app = new Vue({
    el: '#app',
    store,
    components: {
        obstructionsBrowser: require("./components/ObstructionsBrowser.vue")
    },
    mounted() {
        const lastVisit = document.head.querySelector('meta[name="last-visit"]').content;
        this.$store.commit("setLastVisitDate", new Date(lastVisit));
    }
});
