<script setup lang="ts">
import { defineProps, onMounted, reactive } from 'vue'
import PostRepository from '@/repository/PostRepository'
import { container } from 'tsyringe'
import type Post from '@/entity/post/Post'

const props = defineProps<{
    postId: number
}>()

const POST_REPOSITORY = container.resolve(PostRepository)

type StateType = {
    post: Post | null
}

const state = reactive<StateType>({
    post: null
})

function getPost() {
    POST_REPOSITORY.get(props.postId)
        .then((post: Post) => {
            state.post = post
        })
        .catch((e) => {
            console.log(e)
        })
}

onMounted(() => {
    getPost()
})
</script>

<template>
    <div v-if="state.post != null">
        <el-row>
            <el-col>
                <h2 class="title">{{ state.post?.title }}</h2>
                <div class="sub d-flex">
                    <div class="category">개발</div>
                    <div class="regDate">{{ state.post.regDate }}</div>
                </div>
            </el-col>
        </el-row>

        <el-row class="mt-3">
            <el-col>
                <div class="content">{{ state.post.content }}</div>
            </el-col>
        </el-row>

        <el-row class="mt-3">
            <el-col>
                <div class="d-flex justify-content-end">
                    <el-button type="warning" round> 수정</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">
.title {
    font-size: 1.6rem;
    font-weight: 600;
    color: #353535;
    margin-top: 0;
}

.content {
    font-size: 0.95rem;
    margin-top: 5px;
    color: #5d5d5d;
    white-space: break-spaces;
    line-height: 1.5;
}

.sub {
    margin-top: 10px;
    font-size: 0.78rem;

    .category {
        font-weight: bold;
    }

    .regDate {
        margin-left: 8px;
        color: #302c50;
    }
}
</style>
