<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
import HeroBanner from '../components/frontend/components/HeroBanner.vue'
</script>

<template>
  <!-- <FrontendHeader />
  <main>
    <br />
    <br />
    <br />
    <br />
    <div class="page-section section-3">
      <div class="container">
        <div class="grid-section">
          <div class="row">
            <div class="col-md-6">
              <h3>About Coco Running</h3>
              <p class="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="col-md-6">
              <div class="img-holder">
                <img src="./../assets/custom/img/about-img.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section section-2">
      <div class="container">
        <div class="grid-section">
          <div class="row">
            <div class="col-md-6">
              <div class="img-holder">
                <img src="./../assets/custom/img/about-img.png" />
              </div>
            </div>
            <div class="col-md-6">
              <h3>About Coco Running</h3>
              <p class="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HeroBanner />
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
  <FrontendFooter /> -->
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
  name: 'about-page',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    ...mapActions(useFrontendStore, [])
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
