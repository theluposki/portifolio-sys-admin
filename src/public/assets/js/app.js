import { store } from "./store.js"
import { router } from "./routes.js"
import { myProfile } from "./requests/profiles/myProfiles.js"

const app = Vue.createApp({
  data() {
    return {
      title: "Hellow Vue!"
    }
  },
  mounted(){
    this.getMyProfile()
  },
  methods: {
    async getMyProfile() {
      const user = await myProfile()
      this.$store.commit("setUser", user)
      console.log(user)
    },
    increment() {
      this.$store.commit('increment')
    }
  }
})

app.use(store)
app.use(router)

app.mount('#app')
