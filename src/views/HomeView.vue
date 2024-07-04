<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import PostRepository from '@/repository/PostRepository'
import { container } from 'tsyringe'
import Post from '@/components/Post.vue'

const POST_REPOSITORY = container.resolve(PostRepository)

const state = reactive({
    postList: []
})

function getList() {
    POST_REPOSITORY.getList()
        .then((postList) => {
            console.log('>>>', postList)
            state.postList = postList
        })
        .catch((error) => {
            console.log(error)
        })
}

onMounted(() => {
    getList()
})
</script>

<template>
    <div class="content">
        <ul class="posts">
            <li v-for="post in state.postList" :key="post.id">
                <Post :post="post" />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

ul {
    list-style: none;
    padding: 0;

    li {
        margin-bottom: 2rem;

        .title {
            a {
                font-size: 1.2rem;
                font-weight: bold;
                color: #353535;
                text-decoration: none;
            }

            &:hover {
                text-decoration: underline;
            }
        }

        .content {
            font-size: 0.9rem;
            margin-top: 8px;
            color: #777777;
        }
    }

    &:last-child {
        margin-bottom: 0;
    }

    .sub {
        margin-top: 8px;
        font-size: 0.78rem;

        .category {
            font-weight: bold;
        }

        .regDate {
            margin-left: 8px;
            color: #302c50;
        }
    }
}

</style>