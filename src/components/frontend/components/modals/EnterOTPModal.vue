<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    tabindex="-1"
    role="dialog"
    aria-labelledby="staticBackdropLabel"
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
              <input type="text" class="frm-text" placeholder="Enter OTP Code" />
            </div>
          </div>
          <div class="float-end modal-footer-grp">
            <button type="button" class="btn btn-primary modal-footer-btns btn-lg">Verify</button>
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

<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useFrontendStore } from '@/stores/frontend'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js'

export default {
  name: 'enter-otp-form',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      enterOTPModal: new Modal(document.getElementById('staticBackdrop'))
    }
  },
  created() {},
  mounted() {
    this.enterOTPModal.show()
  },
  methods: {
    ...mapActions(useFrontendStore, [])
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
