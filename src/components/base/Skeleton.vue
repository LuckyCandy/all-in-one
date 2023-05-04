<template>
    <el-config-provider namespace="ep">
        <Header />
        <div style="display: flex">
            <Side />
            <div class="m-content">
                <el-breadcrumb>
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="p-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </el-config-provider>
</template>

  
<style>
.m-content {
    width: 100%;
    padding: 24px 15px;
}

.p-content {
    margin-top: 20px;
}
</style>
  