<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :style="{minWidth: '60px'}"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/platform">
      <el-icon><user /></el-icon>
      <template #title>平台管理</template>
    </el-menu-item>
    <el-menu-item index="/publish">
      <el-icon><Promotion /></el-icon>
      <template #title>内容发布</template>
    </el-menu-item>
    <el-menu-item index="/effect">
      <el-icon><ZoomIn /></el-icon>
      <template #title>效果查看</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  User,
  Promotion,
  ZoomIn
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
