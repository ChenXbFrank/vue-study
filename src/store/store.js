import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import Index from './modules/index'
import UserInfo from './modules/user-info'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        Index,
        UserInfo
    }
})

export default store