import { Photo } from '../models/Photo.js'

const collect = require("collect.js");

// initial state
const state = {
    content: {},
    filters: {
    }
}

// actions
const actions = {
    get(context, page = 1) {
        if (context.state.content.meta && context.state.content.meta.current_page == page) return;
        context.commit("setData", {});
        const url = new URL(context.rootState.apiRoot + Photo.getEndpoint());
        url.searchParams.append("page", page);
        collect(context.state.filters).each((value, filter) => {
            url.searchParams.append(filter, value);
        });
        axios.get(url).then(response => {
            let data = response.data;
            data.data = collect(data.data).map((apiPhoto) => {
                return new Photo(apiPhoto);
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
    setData(state, photos) {
        state.content = photos;
    },
    setSelection(state, selectedPhoto) {
        state.content.data = collect(state.content.data).map((photo) => {
            photo.selected = selectedPhoto && photo.id === selectedPhoto.id;
            return photo;
        }).toArray();
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}