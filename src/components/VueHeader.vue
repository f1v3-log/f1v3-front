<template>
  <el-header class="header">
    <el-menu mode="horizontal" router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/write">Write</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  margin: 0;
  height: 60px;
}
</style>