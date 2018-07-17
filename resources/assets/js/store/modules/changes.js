import Change from "../models/Change";

const collect = require("collect.js");

const endpoint = "/changes";

// initial state
const state = {
    content: {},
}

// actions
const actions = {
    get(context) {
        context.commit("setData", {});
        const url = new URL(context.rootState.apiRoot + endpoint);

        url.searchParams.append(
            "since",
            context.rootState.lastVisitDate.toISOString()
        );

        axios.get(url).then(response => {
            let data = response.data;
            data.data = collect(data.data).map((apiChange) => {
                return new Change(apiChange);
            }).toArray();
            context.commit('setData', data);
        });
    }
}

// mutations
const mutations = {
    setData(state, changes) {
        state.content = changes;
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