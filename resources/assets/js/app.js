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
            }
        },
        lastVisitDate: new Date(document.head.querySelector('meta[name="last-visit"]').content),
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
        setObstructionSelection(state, selectedObstruction) {
            state.obstructions.content.data = collect(state.obstructions.content.data).map((obstruction) => {
                obstruction.selected = obstruction.id === selectedObstruction.id;
                return obstruction;
            }).toArray();
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
                let data = response.data;
                data.data = collect(data.data).map((obstruction) => {
                    obstruction.created_at = new Date(obstruction.created_at);
                    obstruction.updated_at = new Date(obstruction.updated_at);
                    obstruction.deleted_at = obstruction.deleted_at ? new Date(obstruction.deleted_at) : null;
                    return obstruction;
                }).toArray();
                context.commit('setObstructionData', data);
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

    }
});
