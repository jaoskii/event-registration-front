<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import FrontendHeader from '../components/frontend/FrontendHeader.vue'
import FrontendFooter from '../components/frontend/FrontendFooter.vue'
import HeroBanner from '../components/frontend/components/HeroBanner.vue'
</script>

<template>
  <!--   <main>
    <br />
    <br />
    <br />
    <br />
    <div class="page-section section-3">
      <div class="container">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input
            v-model="this.event_detail_form.title"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div ref="mainContentEditor"></div>
        <br />
        <br />
        <button type="button" class="btn btn-primary" @click="addEventDetails">Add detail</button>
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
    <br />
  </main> -->

  <main>
    <FrontendHeader />
    <br />
    <br />
    <br />
    <br />
    <div v-if="this.about != null" class="page-section section-3">
      <div class="container">
        <div class="grid-section">
          <div class="row">
            <div class="col-md-6">
              <h3>{{ this.about[0].title }}</h3>
              <p class="p">
                {{ this.about[0].content }}
              </p>
            </div>
            <div class="col-md-6">
              <div class="img-holder">
                <img :src="getImageUrl(this.about[0].image)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.about != null" class="page-section section-2">
      <div class="container">
        <div class="grid-section">
          <div class="row">
            <div class="col-md-6">
              <div class="img-holder">
                <img :src="getImageUrl(this.about[1].image)" />
              </div>
            </div>
            <div class="col-md-6">
              <h3>{{ this.about[1].title }}</h3>
              <p class="p">
                {{ this.about[1].content }}
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
/* import { useDashboardStore } from '@/stores/dashboard' */
import { useFrontendStore } from '@/stores/frontend'

/* import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css' */

export default {
  name: 'about-page',
  components: {},
  data() {
    return {
      /* dstore: useDashboardStore(), */
      fstore: useFrontendStore(),
      about: null,
      event_detail_form: {
        event_id: '10',
        title: 'sample title',
        body: ''
      },
      mainContentEditor: null,
      mainContentEditorValue: ''
    }
  },
  created() {
    this.fstore.tryFetchAbout('full').then((res) => {
      if (res.data.status) {
        this.about = res.data.body
      } else {
        console.log('About is empty, Please set it on the backend')
      } //end if
    })
  },
  mounted() {
    /* this.initMainContentEditor()
    //call this to get article on load
    this.getArticle() */
  },
  unmounted() {},
  methods: {
    /* ...mapActions(useDashboardStore, ['tryAddEventDetail']), */
    ...mapActions(useFrontendStore, ['tryFetchAbout']),
    getImageUrl(filename) {
      return new URL(`./../assets/custom/img/` + filename, import.meta.url).href
    }
    /* addEventDetails() {
      this.event_detail_form.body = this.mainContentEditorValue
      this.dstore.tryAddEventDetail(this.event_detail_form).then((res) => {
        console.log(res)
      })
    },
    initMainContentEditor() {
      var _this = this
      this.mainContentEditor = new Quill(this.$refs.mainContentEditor, {
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike', 'link'],
              ['blockquote', 'code-block'],
              ['image', 'video'],
              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
              [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
              [{ direction: 'rtl' }], // text direction
              [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              [{ font: [] }],
              [{ align: [] }],
              ['clean'] // remove formatting button
            ],
            handlers: {
              customControl: () => {
                console.log('customControl was clicked')
              }
            }
          }
        },
        //theme: 'bubble',
        theme: 'snow',
        formats: [
          'bold',
          'underline',
          'strike',
          'header',
          'italic',
          'link',
          'code-block',
          'blockquote',
          'list',
          'script',
          'indent',
          'size',
          'direction',
          'color',
          'background',
          'font',
          'align',
          'image',
          'video',
          'clean'
        ],
        placeholder: 'Type something in here!'
      })
      //register the event handler
      this.mainContentEditor.on('text-change', function () {
        _this.mainContentEditorChanged()
      })
    },
    //this method is called when the editor changes its value
    mainContentEditorChanged() {
      console.log('main content changed!')
      //   do somethign with it like assign it to mainContentEditorValue
      this.mainContentEditorValue = this.mainContentEditor.root.innerHTML
    },
    getArticle() {
      //do the api call to get the article response.
      //once you get the respose
      // assign the html content to quill editor
      // check getArticle() method on question to fill this part
      //replace
      //       this.$refs.mainContent.pasteHTML(
      //     response.data.article.content
      // );
      // with this
      this.mainContentEditor.root.innerHTML = 'yes yes yow'
    } */
  },
  computed: {
    /* ...mapStores(useDashboardStore),
    ...mapState(useDashboardStore, []), */
    ...mapStores(useFrontendStore),
    ...mapState(useFrontendStore, [])
  }
}
</script>
