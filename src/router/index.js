import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Portfolio from '@/pages/Portfolio'
import NotFound from '@/pages/NotFound'

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
