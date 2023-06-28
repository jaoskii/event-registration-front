<template>
  <header>
    <div class="container-fluid">
      <div class="header-grid">
        <div class="logo-holder">
          <a href="index.html"><img src="./../../assets/custom/img/logo.png" /></a>
        </div>
        <nav>
          <ul class="nav-web">
            <li class="active"><router-link to="/" class="navlink">Home</router-link></li>
            <li><router-link to="/about" class="navlink">About Us</router-link></li>
            <li><router-link to="/events" class="navlink">Events</router-link></li>
            <!-- <li><router-link to="/results">Results</router-link></li> -->
          </ul>

          <div class="account" v-if="showProfileDropdown">
            <div class="account-grid">
              <div class="account-logo">
                <img src="./../../assets/custom/img/logo.png" />
              </div>
              <h3><img src="./../../assets/custom/img/collapse.svg" /></h3>

              <div class="account-drp">
                <ul>
                  <li>
                    <router-link to="/profile" class="navlink">
                      <img src="./../../assets/custom/img/nav/user.svg" /> My Account
                    </router-link>
                  </li>
                  <li>
                    <a class="navlink clickable" @click="logoutAccount()">
                      <img src="./../../assets/custom/img/nav/log-out.svg" /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul class="nav-btn" v-else>
            <li>
              <a class="clickable btn btn-md btn-outline" @click="clickLoginButton()"> Login </a>
            </li>
            <li>&nbsp&nbsp</li>
            <li>
              <a class="clickable btn btn-md btn-default" @click="clickRegisterButton()">
                Register
              </a>
            </li>
          </ul>

          <div class="hamburger">
            <a href="#"><img src="./../../assets/custom/img/hamburger.svg" /></a>
          </div>
        </nav>

        <div class="nav-mobile">
          <a href="#" class="nav-close"><img src="./../../assets/custom/img/close.svg" /></a>
          <ul>
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="result.html">Results</a></li>
            <li><router-link to="/login" class="btn btn-md btn-outline">Login</router-link></li>
            <li><a href="register.html" class="btn btn-md btn-default">Register</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useFrontendStore } from '@/stores/frontend'

export default {
  name: 'frontend-nav',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      showProfileDropdown: false
    }
  },
  created() {
    if (
      this.fstore.userToken != null &&
      typeof sessionStorage.getItem(this.fstore.tkn_name) !== 'undefined'
    ) {
      this.showProfileDropdown = true
    }
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, []),
    logoutAccount() {
      this.fstore.$patch((state) => {
        sessionStorage.removeItem(this.fstore.tkn_name)
        state.userToken = null
        state.viewRegisterForm = false
        this.$router.push('/login')
      })
    },
    clickRegisterButton() {
      this.fstore.$patch((state) => {
        state.viewRegisterForm = true
        this.$router.push('/login')
      })
    },
    clickLoginButton() {
      this.fstore.$patch((state) => {
        state.viewRegisterForm = false
        this.$router.push('/login')
      })
    } //end fn //end fn
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
