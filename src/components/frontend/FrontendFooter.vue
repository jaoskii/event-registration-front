<template>
  <footer>
    <div class="lower">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p v-if="this.footer_details != null">{{ this.footer_details.copyright }}</p>
            <p v-if="this.footer_details != null">
              {{ this.footer_details.detail_1 }}
            </p>
            <p v-if="this.footer_details != null">
              {{ this.footer_details.detail_2 }}
            </p>
          </div>
          <div class="col-md-4">
            <div class="social" v-if="this.footer_details != null">
              <a href="#"
                ><img
                  v-if="this.footer_details.is_enabled_twitter"
                  src="./../../assets/custom/img/fb.svg"
              /></a>
              <a href="#"
                ><img
                  v-if="this.footer_details.is_enabled_facebook"
                  src="./../../assets/custom/img/ig.svg"
              /></a>
              <a href="#"
                ><img
                  v-if="this.footer_details.is_enabled_instagram"
                  src="./../../assets/custom/img/tw.svg"
              /></a>
            </div>
            <div class="powered">
              <h4>Powered by</h4>
              <img src="./../../assets/custom/img/traqs-logo.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useFrontendStore } from '@/stores/frontend'

export default {
  name: 'about-page',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      footer_details: null
    }
  },
  created() {},
  mounted() {
    this.fstore.tryFetchFooterDetails().then((res) => {
      if (res.data.status) {
        this.footer_details = res.data.body
      } else {
        console.log('Footer details is empty, Please set it on the backend')
      } //end if
    })
  },
  unmounted() {},
  methods: {
    ...mapActions(useFrontendStore, ['tryFetchFooterDetails'])
  },
  computed: {
    ...mapStores(useFrontendStore)
  }
}
</script>
