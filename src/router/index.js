import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Armenian from '../components/Armenian.vue'
import Chinese from '../components/Chinese.vue'
import Greek from '../components/Greek.vue'

export default new Router({
  mode: 'history',
  routes: [{
    path: '/armenian',
    component: Armenian
  }, {
    path: '/chinese',
    component: Chinese
  }, {
    path: '/greek',
    component: Greek
  }, ]
})