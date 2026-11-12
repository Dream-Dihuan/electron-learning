<template>
    <div>
        <h1>
            主页
        </h1>
        <button @click="changeToken">修改token</button>
        <p>token:{{ store.user.token }}</p>
        <button @click="login">登录</button>
        <el-button>test</el-button>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@renderer/store'
import {loginByJson} from "@api/login"

const store = useStore()
console.log("全局变量-用户姓名:"+ store.user.name)
const changeToken = ():string => {
    store.user.token = "this is Dihuan's token"
    return "ok"
}

const loginData = {
    "password": "1899ddee9d860a0c452dd91844cb7a1c",//密码（需要使用AES加密）
    "username": "6a89e60b1231d61d4bf89a08e4fc6229",//用户名（需要使用AES加密）
    "key": "123",//图形验证码中随机UUID
    "captcha": "2f3j"
}

const login = async ():any => {
   let res =  await loginByJson(loginData);
   console.log(res);
   return res;
}
</script>