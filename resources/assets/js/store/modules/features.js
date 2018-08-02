const collect = require("collect.js");
const deep = require("deep-get-set");
const endpoint = "/geojson-features";

import Station from "../models/Station";

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

const getters = {
    stations(state) {
        return collect(state.geojson).filter((feature) => {
            return deep(feature, "payload.geometry.type") === "Point";
        }).map(feature => {
            return new Station(feature);
        }).toArray();
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}