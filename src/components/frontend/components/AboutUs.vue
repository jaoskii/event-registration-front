<template>
  <div class="page-section section-2">
    <div class="container">
      <div class="grid-section">
        <div class="row">
          <div class="col-md-6">
            <h3 v-if="this.short_about != null">{{ this.short_about.title }}</h3>
            <p class="p" v-if="this.short_about != null">
              {{ this.short_about.content }}
            </p>
            <router-link to="/about" class="navlink"
              ><button class="btn btn-reg btn-default">Learn more</button>
            </router-link>
          </div>
          <div class="col-md-6">
            <div class="img-holder">
              <img src="./../../../assets/custom/img/about-img.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      short_about: null
    }
  },
  created() {},
  mounted() {
    this.fstore.tryFetchAbout('short').then((res) => {
      if (res.data.status) {
        this.short_about = res.data.body
      } else {
        console.log('About is empty, Please set it on the backend')
      } //end if
    })
  },
  unmounted() {},
  methods: {
    ...mapActions(useFrontendStore, ['tryFetchAbout'])
  },
  computed: {
    ...mapStores(useFrontendStore)
  }
}
</script>
