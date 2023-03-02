import { defineStore } from "pinia"

export const useSelectorStore = defineStore("selector", {
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
    GetCharacters: (state) => state.characters
  },
  actions: {
    SET_CHARACTERS(characters) {
      this.characters = characters;
    },
    DELETE_CHARACTER() {},
    SELECT_CHARACTER() {}
  }
})