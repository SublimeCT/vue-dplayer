import Vue from 'vue'
import App from './App.vue'
import VueDPlayer from '../src/index'
import Hls from 'hls.js'

window.Hls = Hls
Vue.use(VueDPlayer)

new Vue({
  el: '#app',
  render: h => h(App)
})
