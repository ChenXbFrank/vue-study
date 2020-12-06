const state = {
    stateB: '用户列表的state'
  }
  
  const mutations = {
    showB (state) {
      return state.stateB
    }
  }
  
  const actions = {
    showBAction (context) {
      context.commit('showB')
    }
  }
  
  const getters = {
    getB (state) {
      return state.stateB
    }
  }
  
  export default {state, mutations, actions, getters}