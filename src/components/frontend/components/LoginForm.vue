<template>
  <div class="frm">
    <div class="logo-holder">
      <a href="index.html"><img src="./../../../assets/custom/img/logo.png" /></a>
    </div>
    <h4>Login to your account</h4>
    <div class="frm-grp">
      <label>Email</label>
      <input
        v-model="loginForm.username"
        type="email"
        class="frm-text"
        placeholder="Enter your username"
      />
    </div>
    <div class="frm-grp">
      <label>Password</label>
      <input
        v-model="loginForm.password"
        type="password"
        class="frm-text"
        placeholder="Enter your password"
      />
    </div>
    <div class="frm-grp">
      <a class="nav-link" href="forgot-password.html">Forgot Password?</a>
    </div>
    <div class="frm-grp">
      <button class="btn btn-md btn-default btn-full" @click="attemptLogin()">Login</button>
    </div>
    <div class="frm-grp">
      <p>
        Not yet a member?
        <a @click="toggleRegistrationForm()" class="nav-link clickable">Register for free.</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useFrontendStore } from '@/stores/frontend'

export default {
  name: 'login-form',
  components: {},
  data() {
    return {
      loginForm: { username: '', password: '' }
    }
  },
  created() {
    //console.log(useFrontendStore)
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, ['tryLoggingIn']),
    toggleRegistrationForm() {
      useFrontendStore().$patch((state) => {
        state.viewRegisterForm ? (state.viewRegisterForm = false) : (state.viewRegisterForm = true)
      })
    },
    attemptLogin() {
      useFrontendStore()
        .tryLoggingIn(this.loginForm)
        .then((res) => {
          let data = res.data
          if (data.status) {
            /* notify({
              title: 'LOGIN SUCCESS',
              text: data.msg,
              type: 'info',
              duration: 10000,
              speed: 1000
            }) */
            /* userStore.$patch((state) => {
              ;(state.userToken = data.access_token),
                Object.keys(state.logged_user).forEach((element) => {
                  state.logged_user[element] = data[element]
                })
              sessionStorage.setItem('traqsx', data.access_token)
            }) */
            //self.$router.push('/landing')
          } else {
            /* notify({
              title: 'LOGIN ERROR',
              text: data.msg,
              type: 'error',
              duration: 10000,
              speed: 1000
            }) */
          } //end if
        })
    }
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, ['viewRegisterForm'])
  }
}
</script>
