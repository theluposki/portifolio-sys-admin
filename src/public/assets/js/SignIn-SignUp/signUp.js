import { register } from "../requests/users/register.js"

export const SignUp = { 
  template: 
  `
  <div class="sign">
    <h1>Crie sua conta agora mesmo!</h1>
    <p>é simples e fácil</p>

    <form class="form">
      <input class="input" tabindex="1" type="text" v-model="name" placeholder="Digite seu nome completo">
      <input class="input" tabindex="2" type="text" v-model="nickname" placeholder="Digite o nickname">
      <input class="input" tabindex="3" type="text" v-model="email" placeholder="Digite seu e-mail">
      <input class="input" tabindex="4" id="pass" type="password" v-model="password" placeholder="Digite sua senha"> 
      <input class="input" tabindex="5" id="confPass" @keyup.prevent="checksIfPasswordsMatch()" type="password" id="confirmPassword" v-model="confirmPassword" placeholder="confirme sua senha">
      
      <div class="checkboxs">
        <label>-</label>
        <label>
          Mostrar senha?
          <input type="checkbox" @change="viewPass()" v-model="viewPassword">
        </label>
      </div>

      <span :class="messageClass">{{ message }}</span>

      <div class="btns">
        <button @click.prevent="reset()">Resetar</button>
        <button @click.stop.prevent="signUp()">Registrar</button>
      </div>
      </form>
  </div>
  `,
  data() {
    return {
      name: null,
      nickname: null,
      email: null,
      password: null,
      confirmPassword: null,
      message: "",
      messageClass: "messageClass"
    }
  },
  mounted() {

  },
  methods: {
    viewPass(){
      const pass = document.getElementById("pass")
      const confPass = document.getElementById("confPass")

      if(this.viewPassword) {
        pass.type = "text"
        confPass.type = "text"
      } else {
        pass.type = "password"
        confPass.type = "password"
      }
    },
    setMessage(message, status) {
      this.messageClass = status
      this.message = message
      setTimeout(() => this.clearMessage(), 8000)
    },
    clearMessage() {
      this.messageClass = ""
      this.message = ""
    },
    checksIfPasswordsMatch() {
      const confirmPassword = document.getElementById("confirmPassword")

      if(this.password !== this.confirmPassword) {
        confirmPassword.style.borderColor = "#e44530"
        confirmPassword.style.outlineColor = "#e44530"
        this.setMessage("As senhas não coincidem.", "messageClass error")
      } else {
        confirmPassword.style.borderColor = "#5eea9b"
        confirmPassword.style.outlineColor = "#5eea9b"
        this.setMessage("")
      }
    },
    async signUp() {
      if(!this.name || !this.nickname || !this.email || !this.password || !this.confirmPassword) {
        return this.setMessage("Preencha todos os campos.", "messageClass warning")
      }

      const user = {
        name: this.name,
        nickname: this.nickname,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      }

      const result = await register(user)

      if(result.error) {
        return this.setMessage(result.error, "messageClass error")
      }

      if(result === "Successfully registered!") {
        this.setMessage(result, "messageClass success")
        setTimeout(() => {
          this.reset()
          this.clearMessage()
          this.$router.push("/")
        }, 2000)
      }
    },
    reset() {
      this.name = null
      this.nickname = null
      this.email = null
      this.password = null
      this.confirmPassword = null
    }
  } 
}
