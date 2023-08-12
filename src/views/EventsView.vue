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
          <div class="row">
            <div class="col-md-6">
              <h3>Events</h3>
            </div>
            <div class="col-md-6 align-right">
              <div class="search">
                <img src="./../assets/custom/img/search.svg" class="search-icon" />
                <input type="text" name="" class="search-text" placeholder="Search event" />
                <div class="filter">
                  <a href="#"><img src="./../assets/custom/img/filter.svg" /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <EventBoxDetails />
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
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, [])
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
