<template>
  <div class="hero">
    <div class="container">
      <div class="hero-grid">
        <carousel :items-to-show="1">
          <slide v-for="slide in this.fstore.frontendBannerImages.length" :key="slide">
            <div class="carousel__item">
              <img
                :src="getImageUrl(this.fstore.frontendBannerImages[slide - 1])"
                :alt="slide - 1"
              />
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import { mapStores, mapState, mapActions } from 'pinia'
import { useFrontendStore } from '@/stores/frontend'

export default {
  name: 'hero-banner',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      fstore: useFrontendStore(),
      sampleImage: './../../assets/custom/img/logo.png'
    }
  },
  methods: {
    ...mapActions(useFrontendStore, []),
    getImageUrl(filename) {
      return new URL(`./../../../assets/custom/img/` + filename, import.meta.url).href
    }
  },
  created() {},
  mounted() {},
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, ['frontendBannerImages'])
  }
}
</script>
