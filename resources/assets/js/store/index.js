
import Vue from 'vue'
import Vuex from 'vuex'
const collect = require("collect.js");

Vue.use(Vuex)

import obstructions from './modules/obstructions'
import changes from './modules/changes'
import settings from './modules/settings'

const rawLastVisitDate = document.head.querySelector('meta[name="last-visit"]').content;
const lastVisitDate = rawLastVisitDate ? new Date(rawLastVisitDate) : new Date();

export default new Vuex.Store({
    state: {
        lastVisitDate: lastVisitDate,
        apiRoot: document.head.querySelector('meta[name="api-root"]').content,

    },
    mutations: {
        setLastVisitDate(state, lDate) {
            state.lastVisitDate = lDate;
        },
    },
    modules: {
        obstructions,
        changes,
        settings
    }
});