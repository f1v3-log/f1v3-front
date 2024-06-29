<script setup lang="ts">

import { defineProps, onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const props = defineProps({
  postId: {
    type: [Number, String],
    required: true
  }
})

const post = ref({
  id: 0,
  title: '',
  content: ''
})

onMounted(() => {
  axios.get(`/f1v3-api/posts/${props.postId}`).then((response) => {
    post.value = response.data
  })
})

const router = useRouter()

const moveToEdit = () => {
  router.push({ name: 'edit', params: { postId: props.postId } })
}
</script>

<template>
  <el-row>
    <el-col>
      <h2 class="title">{{ post.title }}</h2>
      <div class="sub d-flex">
        <div class="category">개발</div>
        <div class="regDate">2024-05-10</div>
      </div>
    </el-col>
  </el-row>

  <el-row class="mt-3">
    <el-col>
      <div class="content">{{ post.content }}</div>
    </el-col>
  </el-row>

  <el-row class="mt-3">
    <el-col>
      <div class="d-flex justify-content-end">
        <el-button type="warning" roun @click="moveToEdit()">
          수정
        </el-button>
      </div>
    </el-col>
  </el-row>
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