<template>
  <div class="frm">
    <div class="logo-holder">
      <a href="index.html"><img src="./../../../assets/custom/img/logo.png" /></a>
    </div>
    <h4>Login to your account</h4>
    <div class="frm-grp">
      <label>Email</label>
      <input type="email" class="frm-text" placeholder="name@gmail.com" />
    </div>
    <div class="frm-grp">
      <label>Password</label>
      <input type="password" class="frm-text" placeholder="" />
    </div>
    <div class="frm-grp">
      <a class="nav-link" href="forgot-password.html">Forgot Password?</a>
    </div>
    <div class="frm-grp">
      <button class="btn btn-md btn-default btn-full">Login</button>
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
    return {}
  },
  created() {
    //console.log(useFrontendStore)
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, []),
    toggleRegistrationForm() {
      useFrontendStore().$patch((state) => {
        state.viewRegisterForm ? (state.viewRegisterForm = false) : (state.viewRegisterForm = true)
        console.log(state.viewRegisterForm)
      })
    }
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, ['viewRegisterForm'])
  }
}
</script>
