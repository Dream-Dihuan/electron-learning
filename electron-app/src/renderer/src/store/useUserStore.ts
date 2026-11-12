import { defineStore } from 'pinia'

const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      name: 'Dihuan',
      token: 'empty-token'
    }
  },
  getters: {},
  actions: {},
  persist: {
    // 持久化存储相关配置
    enabled: true, //开启数据持久化
    strategies: [
      {
        storage: localStorage, //默认走session，插件默认走 sessionStorage（关标签页即清），这里覆盖为 localStorage（关浏览器也不丢）
        paths: ['token'] //要持久化的值
      }
    ]
  }
})

export default useUserStore
