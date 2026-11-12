<template>
    <div>
        <h1>
            主页
        </h1>
        <button @click="login">登录</button>
        <p>token:{{ store.user.token }}</p>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@renderer/store';
const store = useStore()
console.log("全局变量-用户姓名:"+ store.user.name)
const login = ():string => {
    store.user.token = "this is Dihuan's token"
    return "ok"
}
</script>