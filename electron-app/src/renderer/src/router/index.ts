import { createRouter, createWebHashHistory } from 'vue-router'
import {beforeEachLogFunction,afterEachLogFunction} from '@router/guards'
import { routes } from '@router/routes.ts'
const router = createRouter({
  history: createWebHashHistory(), //hash模式
  routes: routes
})

// 全局前置路由守卫
router.beforeEach(beforeEachLogFunction)
// 全局后置路由守卫
router.beforeEach(afterEachLogFunction)

export default router
