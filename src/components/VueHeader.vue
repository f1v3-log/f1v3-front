<template>
    <el-header class="header">
        <!--        <img-->
        <!--            src="https://capsule-render.vercel.app/api?type=venom&color=6CABDD&text=f1v3-log&fontColor=1C2C5B&animation=twinkling"-->
        <!--            alt="f1v3-log 배너"-->
        <!--        />-->

        <el-menu mode="horizontal" router>
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/write">Write</el-menu-item>
            <el-menu-item index="/login">Login</el-menu-item>
        </el-menu>
    </el-header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
    margin-top: 30px;
    height: 60px;
}
</style>
