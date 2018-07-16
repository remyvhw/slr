const collect = require("collect.js");

// initial state
const state = {
    url: null,
    content: {},
    filters: {
    }
}

// getters
const getters = {}

// actions
const actions = {
    setUrl(context, url) {
        context.commit("setUrl", url);
        context.dispatch("get");
    },
    get(context) {
        context.commit("setData", {});
        const url = new URL(context.state.url);
        collect(context.state.filters).each((value, filter) => {
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
            context.commit('setData', data);
        });
    }
}

// mutations
const mutations = {
    setUrl(state, url) {
        state.url = url;
    },
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
    getters,
    actions,
    mutations
}