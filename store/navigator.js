// State
export const state = () => ({
  colorSwap: false
})

// Mutations
export const mutations = {
  SET_COLORSWAP(state, isSwap_) {
    state.colorSwap = isSwap_
  }
}

// Getters
export const getters = {
  colorSwap: (state) => state.colorSwap
}
