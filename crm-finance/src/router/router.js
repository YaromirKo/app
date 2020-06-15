import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'empty' },
    component: () => import('../views/Register')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Planning')
  },
  {
    path: '/detail/:id',
    name: 'DetailRecord',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/DetailRecord')
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/History')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Profile')
  },
  {
    path: '/record',
    name: 'Record',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Record')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Categories')
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Home')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
