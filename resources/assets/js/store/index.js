
import Vue from 'vue'
import Vuex from 'vuex'
const collect = require("collect.js");

Vue.use(Vuex)

import obstructions from './modules/obstructions'

const rawLastVisitDate = document.head.querySelector('meta[name="last-visit"]').content;
const lastVisitDate = rawLastVisitDate ? new Date(rawLastVisitDate) : new Date();

export default new Vuex.Store({
    state: {
        lastVisitDate: lastVisitDate,
        settings: {
            showMap: true,
            user: document.head.querySelector('meta[name="user"]').content
        }
    },
    mutations: {
        setLastVisitDate(state, lDate) {
            state.lastVisitDate = lDate;
        },
        setSetting(state, setting, value) {
            state.settings[setting] = value;
        },
    },
    modules: {
        obstructions
    }
});