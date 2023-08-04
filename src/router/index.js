{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> */}
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Celine',
      name: 'Celine',
      component:()=> import('../views/CelineView.vue')
    },
    {
      path: '/Chanel',
      name: 'Chanel',
      component:()=> import('../views/ChanelView.vue')
    },

    {
      path: '/Zimmermann',
      name: 'Zimmermann',
      component: ()=>import('../views/ZimmermannView.vue')
    },
    
    
    {
      path: '/Area',
      name: 'Area',
      component:()=> import('../views/AreaView.vue')
    },
  
    {
      path: '/Jimmychoo',
      name: 'Jimmychoo',
      component:()=> import('../views/JimmychooView.vue')
    },
    {
      path: '/Mach&Mach',
      name: 'Mach&Mach',
      component:()=> import('../views/Mach&MachView.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      component:()=> import('../views/ShopView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component:()=> import('../views/accView.vue')
    },
    {
      path: '/vintage_top',
      name: 'Area1',
      component:()=> import('../views/Area1View.vue')
    },
    {
      path: '/cart',
      name: 'Area11',
      component:()=> import('../views/Area11View.vue')
    },
    {
      path: '/customer_information',
      name: 'Area111',
      component:()=> import('../views/Area111View.vue')
    },
    {
      path: '/shipping',
      name: 'Area1111',
      component:()=> import('../views/Area1111View.vue')
    },
    {
      path: '/checkout',
      name: 'Area11111',
      component:()=> import('../views/Area11111View.vue')
    },
    {
      path: '/Order',
      name: 'Area111111',
      component:()=> import('../views/Area111111View.vue')
    },
    {
      path: '/',
      name: 'Area1111111',
      component:()=> import('../views/Area1111111View.vue')
    },
    


  ]
})

export default router
