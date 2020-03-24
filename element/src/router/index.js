import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article-read/:articleId',
    name: 'ArticleRead',
    props: true,
    component: () => import('../components/article-page.vue')
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: () => import('../views/AboutMe.vue')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('../views/Classify.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/file',
    name: 'File',
    component: () => import('../views/File.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
