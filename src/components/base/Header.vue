<template>
    <div
      style="display: flex; border-bottom: solid 1px var(--ep-menu-border-color); align-items: center; justify-content: space-between;">
      <el-image @click="goHome()" style="width: 40px; height: 40px; margin: 0 14px;" src="imgs/logo.png" />
      <div class="right-container">
        <el-dropdown @command="handleLogOut">
          <span class="el-dropdown-link">
            演示账号
          </span>
          <template #dropdown>
            <el-dropdown-menu class="ep-dropdown">
              <el-dropdown-item >退出登录</el-dropdown-item>
              </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
  
    </div>
  </template>
  
  <script lang="ts" setup>

  import { useRouter } from "vue-router";

  
  const router = useRouter();

  const goHome = () => { router.push("/"); }
  
  const handleLogOut = () => {
    console.log('logout')
  }
  
  </script>
  
  <style scoped>
  .right-container {
    height: var(--ep-menu-item-height);
    margin-right: 20px;
    display: flex;
  }
  .right-items {
    margin: 0 14px
  }
  .ep-dropdown {
    align-items: center;
    border: none;
    box-shadow: none !important;
  }
  
  .el-dropdown-link {
    cursor: pointer;
    align-items: center;
    outline: none;
    box-shadow: none !important;
  }
  
  </style>
  