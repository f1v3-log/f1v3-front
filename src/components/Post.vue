<script setup lang="ts">
import Post from '@/entity/post/Post'

const props = defineProps<{
    post: Post
}>()
</script>

<template>

    <div class="title">
        <router-link :to="{ name: 'post', params: { postId: props.post.id }}" p>
            {{ props.post.title }}
        </router-link>
    </div>

    <div class="regDate">Posted on 2023-02-01</div>

    <div class="content">
        {{ props.post.content }}
    </div>

    <div class="readMore">
        <router-link :to="{name: 'post', params: {postId: 1}}">
            Read more
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.title {
}
</style>