import Vue from 'vue'
import Vuex from 'vuex'
import Index from './modules/index'
import UserInfo from './modules/user-info'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Index,
        UserInfo
    }
})

export default store