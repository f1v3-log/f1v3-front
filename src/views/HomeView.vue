<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import PostRepository from '@/repository/PostRepository'
import { container } from 'tsyringe'
import Paging from '@/entity/data/Paging'
import type Post from '@/entity/post/Post'
import PostComponent from '@/components/PostComponent.vue'


const POST_REPOSITORY = container.resolve(PostRepository)

type StateType = {
    postList: Paging<Post>
}

const state = reactive<StateType>({
    postList: new Paging<Post>()
})

function getList(page: number = 1, size: number = 3) {
    POST_REPOSITORY.getList(page, size)
        .then((postList) => {
            console.log(postList)
            state.postList = postList
        })
}

onMounted(() => {
    getList()
})
</script>
<template>
    <div class="content">
        <span class="totalCount">게시글 수: {{ state.postList.totalCount }}</span>

        <ul class="posts">
            <li v-for="post in state.postList.items" :key="post.id">
                <PostComponent :post="post" />
            </li>
        </ul>

        <div class="d-flex justify-content-center">
            <el-pagination
                :background="true"
                layout="prev, pager, next"
                v-model:current-page="state.postList.page"
                :total="state.postList.totalCount"
                :default-page-size="3"
                @current-change="(page: number, size: number) => getList(page, size)"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">

.content {
    height: calc(100vh - 60px - 2rem);
    padding: 0 1rem 0 1rem;
    margin-bottom: 2rem;
}

.totalCount {
    font-size: 0.88rem;
    color: #777777;
    float: right;
}

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