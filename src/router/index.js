import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由模块化的文件
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'
import photosRouter from './routes/photos'
import cityRouter from './routes/city'

const routes = [
  {
    path: '/',
    // 重定向  访问根路由跳转到电影页面
    redirect:'/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  photosRouter,
  cityRouter
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
