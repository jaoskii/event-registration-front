<template>
  <div class="page-section">
    <div class="container">
      <div class="grid-section">
        <h3>Upcoming Events <a class="btn btn-sm btn-secondary">View all</a></h3>
        <div class="row justify-content-center">
          <div class="col-md-4" v-for="up_event in events.upcoming" :key="up_event.id">
            <div class="event-item">
              <div class="event-img">
                <img src="./../../../assets/custom/img/event-thumb.png" />
                <span class="category">{{ up_event.event_category }}</span>
              </div>
              <div class="event-text">
                <h4>{{ up_event.event_name }}</h4>
                <span>{{ up_event.converted_startdate }}</span>
                <span>{{ up_event.event_location }}</span>
                <div class="event-btn">
                  <router-link
                    :to="'/event/details/' + up_event.id"
                    class="btn btn-md btn-full btn-outline-secondary"
                    >View Details</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-section mt-48">
        <h3>Past Events <a class="btn btn-sm btn-secondary">View all</a></h3>
        <div class="row justify-content-center">
          <div class="col-md-4" v-for="fin_event in events.finished" :key="fin_event.id">
            <div class="event-item">
              <div class="event-img">
                <img src="./../../../assets/custom/img/event-thumb.png" />
                <span class="category">{{ fin_event.event_category }}</span>
              </div>
              <div class="event-text">
                <h4>{{ fin_event.event_name }}</h4>
                <span>{{ fin_event.converted_startdate }}</span>
                <span>{{ fin_event.event_location }}</span>
                <div class="event-btn">
                  <router-link
                    :to="'/event/details/' + fin_event.id"
                    class="btn btn-md btn-full btn-outline-secondary"
                    >View Details</router-link
                  >
                </div>
              </div>
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
  name: 'frontend-nav',
  components: {},
  data() {
    return {
      fstore: useFrontendStore(),
      showProfileDropdown: false,
      events: {
        finished: [],
        upcoming: []
      }
    }
  },
  created() {},
  mounted() {
    this.getEvents()
  },
  methods: {
    ...mapActions(useFrontendStore, ['tryFetchEvents']),
    getEvents() {
      this.fstore.tryFetchEvents({ pull_type: 'upcoming' }).then((res) => {
        let data = res.data
        this.events.upcoming = data.body
        /* data.body.forEach((element) => {}) */
      })

      this.fstore.tryFetchEvents({ pull_type: 'past' }).then((res2) => {
        let data2 = res2.data
        this.events.finished = data2.body
      })
    }
  },
  computed: {
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
