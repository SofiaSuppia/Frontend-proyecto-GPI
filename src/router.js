import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue' 
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Modules from './views/Modules.vue'

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
    component: Login // Nueva ruta
  },
  {
    path: '/modulos',
    name: 'Modules',
    component: Modules
  }
  // ... otras rutas
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router