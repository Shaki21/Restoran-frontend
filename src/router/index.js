import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterForm from '../components/RegisterForm.vue'

const routes = [

  {
    path: '/',
    name: 'Register',
    component: RegisterForm
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
