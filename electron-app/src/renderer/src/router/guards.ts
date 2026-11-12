//全局前置导航守卫
export const beforeEachLogFunction = async (to) => {
  console.log(`前置路由守卫日志打印,来源：${to.path}`)
}
//全局后置导航守卫
export const afterEachLogFunction = () => {
  console.log(`后置路由守卫日志打印`)
}
