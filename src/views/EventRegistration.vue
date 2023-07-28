<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
import EventBoxDetails from '../components/frontend/components/EventBoxDetails.vue'
</script>

<template>
  <FrontendHeader />
  <main>
    <br />
    <br />
    <br />
    <br />
    <div class="page-section">
      <div class="container">
        <div class="grid-section">
          <h3 class="align-center">Event Registration</h3>
          <div class="registration-form">
            <div class="row justify-content-center">
              <div class="col-md-7">
                <div class="form-grid">
                  <div class="frm-event">
                    <div class="frm-event-img">
                      <img src="./../assets/custom/img/event-thumb.png" />
                    </div>
                    <div class="frm-event-info">
                      <h4 v-if="this.event_details.primary != null">
                        {{ this.event_details.primary.event_name }}
                      </h4>
                      <span v-if="this.event_details.primary != null">{{
                        this.event_details.primary.converted_startdate
                      }}</span>
                      <span v-if="this.event_details.primary != null">{{
                        this.event_details.primary.event_location
                      }}</span>
                    </div>
                  </div>
                  <div class="frm">
                    <h6>Please complete all information</h6>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="frm-grp">
                          <label>First Name</label>
                          <input
                            v-model="this.registrant_form.reg_first_name"
                            type="text"
                            class="frm-text"
                            placeholder="Enter first name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="frm-grp">
                          <label>Last Name</label>
                          <input
                            v-model="this.registrant_form.reg_last_name"
                            type="text"
                            class="frm-text"
                            placeholder="Enter last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="frm-grp invalid">
                      <label>Mobile Number</label>
                      <input
                        v-model="this.registrant_form.reg_mobile"
                        type="text"
                        class="frm-text"
                        placeholder="e.g. 09201234567"
                      />
                      <span>Invalid mobile number format</span>
                    </div>
                    <div class="frm-grp req">
                      <label>Email address</label>
                      <small>Required</small>
                      <input
                        v-model="this.registrant_form.reg_email"
                        type="email"
                        class="frm-text"
                        placeholder="e.g. email@gmail.com"
                      />
                    </div>
                    <div class="frm-grp">
                      <label>Birth Date</label>
                      <input
                        v-model="this.registrant_form.reg_birthday"
                        type="text"
                        class="frm-text"
                        placeholder="mm/dd/yyyy"
                      />
                      <img src="img/calendar.svg" class="calendar" />
                    </div>
                    <!-- <div class="frm-grp">
                                                <label>Gender</label>
                                                <select class="frm-text">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                                <img src="img/collapse.svg" class="dropdown">
                                            </div> -->

                    <div class="frm-grp">
                      <label>Province</label>
                      <select
                        class="form-select form-select-lg mb-3"
                        aria-label="Large select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="frm-grp">
                      <label>Town/City</label>
                      <select
                        class="form-select form-select-lg mb-3"
                        aria-label="Large select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="frm-grp">
                      <label>Emergency Contact</label>
                      <textarea class="frm-text"></textarea>
                    </div>
                    <div class="frm-grp">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <span class="form-check-label check-label" for="exampleCheck1">
                          I agree to the Terms and Conditions
                        </span>
                      </div>
                    </div>
                    <div class="frm-grp">
                      <button
                        class="btn btn-reg btn-default btn-full"
                        data-toggle="modal"
                        data-target="#redirect"
                      >
                        Proceed to payment
                      </button>
                    </div>
                  </div>
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
  name: 'index-page',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      event_details: {
        primary: null,
        secondary: []
      },
      registrant_form: {
        event_id: '',
        user_id: '',
        reg_type: '',
        reg_first_name: '',
        reg_last_name: '',
        reg_mobile: '',
        reg_email: '',
        reg_birthday: '',
        reg_province: '',
        reg_town: '',
        reg_emergency_contact: ''
      }
    }
  },
  created() {},
  mounted() {
    this.fstore.tryFetchEventDetails(this.$route.params.eventid).then((res) => {
      let details = res.data.body
      //let registrants = res.data.body.registrants
      this.event_details.primary = details.details
      this.event_details.secondary = details.event_content_details
    })

    /* if (this.fstore.event_register_type == 'self') {
    } else {
    } */ //end if
  },
  methods: {
    ...mapActions(useFrontendStore, ['tryFetchEventDetails'])
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
