<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'

import EventsAvailable from '../components/frontend/components/EventsAvailable.vue'
import AboutUs from '../components/frontend/components/AboutUs.vue'
</script>

<template>
  <FrontendHeader />
  <main>
    <AboutUs /><br />
    <EventsAvailable />
  </main>
  <FrontendFooter />
</template>
