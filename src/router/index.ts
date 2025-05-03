import { createRouter, createWebHistory } from 'vue-router'
import SpiritListView from '../views/SpiritListView.vue'
import SpiritView from '../views/SpiritView.vue'
import CaptureDeviceView from '../views/CaptureDeviceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
  ],
})

export default router
