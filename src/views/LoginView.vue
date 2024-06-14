<script setup lang="ts">
import { reactive } from 'vue'
import Login from '@/entity/user/Login'
import axios, { type AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const state = reactive({
    login: new Login()
})

const router = useRouter()

function doLogin() {
    axios
        .post('/f1v3-api/auth/login', state.login)
        .then(() => {
            ElMessage({ type: 'success', message: '환영합니다.' })
            router.replace('/')
        })
        .catch((e: AxiosError) => {
            ElMessage({ type: 'error', message: e.response?.data.message })
        })
}
</script>

<template>
    <el-row>
        <el-col :span="10" :offset="7">
            <el-form label-position="top">
                <el-form-item label="e-mail">
                    <el-input v-model="state.login.email"></el-input>
                </el-form-item>

                <el-form-item label="password">
                    <el-input type="password" v-model="state.login.password"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" style="width: 100%" @click="doLogin()">
                        로그인
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<style scoped lang="scss"></style>
