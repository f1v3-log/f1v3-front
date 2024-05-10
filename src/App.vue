<script setup lang="ts">
import { RouterView } from 'vue-router'
import VueHeader from '@/components/VueHeader.vue'
import VueContent from '@/components/VueContent.vue'
</script>

<template>
  <VueHeader />
  <VueContent />
  <RouterView />
</template>

<style>
body {
  margin: 0;
  width: 100%;
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

}
</style>
