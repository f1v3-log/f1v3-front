<script setup lang="ts">
import { reactive } from 'vue'
import Login from '@/entity/user/Login'
import { ElMessage } from 'element-plus'
import AxiosHttpClient from '@/http/AxiosHttpClient'
import type HttpError from '@/http/HttpError'
import UserRepository from '@/repository/UserRepository'
import { container } from 'tsyringe'

const state = reactive({
    login: new Login()
})

const USER_REPOSITORY = container.resolve(UserRepository)

function doLogin() {
    const httpClient = new AxiosHttpClient()

    USER_REPOSITORY.login(state.login)
        .then((data: any) => {
            ElMessage({ type: 'success', message: '환영합니다. 👻' })
            location.href = '/'
        })
        .catch((e: HttpError) => {
            ElMessage({ type: 'error', message: e.getMessage() })
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
