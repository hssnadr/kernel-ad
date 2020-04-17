// States
export const state = () => ({
  toggleSidebar: false,
  widthPx: 0,
  factorScale: 0 // %
})

// mutations
export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  SetWidth(state, data) {
    state.widthPx = data.width
    state.factorScale = data.factor
  }
}

// actions
export const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

// Getters
export const getters = {
  toggleSidebar: (state) => state.toggleSidebar,
  widthPx(state) {
    return state.widthPx
  }

  // width100(state) {
  //   let w_ = state.width100
  //   if (screen.width < 600) {
  //     w_ = 100
  //   }
  //   return w_
  // }
}
