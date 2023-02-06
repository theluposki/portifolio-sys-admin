import { Home } from "./views/home.js"
import { About } from "./views/about.js"

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
