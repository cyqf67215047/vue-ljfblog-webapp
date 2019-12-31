import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const NewestArticle = () =>import("@/pages/newestArticle")
const Category = () => import("@/pages/Category")
const Search = () => import("@/pages/search")

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/newestArticle'
    },
    {
      path: '/newestArticle',
      component: NewestArticle
    },
    {
      path:'/category',
      component: Category
    },
    ,
    {
      path:'/search',
      component: Search
    },
  ]
})
