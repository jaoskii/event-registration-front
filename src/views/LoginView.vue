<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import LoginForm from '../components/frontend/components/LoginForm.vue'
import UserRegistrationForm from '../components/frontend/components/UserRegistrationForm.vue'
/* 
import ForgotPasswordForm from '../components/frontend/components/ForgotPasswordForm.vue' */
</script>

<template>
  <div class="login-wrap">
    <section class="h-banner">
      <div class="banner-content"></div>
    </section>
    <div class="login-section">
      <div class="container-fluid">
        <div class="login-frm">
          <LoginForm v-if="!this.viewRegisterForm" />
          <UserRegistrationForm v-else />
        </div>
      </div>
    </div>
  </div>

  <!--  <LoginForm /><br /> -->
  <!-- <UserRegistrationForm /><br />
    <ForgotPasswordForm /> -->
</template>

<style lang="scss">
@import '../assets/custom/css/fonts.css';
@import '../assets/custom/css/style.css';
@import '../assets/custom/css/scrolling-nav.css';
@import '../assets/custom/css/component.css';
@import '../assets/custom/css/responsive.css';
@import '../assets/custom/css/jao.css';
</style>

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
    console.log(useFrontendStore().getViewRegisterForm)
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
