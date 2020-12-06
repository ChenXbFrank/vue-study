const state = {
    stateA: '首页的state'
  }
  
  const mutations = {
    showA (state) {
      return state.stateA
    }
  }
  
  const actions = {
    showAAction (context) {
      context.commit('showA')
    }
  }
  
  const getters = {
    getA (state) {
      return state.stateA
    }
  }
  export default {state, mutations, actions, getters}