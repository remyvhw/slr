// initial state
const state = {
    selection: null,
    presentationType: "changes"
}

// mutations
const mutations = {
    setSelection(state, selectedObject) {
        state.selection = selectedObject
    },
    setPresentationType(state, presentationType) {
        state.presentationType = presentationType
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}