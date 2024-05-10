<script setup lang="ts">

import { useRouter } from 'vue-router'
import { defineProps, onMounted, ref } from 'vue'
import axios from 'axios'

const router = useRouter()

const post = ref({
  id: 0,
  title: '',
  content: ''
})

const props = defineProps({
  postId: {
    type: [Number, String],
    required: true
  }
})

onMounted(() => {
  axios.get(`/f1v3-api/posts/${props.postId}`).then((response) => {
    post.value = response.data
  })
})

const edit = () => {
  axios.patch(`/f1v3-api/posts/${props.postId}`, post.value).then(() => {
    router.replace({name : "home"})
  });
}

</script>

<template>
  <div>
    <el-input
      v-model="post.title"
      placeholder="멋진 제목을 입력해보세요! 🚀"
    />
  </div>

  <div class="mt-2">
    <el-input
      v-model="post.content"
      type="textarea"
      rows="15">
    </el-input>
  </div>

  <div class="mt-2">
    <el-button
      type="warning"
      round
      @click="edit()">

      수정완료

    </el-button>
  </div>
</template>

<style>

</style>