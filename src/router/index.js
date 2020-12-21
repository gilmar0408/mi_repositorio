import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      public:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      public:true
    }
    
  },
  
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      public:true
    }

  },
  {
    path: '/autenticado',
    name: 'Autenticado',
    // route level code-splitting
    // this generates a separate chunk (autenticado.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "autenticado" */ '../views/Autenticado.vue'),
    meta:{
      auth:true
    },
    children:[
      {
        path: 'categoria',
        name: 'Categoria',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Categoria.vue'),
        meta:{
          auth:true,
        }
      },
      {
        path: 'usuario',
        name: 'Usuario',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Usuario.vue'),
        meta:{
          admin:true
        }
      },
      {
        path: 'articulo',
        name: 'Articulo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Articulo.vue'),
        meta:{
          auth:true,
        }
      }

    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record =>record.meta.public)){
    next();
  }else{
    if(to.matched.some(record =>record.meta.auth)){
      if(store.state.user){
        next();
      }else{
        next({name:'Login'})
      } 
    }
    
    if(to.matched.some(record =>record.meta.admin)){
      if(store.state.user.rol === 'Administrador'){
        next();
      }else{
        next({name:'Autenticado'})
      } 
    }else{
      next();
    }   
  
  }

})

export default router
