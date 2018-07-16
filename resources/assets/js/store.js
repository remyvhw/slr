
import Vue from 'vue'
import Vuex from 'vuex'
const collect = require("collect.js");

Vue.use(Vuex)

const rawLastVisitDate = document.head.querySelector('meta[name="last-visit"]').content;
const lastVisitDate = rawLastVisitDate ? new Date(rawLastVisitDate) : new Date();

export default new Vuex.Store({
    state: {
        obstructions: {
            url: null,
            content: {},
            filters: {
            }
        },
        lastVisitDate: lastVisitDate,
        settings: {
            showMap: true,
            user: document.head.querySelector('meta[name="user"]').content
        }
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
                obstruction.selected = selectedObstruction && obstruction.id === selectedObstruction.id;
                return obstruction;
            }).toArray();
        },
        setLastVisitDate(state, lDate) {
            state.lastVisitDate = lDate;
        },
        setSetting(state, setting, value) {
            state.settings[setting] = value;
        },
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
                    obstruction.selected = false;
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