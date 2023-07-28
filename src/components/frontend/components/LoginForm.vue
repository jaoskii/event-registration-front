<template>
  <div class="frm">
    <div class="logo-holder">
      <a href="index.html"><img src="./../../../assets/custom/img/logo.png" /></a>
    </div>
    <h4>Login to your account</h4>
    <div class="frm-grp">
      <label>Email</label>
      <input
        v-model="loginForm.email"
        type="email"
        class="frm-text"
        placeholder="Enter your email"
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

import { useNotification } from '@kyvg/vue3-notification'
const { notify } = useNotification()

export default {
  name: 'login-form',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      loginForm: {
        email: 'tamlaylovestokwa994@gmail.com',
        password: 'jaoski',
        platform: import.meta.env.VITE_CLIENT_SOURCE
      },
      userTokenName: import.meta.env.VITE_SITE_TOKEN_NAME
    }
  },
  created() {
    //console.log(this.userTokenName)
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, ['tryLoggingIn', 'tryGetUserProfile']),
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

          if (data.code == 100) {
            notify({
              title: data.title,
              text: 'Logged in successfully! Please wait',
              type: 'info',
              duration: 10000,
              speed: 1000
            })

            this.fstore.$patch((state) => {
              state.userToken = data.dataObject
              sessionStorage.setItem(this.userTokenName, data.dataObject)
            })

            this.fstore.tryGetUserProfile().then((res3) => {
              let data3 = res3.data
              if (data3.code == 100) {
                this.fstore.$patch((state) => {
                  state.logged_user = data3.dataObject
                })

                notify({
                  title: 'Fetching profile data....',
                  text: 'Fetching profile data, Please wait you will be redirected. Thank you!',
                  type: 'info',
                  duration: 10000,
                  speed: 1000
                })

                if (this.fstore.lastviewedEvent != null) {
                  let lastviewedID = this.fstore.lastviewedEvent
                  this.fstore.$patch((state) => {
                    state.lastviewedEvent = null
                  })
                  this.$router.push('/event/details/' + lastviewedID)
                } else {
                  this.$router.push('/')
                }
              } else {
                notify({
                  title: data3.title,
                  text: data3.message,
                  type: 'error',
                  duration: 10000,
                  speed: 1000
                })
              }
            })
          } else {
            notify({
              title: data.title,
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
