// States
export const state = () => ({
  hideSideBar: false,
  isSidebar: false,
  widthPx: 200,
  isHover: false
})

// mutations
export const mutations = {
  HIDE_SIDEBAR(state, isHidden_) {
    state.hideSideBar = isHidden_
    console.log('$store/hideSideBar ', state.hideSideBar)
  },
  TOGGLE_SIDEBAR(state) {
    state.isSidebar = !state.isSidebar
  },
  SetState(state, isOpen_) {
    state.isSidebar = isOpen_
  },
  SetWidth(state, data) {
    state.widthPx = data.width
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
  hideSidebar: (state) => state.hideSidebar,
  isSidebar: (state) => state.isSidebar,
  isHover: (state) => state.isHover,
  widthPx: (state) => state.widthPx

  // width100(state) {
  //   let w_ = state.width100
  //   if (screen.width < 600) {
  //     w_ = 100
  //   }
  //   return w_
  // }
}
