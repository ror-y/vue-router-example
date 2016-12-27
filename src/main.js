import Vue from 'vue'
import App from './App.vue'
import router from './router'

const app = new Vue({
    ...App,
    router
}).$mount('#app')
