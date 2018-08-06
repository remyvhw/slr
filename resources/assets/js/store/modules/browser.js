// initial state
const state = {
    selection: null,
}

// mutations
const mutations = {
    setSelection(state, selectedObject) {
        state.selection = selectedObject
    },


}

export default {
    namespaced: true,
    state,
    mutations,
}