import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Height from '../views/Height'
import Bottom from '../views/Bottom.vue'
import Gavel from '../views/Gavel.vue'
import Right from '../views/Right.vue'
import Left from '../views/Left.vue'
import Lock from '../views/Lock.vue'
import Shelves from '../views/Shelves.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Height
  },
  {
    path: '/bottom',
    name: 'Bottom',
    component: Bottom
  },
  {
    path: '/gavel',
    name: 'Gavel',
    component: Gavel
  },
  {
    path: '/right',
    name: 'Right',
    component: Right
  },
  {
    path: '/left',
    name: 'Left',
    component: Left
  },
  {
    path: '/lock',
    name: 'Lock',
    component: Lock
  },
  {
    path: '/shelves',
    name: 'Shelves',
    component: Shelves
  },

]

const router = new VueRouter({
  routes
})

export default router
