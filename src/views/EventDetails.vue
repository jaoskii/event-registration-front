<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
</script>

<template>
  <FrontendHeader />
  <br />
  <main>
    <div class="event-banner jao-banner-margin zxczxc jao-banner-height-event-details">
      <img :src="getImageUrl(event_details.primary.event_banner)" />
      <div class="event-details-title" v-if="event_details.primary != null">
        <span class="category">{{ event_details.primary.event_category }}</span>
        <h2>
          {{ event_details.primary.event_name }}
        </h2>
        <p>
          {{ event_details.primary.converted_startdate }}
        </p>
        <p>{{ event_details.event_location }}</p>
        <a
          v-if="!event_details.primary.is_registration_ended"
          href="#"
          class="btn btn-reg btn-default fixme"
          ref="eventRegButton"
          v-bind:class="{ 'fixed-button': hangRegisterButton }"
          @click="proceedRegisterEvent(event_details.primary.id)"
          >Register now</a
        >
      </div>
    </div>

    <div class="page-section section-3">
      <div class="container">
        <div
          v-if="
            event_details.primary != null &&
            event_details.primary.is_ended == false &&
            event_details.primary.is_registration_ended == false &&
            event_details.primary.is_ended == false
          "
          class="grid-section countdown-grid"
        >
          <h4>Event registration will end in</h4>
          <div class="countdown">
            <Countdown
              v-if="event_details.primary != null"
              :deadline="event_details.primary.registration_end"
              countdownSize="5em"
              mainColor="#FFFFFF"
              secondFlipColor="#FFFFFF"
              mainFlipBackgroundColor="#FBCE35"
              secondFlipBackgroundColor="#FBCE35"
            />
          </div>
        </div>

        <div
          v-if="
            event_details.primary != null &&
            event_details.primary.is_started == false &&
            event_details.primary.is_registration_ended == true &&
            event_details.primary.is_ended == false
          "
          class="grid-section countdown-grid"
        >
          <h4>Event Registration already ended</h4>
          <h4>Event will start in</h4>
          <div class="countdown">
            <Countdown
              v-if="event_details.primary != null"
              :deadline="event_details.primary.start_date"
              countdownSize="5em"
              mainColor="#FFFFFF"
              secondFlipColor="#FFFFFF"
              mainFlipBackgroundColor="#FBCE35"
              secondFlipBackgroundColor="#FBCE35"
            />
          </div>
        </div>

        <div
          v-if="
            event_details.primary != null &&
            event_details.primary.is_started == true &&
            event_details.primary.is_registration_ended == true &&
            event_details.primary.is_ended == false
          "
          class="grid-section countdown-grid"
        >
          <h4>Event already started</h4>
          <h4>Event will end in</h4>
          <div class="countdown">
            <Countdown
              v-if="event_details.primary != null"
              :deadline="event_details.primary.end_date"
              countdownSize="5em"
              mainColor="#FFFFFF"
              secondFlipColor="#FFFFFF"
              mainFlipBackgroundColor="#FBCE35"
              secondFlipBackgroundColor="#FBCE35"
            />
          </div>
        </div>

        <div
          v-if="
            event_details.primary != null &&
            event_details.primary.is_started == true &&
            event_details.primary.is_registration_ended == true &&
            event_details.primary.is_ended == true
          "
          class="grid-section countdown-grid"
        >
          <h4>This event already ended.</h4>
        </div>
      </div>
    </div>

    <div class="page-section faqs-holder">
      <div class="container">
        <div class="grid-section">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item event_details_bottom">
              <h2 class="accordion-header">
                <button
                  class="accordion-button accord-title"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  General Details
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body" v-if="event_details.primary != null">
                  <ul class="list1">
                    <li>
                      <span>
                        <b>Registration:</b> Until

                        {{ this.event_details.primary.converted_registrationend }}</span
                      >
                    </li>
                    <li>
                      <span>
                        <b>Kit Claiming: </b
                        >{{ this.event_details.primary.kit_claim_remarks }}</span
                      >
                    </li>
                    <li>
                      <span>
                        <b>Event Start date:</b>
                        {{ this.event_details.primary.converted_startdate }}</span
                      >
                    </li>
                    <li>
                      <span><b>Location: </b> {{ this.event_details.primary.event_location }}</span>
                    </li>
                    <li>
                      <span
                        ><b>Registration Fee: </b>: Php
                        {{ this.event_details.primary.event_amount }}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              v-for="event_d in this.event_details.secondary"
              :key="event_d.id"
              class="accordion-item event_details_bottom"
            >
              <h2 class="accordion-header">
                <button
                  class="accordion-button accord-title"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  {{ event_d.title }}
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                <div class="accordion-body" v-html="event_d.body"></div>
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
  </main>
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
            <a
              href="#"
              class="md-close"
              data-dismiss="modal"
              aria-label="Close"
              data-bs-dismiss="modal"
              ><img src="./../assets/custom/img/md-close.svg"
            /></a>
            <h4 v-if="!this.is_registered" class="mt-32">
              For whom are you registering this event?
            </h4>
            <h4 v-if="this.is_registered">You are already registered to this event.</h4>
            <p v-if="this.is_registered">Would you like to register someone else?</p>
            <div class="btn-modal mt-32">
              <button
                v-if="!this.is_registered"
                data-bs-dismiss="modal"
                @click="forwardToEventRegistration('self')"
                class="btn btn-md btn-full btn-default"
              >
                For Myself
              </button>
              <button
                data-bs-dismiss="modal"
                @click="forwardToEventRegistration('another')"
                class="btn btn-md btn-full btn-outline mt-16"
              >
                For Someone else
              </button>
              <button data-bs-dismiss="modal" class="btn btn-md btn-full btn-outline mt-16">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
