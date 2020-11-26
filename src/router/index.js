import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home.vue')
const Sort = () => import('views/sort/sort.vue')
const Car = () => import('views/car/car.vue')
const My = () => import('views/my/my.vue')
const Detail = () => import('views/detail/detail.vue')


// 安装插件
Vue.use(VueRouter)

// 创建router
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router
