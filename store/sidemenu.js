// States
export const state = () => ({
  isSidebar: false,
  widthPx: 0,
  factorScale: 0, // %
  isHover: false
})

// mutations
export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.isSidebar = !state.isSidebar
  },
  SetState(state, isOpen_) {
    state.isSidebar = isOpen_
  },
  SetWidth(state, data) {
    state.widthPx = data.width
    // state.factorScale = data.factor
    state.isHover = data.factor > 0.5
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
  isSidebar: (state) => state.isSidebar,
  isHover: (state) => state.isHover,
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
