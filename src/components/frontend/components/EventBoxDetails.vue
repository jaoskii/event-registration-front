<template>
  <div class="col-md-4" v-for="event in events" :key="event.id">
    <div class="event-item">
      <div class="event-img">
        <img src="./../../../assets/custom/img/event-thumb.png" />
        <span class="category">{{ event.event_category }}</span>
      </div>
      <div class="event-text">
        <h4>{{ event.event_name }}</h4>
        <span>{{ event.converted_startdate }}</span>
        <span>{{ event.event_location }}</span>
        <div class="event-btn">
          <router-link
            :to="'/event/details/' + event.id"
            class="btn btn-md btn-full btn-outline-secondary"
            >View Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useFrontendStore } from '@/stores/frontend'

export default {
  name: 'event-listing-box',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      events: []
    }
  },
  created() {
    this.getEvents()
  },
  mounted() {},
  methods: {
    ...mapActions(useFrontendStore, []),
    getEvents() {
      this.fstore.tryFetchEvents({ pull_type: 'all' }).then((res) => {
        let data = res.data
        this.events = data.body
        /* data.body.forEach((element) => {}) */
      })
    }
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
