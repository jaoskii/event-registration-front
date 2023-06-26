<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import LoginForm from '../components/frontend/components/LoginForm.vue'
import UserRegistrationForm from '../components/frontend/components/UserRegistrationForm.vue'
import ForgotPasswordForm from '../components/frontend/components/ForgotPasswordForm.vue'
</script>

<template>
  <div class="login-wrap">
    <section class="h-banner">
      <div class="banner-content"></div>
    </section>
    <div class="login-section">
      <div class="container-fluid">
        <div class="login-frm">
          <div class="frm">
            <div class="logo-holder">
              <a href="index.html"><img src="../assets/custom/img/logo.png" /></a>
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
              <a href="forgot-password.html">Forgot Password?</a>
            </div>
            <div class="frm-grp">
              <button class="btn btn-md btn-default btn-full">Login</button>
            </div>
            <div class="frm-grp">
              <p>Not yet a member? <a href="register.html">Register for free.</a></p>
            </div>
          </div>
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
@import '../assets/custom/css/scrolling-nav.css';
@import '../assets/custom/css/style.css';
@import '../assets/custom/css/component.css';
@import '../assets/custom/css/responsive.css';
</style>
