<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Team' }">制作团队</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Person' }">个人</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script lang="ts" setup>
import {
    ElBreadcrumbItem,
    ElBreadcrumb,
} from 'element-plus'
</script>
<style></style>