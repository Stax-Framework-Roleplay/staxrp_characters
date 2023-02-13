import { createStore } from 'vuex'

// Modules
import Router from "./modules/framework/Router"
import Config from "./modules/framework/Config"
import Locale from "./modules/framework/Locale"
import CharacterCreator from "./modules/CharacterCreator"
import CharacterSelector from "./modules/CharacterSelector"

export default createStore({
  modules: {
    Router,
    Config,
    Locale,
    CharacterCreator,
    CharacterSelector
  }
})