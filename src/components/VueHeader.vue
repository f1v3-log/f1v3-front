<script setup lang="ts">
</script>

<template>
  <el-header class="header">
    <!--    <RouterLink to="/">Home</RouterLink>-->
    <!--    <RouterLink to="/write">글 작성</RouterLink>-->
    <el-menu mode="horizontal">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Write</el-menu-item>
    </el-menu>
  </el-header>
</template>


<style scoped>
.header {
  margin: 0;
  height: 60px;
}
</style>