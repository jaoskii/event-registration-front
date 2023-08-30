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
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                My Registrations
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Events Attended
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                My Payments
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              ...
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              ...
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              ...
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
