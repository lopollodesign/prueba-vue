import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'


// import { dollarFilter } from './coinfilters'
// createApp(App).filter('dollar', dollarFilter)

createApp(App).use(VueChartkick).use(store).use(router).mount('#app')
