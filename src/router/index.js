import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterForm from '../components/RegisterForm.vue'
import Welcome from '../components/WelcomeHere.vue'
import AdditionalInformation from '@/components/AdditionalInformation.vue'
import LoginPage from '@/components/LoginPage.vue'
import TestRoute from '@/components/TestRoute.vue'

const routes = [

  {
    path: '/',
    name: 'Register',
    component: RegisterForm
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path:'/additional-information',
    name: 'AdditionalInformation',
    component: AdditionalInformation

  },
  {
    path: '/login-page',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/test',
    name: 'TestRuta',
    component: TestRoute
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
