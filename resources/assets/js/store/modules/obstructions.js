import Obstruction from "../models/Obstruction";

const collect = require("collect.js");

const endpoint = "/obstructions";

// initial state
const state = {
    content: {},
    filters: {
    }
}

// actions
const actions = {
    get(context) {
        context.commit("setData", {});
        const url = new URL(context.rootState.apiRoot + endpoint);
        collect(context.state.filters).each((value, filter) => {
            url.searchParams.append(filter, value);
        });
        axios.get(url).then(response => {
            let data = response.data;
            data.data = collect(data.data).map((apiObstruction) => {
                return new Obstruction(apiObstruction);
            }).toArray();
            context.commit('setData', data);
        });
    }
}

// mutations
const mutations = {
    setFilters(state, filters) {
        state.filters = filters;
    },
    setData(state, obstructions) {
        state.content = obstructions;
    },
    setSelection(state, selectedObstruction) {
        state.content.data = collect(state.content.data).map((obstruction) => {
            obstruction.selected = selectedObstruction && obstruction.id === selectedObstruction.id;
            return obstruction;
        }).toArray();
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}