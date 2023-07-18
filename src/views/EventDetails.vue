<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
</script>

<template>
  <FrontendHeader />
  <main>
    <div class="event-banner jao-banner-margin jao-banner-height-event-details">
      <img src="./../assets/custom/img/event-detail-img.png" />
      <div class="event-details-title">
        <span class="category" v-if="event_details != null">{{
          event_details.event_category
        }}</span>
        <h2 v-if="event_details != null">{{ event_details.event_name }}</h2>
        <p v-if="event_details != null">{{ event_details.converted_startdate }}</p>
        <p v-if="event_details != null">{{ event_details.event_location }}</p>
        <a
          href="#"
          class="btn btn-reg btn-default fixme"
          ref="eventRegButton"
          v-bind:class="{ 'fixed-button': hangRegisterButton }"
          >Register now</a
        >
      </div>
    </div>

    <div class="page-section section-3">
      <div class="container">
        <div class="grid-section countdown-grid">
          <h4>Event will start in</h4>
          <div class="countdown">
            <div class="cd-item">
              <h2>5</h2>
              <small>day</small>
            </div>
            <div class="cd-item">
              <h2>7</h2>
              <small>hours</small>
            </div>
            <div class="cd-item">
              <h2>56</h2>
              <small>min</small>
            </div>
            <div class="cd-item">
              <h2>24</h2>
              <small>sec</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section faqs-holder">
      <div class="container">
        <div class="grid-section">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
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
                <div class="accordion-body">
                  <ul class="list1">
                    <li><span>Registration: Until 17 May 2023 (Wednesday)</span></li>
                    <li><span>Cycling Kit Claiming (at SM City Clark)</span></li>
                    <li>
                      <span v-if="event_details != null"
                        >Date: {{ event_details.converted_startdate }}</span
                      >
                    </li>
                    <li>
                      <span v-if="event_details != null"
                        >Location: {{ event_details.event_location }}</span
                      >
                    </li>
                    <li>
                      <span v-if="event_details != null"
                        >Registration Fee: Php {{ event_details.event_amount }}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button accord-title"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Sub Detail - 1
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <img src="./../assets/custom/img/slide 1.png" width="100%" />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button accord-title"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Sub Detail - 2
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <h6 class="faq-sub">
                    <strong class="red">Gran Fondo | 30km, 60km, 100km</strong>
                  </h6>
                  <p>Enjoy a safe, well-organized and timed ride with the following distances:</p>
                  <ul class="list1">
                    <li><span>Gran Fondo 30km - recommended for beginners</span></li>
                    <li><span>Gran Fondo 60km - slightly condensed format than the 100km</span></li>
                    <li><span>Gran Fondo 100km – recommended for professional cyclists</span></li>
                  </ul>
                  <h6 class="faq-sub"><strong class="red">Kids Ride</strong></h6>
                  <p>A fun and friendly race for kids ages 2 to 7 years old.</p>
                  <h6 class="faq-sub"><strong class="red">Family Fun Ride | 5km</strong></h6>
                  <p>
                    A group ride that the whole family can enjoy. All kinds of families are welcome!
                  </p>
                  <h6 class="faq-sub"><strong class="red">Virtual PRURide | 175km</strong></h6>
                  <p>
                    A virtual race for professional and amateur cyclists, instead of competing in a
                    road cycling race. The cyclist finishing the 175km with the best time will be
                    declared as this category’s winner.
                  </p>
                </div>
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

export default {
  name: 'eventdetails-page',
  components: {},
  data() {
    return {
      hangRegisterButton: false,
      fstore: useFrontendStore(),
      event_details: null
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)

    this.fstore.tryFetchEventDetails(this.$route.params.eventid).then((res) => {
      let details = res.data.body.details
      //let registrants = res.data.body.registrants
      this.event_details = details
    })
  },
  mounted() {},
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions(useFrontendStore, ['tryFetchEventDetails']),
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
    }
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
