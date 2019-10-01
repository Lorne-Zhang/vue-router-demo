import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    const postion = {}

    if (to.hash) {
      postion.selector = to.hash

      if (to.hash === '#anchor2') {
        postion.offset = {y: 100 }
      }

      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return postion
      }
      return false
    }

    return new Promise(resolve => {
      if (to.matched.some(m => m.meta.scrollToTop)) {
        postion.x = 0
        postion.y = 0
      }

      this.app.$root.$once('triggerScroll', () => {
        resolve(postion)
      })
    })
  }
}

const router = new  VueRouter({
  mode: 'history',
  scrollBehavior,
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