import { Countdown } from 'vue3-flip-countdown'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js'

export default {
  name: 'eventdetails-page',
  components: {
    Countdown
  },
  data() {
    return {
      hangRegisterButton: false,
      fstore: useFrontendStore(),
      is_registered: false,
      event_details: {
        primary: null,
        secondary: []
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)

    this.fstore.tryFetchEventDetails(this.$route.params.eventid).then((res) => {
      let details = res.data.body
      this.event_details.primary = details.details
      this.event_details.secondary = details.event_content_details
      console.log(this.event_details.primary)
    })
  },
  mounted() {
    let params = { event_id: this.$route.params.eventid }
    if (
      this.fstore.userToken != null &&
      typeof sessionStorage.getItem(this.fstore.tkn_name) !== 'undefined'
    ) {
      this.fstore.tryCheckAlreadyRegistered(params).then((res) => {
        var returndata = res.data
        this.is_registered = returndata.body.is_registered
      })
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions(useFrontendStore, ['tryFetchEventDetails', 'tryCheckAlreadyRegistered']),
    handleScroll() {
      var currentScrollPosition = window.scrollY
      if (currentScrollPosition < this.scrollPosition) {
        if (window.scrollY < 484) {
          this.hangRegisterButton = false
        } //end if
      } else {
        //this.showFullNav = false
        if (window.scrollY > 524) {
          this.hangRegisterButton = true
        } //end if
        //your desire logic
      }

      this.scrollPosition = window.scrollY
    },
    proceedRegisterEvent(event_id) {
      var OTP_MODAL = new Modal(document.getElementById('otpModal'), {
        keyboard: false
      })

      if (
        this.fstore.userToken != null &&
        typeof sessionStorage.getItem(this.fstore.tkn_name) !== 'undefined'
      ) {
        OTP_MODAL.show()
      } else {
        this.fstore.$patch((state) => {
          state.lastviewedEvent = event_id
          this.$router.push('/login')
        })
      }
    },
    forwardToEventRegistration(register_type) {
      this.fstore.$patch((state) => {
        state.event_register_type = register_type
        this.$router.push('/event/register/' + this.event_details.primary.id)
      })
    },
    getImageUrl(filename) {
      return new URL(`./../assets/custom/img/` + filename, import.meta.url).href
    } //end fn
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
