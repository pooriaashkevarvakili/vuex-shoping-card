import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'app',
  },
  {
    name:'/singleProduct',
    path:'/singleProduct',
    component:()=>import('../components/SingleProduct')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
