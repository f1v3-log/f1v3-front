<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import PostWrite from '@/entity/post/PostWrite'
import { container } from 'tsyringe'
import PostRepository from '@/repository/PostRepository'
import { ElMessage } from 'element-plus'
import type HttpError from '@/http/HttpError'

const state = reactive({
    postWrite: new PostWrite()
})

const POST_REPOSITORY = container.resolve(PostRepository)
const router = useRouter()

function write() {
    // POST_REPOSITORY.write(state.postWrite)
    POST_REPOSITORY.write(state.postWrite)
        .then(() => {
            ElMessage({ type: 'success', message: '글 등록이 완료되었습니다.' })
            router.replace('/')
        })
        .catch((e: HttpError) => {
            ElMessage({ type: 'error', message: e.getMeesage() })
        })
}
</script>

<template>
    <div>
        <el-input
            v-model="state.postWrite.title"
            size="large"
            placeholder="멋진 제목을 입력해보세요! 🚀"
        />
    </div>

    <div class="mt-2">
        <el-input v-model="state.postWrite.content" type="textarea" rows="15" />
    </div>

    <div class="mt-2">
        <div class="d-flex justify-content-end w-100">
            <el-button type="primary" style="width: 100%" @click="write()">글 작성 완료</el-button>
        </div>
    </div>
</template>

<style></style>
