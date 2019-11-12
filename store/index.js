export const state = () => ({
  isDark: false
})

export const mutations = {
  setDark(state, boolean) {
    state.isDark = boolean
  },
}
