
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import obstructions from './modules/obstructions'
import changes from './modules/changes'
import settings from './modules/settings'
import browser from './modules/browser'
import features from './modules/features'

const rawLastVisitDate = document.head.querySelector('meta[name="last-visit"]').content;
const lastVisitDate = rawLastVisitDate ? new Date(rawLastVisitDate) : new Date();

export default new Vuex.Store({
    state: {
        lastVisitDate: lastVisitDate,
        apiRoot: window.apiRoot,

    },
    mutations: {
        setLastVisitDate(state, lDate) {
            state.lastVisitDate = lDate;
        },
    },
    modules: {
        obstructions,
        changes,
        settings,
        browser,
        features
    }
});