export const state = () => ({
  players: []
})

export const mutations = {
  insert (state, player) {
    state.players.push(player)
  }
}

export const getters = {
  players: (state) => {
    return state.players
  }
}
