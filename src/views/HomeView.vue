<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const posts = ref([])

axios.get('/f1v3-api/posts?page=1&size=5').then((response) => {
  response.data.forEach(p => {
    posts.value.push(p)
  })
})
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <div class="title">
        <router-link :to="{name: 'read', params: {postId: post.id}}">
          {{ post.title }}
        </router-link>
      </div>

      <div class="content">
        {{ post.content }}
      </div>

      <div class="sub d-flex">
        <div class="category">개발</div>
        <div class="regDate">2024-05-10</div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">

ul {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 2rem;

    .title {
      a {
        font-size: 1.1rem;
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