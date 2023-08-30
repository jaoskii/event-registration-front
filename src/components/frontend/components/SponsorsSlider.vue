<template>
  <div class="page-section">
    <div class="container">
      <div class="grid-section">
        <h3>Our Supportive Sponsors</h3>
        <Carousel :items-to-show="4" :wrap-around="true" style="margin-top: -5%">
          <Slide v-for="slide in this.sponsors.length" :key="slide">
            <img
              :src="getImageUrl(this.sponsors[slide - 1].image)"
              :alt="this.sponsors[slide - 1].name"
            />
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
import { mapStores, mapState, mapActions } from 'pinia'
import { useFrontendStore } from '@/stores/frontend'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      fstore: useFrontendStore(),
      sponsors: []
    }
  },
  created() {
    this.fstore.tryFetchSponsors().then((res) => {
      let sponsors = res.data.body
      this.sponsors = sponsors
      console.log(this.sponsors)
    })
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, ['tryFetchSponsors']),
    getImageUrl(filename) {
      return new URL(`./../../../assets/custom/img/sponsors/` + filename, import.meta.url).href
    }
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
})
</script>
