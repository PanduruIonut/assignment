import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import ProductDetail from './pages/ProductDetails.vue'
import FontAwesomeIcon from "./utils/fontawesome-icons"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'


import './style.css'


import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/', component: Dashboard,
      },
      {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: true,
      }
  ]
  })

app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
