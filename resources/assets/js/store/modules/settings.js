// initial state
const state = {
    showMap: true,
    user: document.head.querySelector('meta[name="user"]').content
}

// mutations
const mutations = {
    setSetting(state, setting, value) {
        state.settings[setting] = value;
    },
}

export default {
    namespaced: true,
    state,
    mutations
}