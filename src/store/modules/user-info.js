const state = {
    stateB: 'B'
  }
  
  const mutations = {
    showA (state) {
      return state.stateB
    }
  }
  
  const actions = {
    showAAction (context) {
      context.commit('showB')
    }
  }
  
  const getters = {
    getA (state) {
      return state.stateB
    }
  }
  
  export default {state, mutations, actions, getters}