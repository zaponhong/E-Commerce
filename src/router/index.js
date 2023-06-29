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
      path: '/Black_Ordinary_Top',
      name: 'Area1',
      component:()=> import('../views/Area1View.vue')
    },


  ]
})

export default router
