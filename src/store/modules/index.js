const state = {
    stateA: 'A'
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