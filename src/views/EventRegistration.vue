<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
/* import EventBoxDetails from '../components/frontend/components/EventBoxDetails.vue' */
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
                      <div class="frm-grp">
                        <label>Name</label>
                        <input
                          v-model="this.registrant_form.reg_name"
                          type="text"
                          class="frm-text"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>
                    <div class="frm-grp">
                      <label>Mobile Number</label>
                      <input
                        v-model="this.registrant_form.reg_mobile"
                        type="text"
                        class="frm-text"
                        placeholder="e.g. 09201234567"
                      />
                      <!-- <span>Invalid mobile number format</span> -->
                    </div>
                    <div class="frm-grp">
                      <label>Email address</label>
                      <!-- <small>Required</small> -->
                      <input
                        v-model="this.registrant_form.reg_email"
                        type="email"
                        class="frm-text"
                        placeholder="e.g. email@gmail.com"
                      />
                    </div>
                    <div class="frm-grp">
                      <label>Birth Date</label>
                      <VueDatePicker
                        v-model="this.registrant_form.reg_birthday"
                        :enable-time-picker="false"
                      />
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
                      <label>Province <span class="red">*</span></label>
                      <select v-model="registrant_form.reg_province" class="form-select">
                        <option v-for="opt in province_options" :key="opt.id" :value="opt.value">
                          {{ opt.text }}
                        </option>
                      </select>
                    </div>
                    <div class="frm-grp">
                      <label>Town/City <span class="red">*</span></label>
                      <select v-model="registrant_form.reg_town" class="form-select">
                        <option v-for="opt in town_options" :key="opt.id" :value="opt.value">
                          {{ opt.text }}
                        </option>
                      </select>
                    </div>
                    <div class="frm-grp">
                      <label>Emergency Contact</label>
                      <textarea
                        v-model="registrant_form.reg_emergency_contact"
                        class="frm-text"
                      ></textarea>
                    </div>
                    <div class="frm-grp">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                          :checked="registrant_form.terms_agree"
                        />
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
                        @click="registerToEvent()"
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
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useNotification } from '@kyvg/vue3-notification'
const { notify } = useNotification()

export default {
  name: 'index-page',
  components: { VueDatePicker },
  data() {
    return {
      fstore: useFrontendStore(),
      event_details: {
        primary: null,
        secondary: []
      },
      registrant_form: {
        event_id: '',
        reg_type: '',
        reg_name: 'Rajhi Johnny Masta',
        reg_mobile: '09289288556',
        reg_email: 'tamlaylovestokwa@gmail.com',
        reg_birthday: '',
        reg_province: '',
        reg_town: '',
        reg_emergency_contact: 'Princess - 0929222nog2nog',
        terms_agree: true
      },
      province_options: [
        { id: 'pindex-0', value: null, text: 'Select province' },
        { id: 'pindex-1', value: 'PROVINCE A', text: 'PROVINCE A' },
        { id: 'pindex-2', value: 'PROVINCE B', text: 'PROVINCE B' }
      ],
      town_options: [
        { id: 'tindex-0', value: null, text: 'Select town' },
        { id: 'tindex-1', value: 'TOWN A', text: 'TOWN A' },
        { id: 'tindex-2', value: 'TOWN B', text: 'TOWN B' }
      ]
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

    this.registrant_form.reg_type = this.fstore.event_register_type
    this.registrant_form.event_id = this.$route.params.eventid

    if (this.fstore.event_register_type == 'self') {
      this.registrant_form.reg_name = this.fstore.logged_user.name
      this.registrant_form.reg_mobile = this.fstore.logged_user.mobile
      this.registrant_form.reg_email = this.fstore.logged_user.email
      this.registrant_form.reg_birthday = this.$route.params.eventid
      this.registrant_form.reg_province = this.fstore.logged_user.province
      this.registrant_form.reg_town = this.fstore.logged_user.city
      this.registrant_form.reg_emergency_contact = '09289322886'
    } //end if
  },
  methods: {
    ...mapActions(useFrontendStore, ['tryFetchEventDetails', 'tryRegisterEvent']),
    registerToEvent() {
      this.fstore.tryRegisterEvent(this.registrant_form).then((res) => {
        let response = res.data
        if (response.status) {
          Object.keys(this.registrant_form).forEach((x) => {
            if (x == 'terms_agree') {
              this.registrant_form[x] = false
            } else {
              this.registrant_form[x] = ''
            } //end if
          })

          notify({
            title: 'REGISTRATION SUCCESSFULL',
            text: response.msg,
            type: 'info',
            duration: 10000,
            speed: 1000
          })

          notify({
            title: 'REDIRECTING..',
            text: 'Redirecting to payment portal...',
            type: 'info',
            duration: 10000,
            speed: 1000
          })

          window.location.replace(response.body.payment_redirect.redirectUrl)
        } else {
          notify({
            title: 'REGISTRATION FAILED',
            text: response.msg,
            type: 'error',
            duration: 10000,
            speed: 1000
          })
        } //end fn
      })
    } //end fn
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
