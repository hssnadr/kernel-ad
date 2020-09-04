// State
export const state = () => ({
  windowWidth: 400,
  hideSideMenu: true,
  isSideMenu: false,
  sideMenuWidthPx0: 340,
  sideMenuWidthPx: 340,
  breakpoint: 600, // pixel (width)
  isSideMenuHover: false
})

// Mutations
export const mutations = {
  SET_WINDOW_WIDTH(state, width_) {
    state.windowWidth = width_

    // Set side menu side
    if (state.windowWidth < state.breakpoint) {
      state.sideMenuWidthPx = width_
      state.isSideMenuHover = true
    } else {
      state.sideMenuWidthPx = state.sideMenuWidthPx0
      state.isSideMenuHover = false
    }
  },
  HIDE_SIDEMENU(state, isHidden_) {
    state.hideSideMenu = isHidden_
  },
  TOGGLE_SIDEMENU(state) {
    state.isSideMenu = !state.isSideMenu
  },
  SET_SIDEMENU_STATE(state, isOpen_) {
    state.isSideMenu = isOpen_
  }
}

// Actions
export const actions = {
  toggleSideMenu({ commit }) {
    commit('TOGGLE_SIDEMENU')
  }
}

// Getters
export const getters = {
  windowWidth: (state) => state.windowWidth,
  hideSidemenu: (state) => state.hideSideMenu,
  isSideMenu: (state) => state.isSideMenu,
  isSideMenuHover: (state) => state.isSideMenuHover,
  sideMenuWidthPx: (state) => state.sideMenuWidthPx
}
