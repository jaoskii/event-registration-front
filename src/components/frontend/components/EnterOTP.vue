<template>
  <div class="frm">
    <div class="logo-holder">
      <a href="index.html"><img src="./../../../assets/custom/img/logo.png" /></a>
    </div>
    <h4>Enter your OTP</h4>
    <div class="frm-grp">
      <label>Please enter OTP sent to your phone number</label>
      <input v-model="loginForm.email" type="text" class="frm-text" placeholder="Enter OTP" />
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

import { useNotification } from '@kyvg/vue3-notification'
const { notify } = useNotification()

export default {
  name: 'login-form',
  components: {},
  data() {
    return {
      loginForm: { email: 'jim@inventlabs.tech', password: 'jaoski' },
      userTokenName: import.meta.env.VITE_SITE_TOKEN_NAME
    }
  },
  created() {
    //console.log(this.userTokenName)
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
            notify({
              title: 'LOGIN SUCCESS',
              text: data.msg,
              type: 'info',
              duration: 10000,
              speed: 1000
            })

            useFrontendStore().$patch((state) => {
              state.userToken = data.access_token
              Object.keys(state.logged_user).forEach((element) => {
                state.logged_user[element] = data[element]
              })

              sessionStorage.setItem(this.userTokenName, data.access_token)
            })

            this.$router.push('/')
          } else {
            notify({
              title: 'LOGIN ERROR',
              text: data.msg,
              type: 'error',
              duration: 10000,
              speed: 1000
            })
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
