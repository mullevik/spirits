import { createRouter, createWebHistory } from 'vue-router'
import SpiritListView from '../views/SpiritListView.vue'
import SpiritView from '../views/SpiritView.vue'
import CaptureDeviceView from '../views/CaptureDeviceView.vue'
import MapView from '../views/MapView.vue'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/all',
      name: 'spirit-list',
      component: SpiritListView,
    },
    {
      path: '/spirit/:spiritId',
      name: 'spirit',
      component: SpiritView,
      props: true,
    },
    {
      path: '/capture/:spiritId',
      name: 'capture',
      component: CaptureDeviceView,
      props: true,
    },
    {
      path: '/map/:spiritId',
      name: 'map',
      component: MapView,
      props: true,
    },
  ],
})

export default router
