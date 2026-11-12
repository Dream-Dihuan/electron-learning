import { createRouter, createWebHashHistory } from 'vue-router'
import {beforeEachLogFunction,afterEachLogFunction} from './guards'
import { routes } from './routes'
const router = createRouter({
  history: createWebHashHistory(), //hash模式
  routes: routes
})

// 全局前置路由守卫
router.beforeEach(beforeEachLogFunction)
// 全局后置路由守卫
router.beforeEach(afterEachLogFunction)

export default router
