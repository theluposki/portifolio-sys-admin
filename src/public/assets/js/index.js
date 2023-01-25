import { SignIn } from "./SignIn-SignUp/signIn.js"
import { SignUp } from "./SignIn-SignUp/signUp.js"


const routes = [
  { path: '/', component: SignIn },
  { path: '/signUp', component: SignUp },
]


const store = Vuex.createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp({
  data() {
    return {
      title: "Hellow Vue!"
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
})

app.use(store)
app.use(router)

app.mount('#app')
