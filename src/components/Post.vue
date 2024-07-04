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

    <div class="regDate">
        {{ props.post.getDisplaySimpleRegDate() }}
    </div>

    <div class="content">
        {{ props.post.getDisplaySimpleContent() }}
    </div>

    <div class="readMore">
        <router-link :to="{name: 'post', params: {postId: props.post.id}}">
            Read more
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.8rem;

    a {
        text-decoration: none;
        color: #470e0e;
    }

    a:hover {
        text-decoration: underline;

    }
}

.regDate {
    font-size: 0.8rem;
    color: #797979;
    margin-bottom: 0.8rem;
}

.content {
    font-size: 0.9rem;
    color: #777777;
    margin-bottom: 1.2rem;
}

.readMore {
    font-size: 0.8rem;
    color: #0034b1;
}

.readMore a {
    text-decoration: none;
    color: #0034b1;
}

</style>