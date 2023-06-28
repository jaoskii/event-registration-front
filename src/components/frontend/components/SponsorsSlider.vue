<template>
  <div class="page-section">
    <div class="container">
      <div class="grid-section">
        <h3>Our Supportive Sponsors</h3>
        <Carousel :items-to-show="4" :wrap-around="true" style="margin-top: -5%">
          <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation
  }
})
</script>
