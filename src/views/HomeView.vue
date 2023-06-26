<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
import HeroBanner from '../components/frontend/components/HeroBanner.vue'
import EventsAvailable from '../components/frontend/components/EventsAvailable.vue'
import AboutUs from '../components/frontend/components/AboutUs.vue'
</script>

<template>
  <FrontendHeader />
  <main>
    <br /><br />
    <br />
    <br />
    <br />
    <HeroBanner /><br />
    <AboutUs /><br />
    <EventsAvailable />
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
