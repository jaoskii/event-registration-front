<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
</script>

<template>
  <FrontendHeader />
  <main>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="wrap">
      <div class="page-section">
        <div class="container">
          <div class="grid-section">
            <div class="success-page">
              <img src="./../assets/custom/img/check.svg" />
              <h3 class="align-center">
                Thank you for registering to <br />{{ this.event_details.event_name }}!
              </h3>

              <h3>
                Registration Code:
                <span class="event_reg_code">{{ this.event_details.registration_code }}</span>
              </h3>
              <p>
                Please check your email inbox within the next 24 hours for a confirmation message.
              </p>
              <small
                >Registered with the wrong details? Please send us a message at
                <span class="client_email_warn">{{ this.client_email }}</span></small
              >
              <div class="btn-holder">
                <router-link to="/" class="navlink btn btn-md btn-default"
                  >Return to Homepage</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </main>
  <FrontendFooter />
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
import { useNotification } from '@kyvg/vue3-notification'
const { notify } = useNotification()

export default {
  name: 'payment-redirect-page',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      event_details: {},
      client_email: import.meta.env.VITE_CLIENT_EMAIL
    }
  },
  created() {
    this.fstore.tryFetchRegistrationDetails(this.$route.params.regcode).then((res) => {
      let details = res.data.body
      this.event_details = details
    })
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, [])
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
