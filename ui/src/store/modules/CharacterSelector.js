const CharacterSelector = {
  namespaced: true,
  state: () => ({
    characters: [
      {
        firstname: "Brian",
        lastname: "Wrathens",
        age: 24,
        gender: "Male",
        bank: 10000,
        jobs: [
          { name: "Malice Ink" }
        ]
      }
    ]
  }),
  getters: {
    getCharacters(state) {
      return state.characters
    }
  },
  actions: {
    ViewCharacter(context, payload) {
      context.commit("SET_VIEWED_CHARACTER", payload);
    },
    DeleteCharacter(context) {
      
    }
  },
  mutations: {
    SET_VIEWED_CHARACTER(state, payload) {
      state.viewedCharacter = state.characters[payload.index]
    },
    DELETE_CHARACTER(state, payload) {

    },
    SET_CHARACTERS(state, payload) {
      state.characters = payload.characters
    },
  }
}

export default CharacterSelector;