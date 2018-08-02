const endpoint = "/geojson-features";

// initial state
const state = {
    geojson: null
}

// mutations
const mutations = {
    setGeojson(state, geojson) {
        state.geojson = geojson
    },
}


// actions
const actions = {
    get(context) {
        const url = new URL(context.rootState.apiRoot + endpoint);
        axios.get(url).then(response => {
            context.commit('setGeojson', response.data);
        });
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}