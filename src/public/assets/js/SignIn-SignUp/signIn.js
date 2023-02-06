import { auth } from "../requests/users/auth.js"

export const SignIn = { 
  template: 
  `
  <div class="sign">
    <img class="logotipo" src="assets/favicon.svg" alt="imagem logotipo">
    <h1>Bem-vindo</h1>
    <p>Faça login para continuar</p>

    <form class="form">
      <input class="input" tabindex="1" type="text" v-model="email" placeholder="Digite seu e-mail">
      <input class="input" tabindex="2" id="pass" type="password" v-model="password" placeholder="Digite sua senha">
      
      <div class="checkboxs">
        <label>
          Memorizar usuário?
          <input type="checkbox" v-model="rememberUser">
        </label>
        <label>
          Mostrar senha?
          <input type="checkbox" @change="viewPass()" v-model="viewPassword">
        </label>
      </div>

      <span class="terms">
        Ao continuar, você concorda em configurar uma conta MyReb e concorda com nosso Contrato do Usuário e Política de Privacidade.
      </span>
      
      <span :class="messageClass">{{ message }}</span>

      <div class="btns">
        <button @click.prevent="reset()">Resetar</button>
        <button @click.prevent="signIn()">Entrar</button>
      </div>
    </form>
  </div>
  `,
  data() {
    return {
      email: null,
      password: null,
      message: "",
      messageClass: "messageClass",
      rememberUser: false,
      viewPassword: false
    }
  },
  mounted() {
    this.haveSavedUser()
  },
  methods: {
    haveSavedUser(){
      const getPreferences = localStorage.getItem("preferences")

      if(getPreferences) {
        const preferences = JSON.parse(getPreferences)

        this.rememberUser = preferences.rememberUser
        this.email = preferences.email
        this.password = preferences.password
      }
    },
    viewPass(){
      const pass = document.getElementById("pass")

      if(this.viewPassword) {
        pass.type = "text"
      } else {
        pass.type = "password"
      }
    },
    setMessage(message, status) {
      this.messageClass = status
      this.message = message
    },
    clearMessage() {
      this.messageClass = "messageClass"
      this.message = ""
    },
    async signIn() {
      if(!this.email || !this.password) {
        return this.setMessage("Preencha todos os campos.", "messageClass warning")
      }

      const user = {
        email: this.email,
        password: this.password
      }

      const result = await auth(user)

      if(result.error) {
        return this.setMessage(result.error, "messageClass error")
      }

      if(result.message) {
        this.setMessage(result.message, "messageClass success")
        localStorage.setItem("token", result.token)
        setInterval(() => {
          window.location = "http://localhost:3002/app.html"
        }, 500)

        if(this.rememberUser) {
          localStorage.setItem("preferences", JSON.stringify({
            rememberUser: true,
            email: this.email,
            password: this.password
          }))
        } else {
          localStorage.removeItem("preferences")
        }

      }
    },
    reset() {
      this.email = null
      this.password = null
    }
  } 
}
