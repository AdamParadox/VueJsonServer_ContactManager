import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/contacts',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: () => import('../views/ContactManager.vue')
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: () => import('../views/AddContact.vue')
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: () => import('../views/EditContact.vue')
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewContact',
    component: () => import('../views/ViewContact.vue')
  },
  {
    path: '/*',
    // path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
