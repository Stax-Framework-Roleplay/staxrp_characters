import { createRouter, createWebHistory } from 'vue-router'
import CharacterSelector from "../views/CharacterSelector.vue"
import CharacterCreator from "../views/CharacterCreator.vue"

const routes = [
  {
    path: "/",
    name: "selector",
    component: CharacterSelector
  },
  {
    path: "/creator",
    name: "creator",
    component: CharacterCreator,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
