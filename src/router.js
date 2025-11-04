import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue' 
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Modules from './views/Modules.vue'
import ForumView from './views/ForumView.vue'
import ModuleDetail from './views/ModuleDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  },
  {
    path: '/registro',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login 
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword 
  },
  {
    path: '/modulos',
    name: 'Modules',
    component: Modules
  },
  {
    path: '/foro',
    name: 'Forum',
    component: ForumView 
  },
  {
    path: '/modulo/:id',
    name: 'ModuleDetail',
    component: ModuleDetail // Nueva ruta dinámica
  }
  // ... otras rutas
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router