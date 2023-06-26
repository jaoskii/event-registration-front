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
          <LoginForm v-if="this.viewRegisterForm" />
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
</style>

<script>
/* import { mapStores, mapState, mapActions } from 'pinia'
import { useDashboardStore } from '@/stores/dashboard'
const dashboardStore = useDashboardStore() */

export default {
  name: 'login-page',
  components: {},
  data() {
    return {
      viewRegisterForm: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    toggleRegistrationForm() {
      this.viewRegisterForm ? (this.viewRegisterForm = false) : (this.viewRegisterForm = true)
    }
  },
  computed: {}
}
</script>
