<template>
  <div class="frm">
    <div class="logo-holder">
      <a href="index.html"><img src="./../../../assets/custom/img/logo.png" /></a>
    </div>
    <h4>Register</h4>
    <div class="frm-grp">
      <label>Email</label>
      <input type="email" class="frm-text" placeholder="name@gmail.com" />
    </div>
    <div class="frm-grp req">
      <label>Password</label>
      <small>Required</small>
      <input type="password" class="frm-text" placeholder="" />
    </div>
    <div class="frm-grp">
      <label>First Name</label>
      <input type="text" class="frm-text" placeholder="Enter first name" />
    </div>
    <div class="frm-grp">
      <label>Last Name</label>
      <input type="text" class="frm-text" placeholder="Enter last name" />
    </div>
    <div class="frm-grp invalid">
      <label>Mobile Number <span class="red">*</span></label>
      <input type="text" class="frm-text" placeholder="e.g. 09201234567" />
      <span>Invalid mobile number format</span>
    </div>
    <div class="frm-grp">
      <label>Birth Date <span class="red">*</span></label>
      <input type="text" class="frm-text" placeholder="mm/dd/yyyy" />
      <img src="img/calendar.svg" class="calendar" />
    </div>
    <div class="frm-grp">
      <label>Province <span class="red">*</span></label>
      <select class="frm-text">
        <option>Select Province</option>
      </select>
      <img src="img/collapse.svg" class="dropdown" />
    </div>
    <div class="frm-grp">
      <label>Town/City <span class="red">*</span></label>
      <select class="frm-text">
        <option>Select Town/City</option>
      </select>
      <img src="img/collapse.svg" class="dropdown" />
    </div>
    <div class="frm-grp">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label check-label" for="exampleCheck1">
          I agree to Coco Running Terms and Conditions
        </label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck2" />
        <label class="form-check-label check-label" for="exampleCheck2"> Waiver </label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck3" />
        <label class="form-check-label check-label" for="exampleCheck3">
          Marketing and Promotions
        </label>
      </div>
    </div>
    <div class="frm-grp">
      <button class="btn btn-md btn-default btn-full">Submit</button>
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

export default {
  name: 'login-form',
  components: {},
  data() {
    return {}
  },
  created() {
    //console.log(useFrontendStore)
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, []),
    toggleRegistrationForm() {
      useFrontendStore().$patch((state) => {
        state.viewRegisterForm ? (state.viewRegisterForm = false) : (state.viewRegisterForm = true)
        console.log(state.viewRegisterForm)
      })
    }
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, ['viewRegisterForm'])
  }
}
</script>
