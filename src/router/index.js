import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasicMath from '@/views/BasicMath.vue'
import StringManipulation from '@/views/StringManipulation.vue'
import VuetifyResearch from '@/views/VuetifyResearch.vue'
import CompositionAPI from '@/views/CompositionAPI.vue'
import MathComposition from '@/views/MathComposition.vue'
import StringComposition from '@/views/StringComposition.vue'
import AreaLab from '@/views/AreaLab.vue'
import ReactiveArea from '@/views/ReactiveArea.vue'
import AxiosLab from '@/views/AxiosLab.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/basic-math',
    name: 'basicmath',
    component: BasicMath
  },
  {
    path: '/string-manipulation',
    name: 'stringmanipulation',
    component: StringManipulation
  },
  {
    path: '/vuetify-research',
    name: 'vuetifyresearch',
    component: VuetifyResearch
  },
  {
    path: '/composition-api',
    name: 'compositionapi',
    component: CompositionAPI
  },
  {
    path: '/math-composition',
    name: 'mathcomposition',
    component: MathComposition
  },
  {
    path: '/string-composition',
    name: 'stringcomposition',
    component: StringComposition
  },
  {
    path: '/area-lab',
    name: 'arealab',
    component: AreaLab
  },
  {
    path: '/reactive-area',
    name: 'reactivearea',
    component: ReactiveArea
  },
  {
    path: '/axios-lab',
    name: 'axioslab',
    component: AxiosLab
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
