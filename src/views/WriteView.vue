<script setup lang="ts">

import { ref } from 'vue'
import axios from 'axios'

const title = ref('')
const content = ref('')

const write = function() {
  axios.post(
    '/f1v3-api/posts',
    {
      title: title.value,
      content: content.value
    });
}

</script>

<template>
  <div>
    <el-input
      v-model="title"
      placeholder="멋진 제목을 입력해보세요! 🚀"
    />
  </div>

  <div class="mt-2">
    <el-input
      v-model="content"
      type="textarea"
      rows="15">
    </el-input>
  </div>

  <div class="mt-2">
    <el-button
      type="primary"
      round
      @click="write()">
      글 작성 완료
    </el-button>
  </div>
</template>

<style>

</style>