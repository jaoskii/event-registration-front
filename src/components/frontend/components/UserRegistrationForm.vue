<template>
  <div class="frm">
    <div class="logo-holder">
      <a href="index.html"><img src="./../../../assets/custom/img/logo.png" /></a>
    </div>
    <h4>Register</h4>
    <div class="frm-grp">
      <label>Email</label>
      <input
        v-model="registrationForm.email"
        type="email"
        class="frm-text"
        placeholder="name@gmail.com"
      />
    </div>
    <div class="frm-grp req">
      <label>Password</label>
      <small>Required</small>
      <input v-model="registrationForm.password" type="password" class="frm-text" placeholder="" />
    </div>
    <div class="frm-grp">
      <label>Name</label>
      <input
        v-model="registrationForm.name"
        type="text"
        class="frm-text"
        placeholder="Enter first name"
      />
    </div>
    <div class="frm-grp invalid">
      <label>Mobile Number <span class="red">*</span></label>
      <input
        v-model="registrationForm.mobile"
        type="text"
        class="frm-text"
        placeholder="e.g. 09201234567"
      />
      <span>Invalid mobile number format</span>
    </div>
    <div class="frm-grp">
      <label>Birth Date <span class="red">*</span></label>
      <input
        v-model="registrationForm.birthdate"
        type="text"
        class="frm-text"
        placeholder="mm/dd/yyyy"
      />
      <img src="img/calendar.svg" class="calendar" />
    </div>
    <div class="frm-grp">
      <label>Civil Status <span class="red">*</span></label>
      <select v-model="registrationForm.civil_status" class="form-select">
        <option v-for="opt in civilstat_options" :key="opt.id" :value="opt.value">
          {{ opt.text }}
        </option>
      </select>
    </div>
    <div class="frm-grp">
      <label>Gender <span class="red">*</span></label>
      <select class="form-select" v-model="registrationForm.gender">
        <option v-for="opt in gender_options" :key="opt.id" :value="opt.value">
          {{ opt.text }}
        </option>
      </select>
    </div>
    <div class="frm-grp">
      <label>Province <span class="red">*</span></label>
      <select v-model="registrationForm.province" class="form-select">
        <option v-for="opt in province_options" :key="opt.id" :value="opt.value">
          {{ opt.text }}
        </option>
      </select>
    </div>
    <div class="frm-grp">
      <label>Town/City <span class="red">*</span></label>
      <select v-model="registrationForm.city" class="form-select">
        <option v-for="opt in town_options" :key="opt.id" :value="opt.value">
          {{ opt.text }}
        </option>
      </select>
    </div>
    <div class="frm-grp">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label check-label" for="flexCheckDefault">
          I Agree to terms and Conditions
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
        <label class="form-check-label check-label" for="flexCheckChecked">
          Subscribe to SMS News and Promotions
        </label>
      </div>
    </div>
    <div class="frm-grp">
      <button class="btn btn-md btn-default btn-full" @click="registerAccount()">Submit</button>
    </div>
    <div class="frm-grp">
      <p>
        Already have an account?
        <a @click="toggleRegistrationForm()" class="nav-link clickable">Login here.</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useFrontendStore } from '@/stores/frontend'

import { useNotification } from '@kyvg/vue3-notification'
const { notify } = useNotification()

export default {
  name: 'login-form',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      userTokenName: import.meta.env.VITE_SITE_TOKEN_NAME,
      registrationForm: {
        name: 'Rajhi John Tabora',
        mobile: '09289322886',
        email: 'tamlaylovestokwa@gmail.com',
        birthdate: '1993-08-10',
        gender: 'Male',
        civil_status: 'Married',
        province: 'PROVINCE A',
        city: 'TOWN A',
        password: 'jaoski',
        source: 'COCO_EREG',
        referral_code: 'VERTOUS',
        sms_subscribed: 1,
        terms_agree: 1
      },
      gender_options: [
        { id: 'gindex-0', value: null, text: 'Select gender' },
        { id: 'gindex-1', value: 'Male', text: 'Male' },
        { id: 'gindex-2', value: 'Female', text: 'Female' }
      ],
      civilstat_options: [
        { id: 'cindex-0', value: null, text: 'Select status' },
        { id: 'cindex-1', value: 'Single', text: 'Single' },
        { id: 'cindex-2', value: 'Married', text: 'Married' },
        { id: 'cindex-3', value: 'Windowed', text: 'Windowed' }
      ],
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
  created() {
    //console.log(useFrontendStore)
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, ['tryRegister', 'tryLoggingIn', 'tryGetUserProfile']),
    toggleRegistrationForm() {
      useFrontendStore().$patch((state) => {
        state.viewRegisterForm ? (state.viewRegisterForm = false) : (state.viewRegisterForm = true)
      })
    },
    registerAccount() {
      this.fstore.tryRegister(this.registrationForm).then((res) => {
        let data = res.data

        if (data.code == 100) {
          notify({
            title: data.title,
            text: data.message,
            type: 'info',
            duration: 10000,
            speed: 1000
          })

          notify({
            title: 'Logging In..',
            text: 'Trying to login now. Please wait. You will be redirected.',
            type: 'info',
            duration: 10000,
            speed: 1000
          })

          let loginParams = {
            email: this.registrationForm.email,
            password: this.registrationForm.password,
            platform: import.meta.env.VITE_CLIENT_SOURCE
          }

          this.fstore.tryLoggingIn(loginParams).then((res2) => {
            let data2 = res2.data
            if (data2.code == 100) {
              notify({
                title: data2.title,
                text: 'Logged in successfully! Please wait',
                type: 'info',
                duration: 10000,
                speed: 1000
              })

              this.fstore.$patch((state) => {
                state.userToken = data.dataObject
                sessionStorage.setItem(this.userTokenName, data.dataObject)
              })

              this.fstore.tryGetUserProfile().then((res3) => {
                let data3 = res3.data
                if (data3.code == 100) {
                  this.fstore.$patch((state) => {
                    state.userToken = data.dataObject
                    sessionStorage.setItem(this.userTokenName, data.dataObject)
                  })

                  notify({
                    title: data3.title,
                    text: data3.message,
                    type: 'info',
                    duration: 10000,
                    speed: 1000
                  })

                  this.$router.push('/')
                } else {
                  notify({
                    title: data3.title,
                    text: data3.message,
                    type: 'error',
                    duration: 10000,
                    speed: 1000
                  })
                }
              })
            } else {
              notify({
                title: data2.title,
                text: data2.message,
                type: 'error',
                duration: 10000,
                speed: 1000
              })
            } //end if
          }) //end register

          /* useFrontendStore().$patch((state) => {
            state.userToken = data.access_token
            Object.keys(state.logged_user).forEach((element) => {
              state.logged_user[element] = data[element]
            })

            sessionStorage.setItem(this.userTokenName, data.access_token)
          }) */
          //this.$router.push('/')
        } else {
          notify({
            title: data.title,
            text: data.message,
            type: 'error',
            duration: 10000,
            speed: 1000
          })
        } //end if
      })
    } //end fn
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, ['viewRegisterForm'])
  }
}
</script>
