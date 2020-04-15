// States
export const state = () => ({
  toggleSidebar: false,
  widthPx: 0,
  isHover: false
})

// mutations
export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  SetWidth(state, data) {
    state.widthPx = data.width
    state.isHover = state.widthPx > 0.5 * document.documentElement.clientWidth
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
  widthPx: (state) => state.widthPx,
  isHover: (state) => state.isHover
}
