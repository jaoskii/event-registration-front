<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
import HeroBanner from '../components/frontend/components/HeroBanner.vue'
import EventsAvailable from '../components/frontend/components/EventsAvailable.vue'
import SponsorsSlider from '../components/frontend/components/SponsorsSlider.vue'
import AboutUs from '../components/frontend/components/AboutUs.vue'
</script>

<template>
  <FrontendHeader />
  <main>
    <br />

    <HeroBanner /><br />
    <EventsAvailable /><br />
    <AboutUs /><br />
    <SponsorsSlider /><br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </main>
  <FrontendFooter />

  <div
    class="modal fade"
    id="otpModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="otpModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="success-content">
            <a href="#" class="md-close" data-dismiss="modal" aria-label="Close"
              ><img src="./../assets/custom/img/md-close.svg"
            /></a>
            <img src="./../assets/custom/img/redirect.svg" />
            <h4 class="mt-32">Enter OTP Code</h4>
            <p>An OTP is sent to your Mobile #</p>
            <div class="frm-grp">
              <input v-model="this.otp" type="text" class="frm-text" placeholder="Enter OTP Code" />
            </div>
          </div>
          <div class="float-end modal-footer-grp">
            <button
              type="button"
              class="btn btn-primary modal-footer-btns btn-lg"
              @click="verifyOTP()"
            >
              Verify
            </button>
            <button
              type="button"
              class="btn btn-secondary modal-footer-btns btn-lg"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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

import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js'

export default {
  name: 'index-page',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      otp: ''
    }
  },
  created() {},
  mounted() {
    var OTP_MODAL = new Modal(document.getElementById('otpModal'), {
      keyboard: false
    })

    this.closeModal('otpModal')
    if (Object.keys(this.fstore.logged_user) != 0) {
      if (!this.fstore.isUserActivated) {
        OTP_MODAL.show()
      } //end if
    }
  },
  methods: {
    ...mapActions(useFrontendStore, []),
    verifyOTP() {
      this.closeModal('otpModal')
      this.fstore.tryVerifyOTP(this.otp).then((res) => {
        let resdata = res.data
        if (resdata.code == 100) {
          notify({
            title: resdata.message,
            text: 'Account verification successful.',
            type: 'info',
            duration: 10000,
            speed: 1000
          })

          this.closeModal('otpModal')
        } else {
          notify({
            title: 'Account verification ' + resdata.title,
            text: resdata.message,
            type: 'error',
            duration: 10000,
            speed: 1000
          })
        }
      })
    },
    closeModal(modalID) {
      document.getElementById(modalID).style.display = 'none'
      document.getElementById(modalID).classList.remove('show')
      var elements = document.getElementsByClassName('modal-backdrop')
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
      }
    } //end fnm
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
