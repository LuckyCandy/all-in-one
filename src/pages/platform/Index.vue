<template>
    <div style="display: flex; margin: 30px 15px 20px;justify-content: space-between;">
        <el-input v-model="search" style="width: 200px;min-width: 120px; margin-right: 30px;" placeholder="账号标识过滤" />
        <div style="line-height: 30px; min-width: 120px">
            <el-button size="small" type="info" @click="openAddPlatformDialog">新 增</el-button>
            <el-button size="small" type="info" @click="refreshTableData" plain :loading="startLoading">刷 新</el-button>
        </div>
        
    </div>
    
    <el-table size="large" stripe v-loading="startLoading" :data="filterTableData" style="width: 100%" empty-text="没有数据">
        <el-table-column label="平台" width="160">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <img :src="getPlatform(scope.row.plat_code).value.logo" style="width: 30px; height: 30px" />
                    <span style="margin-left: 10px">{{ getPlatform(scope.row.plat_code).value.name }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="identifier" label="账号标识" min-width="150" />
        <el-table-column prop="create_time" align="center" label="创建时间" width="240" />
        <el-table-column prop="update_time" sortable align="center" label="最后一次更新时间" width="240" />
        <el-table-column align="center" label="操作" width="160">
            <template #default>
                <el-button link type="danger" size="small">删除</el-button>
                |
                <el-button :style="{ marginLeft: 0 }" link type="primary" size="small">刷新授权</el-button>
            </template>
        </el-table-column>
    </el-table>
    <AddPlatform ref="addPlatformRef" @submit="hanldeAddPlatform"></AddPlatform>
</template>
  
<script lang="ts" setup>
import { ref, onMounted, computed, ComputedRef } from 'vue'
import PlatformApi from '~/api/platform'
import { Platform, FindPlatformByCode } from '~/utils/common'
import AddPlatform from './components/AddPlatform.vue'

const search = ref('')
const addPlatformRef = ref<InstanceType<typeof AddPlatform>|null>(null) 
const startLoading = ref(false)
const platformApi = new PlatformApi()
const tableData: any = ref([])

// 加载 or 刷新
const refreshTableData = () => {
    startLoading.value = true
    platformApi.list()
        .then(res => tableData.value = res)
        .finally(() => setTimeout(() => {
            startLoading.value = false
        }, 1500))
}

// 根据账号过滤
const filterTableData = computed(() =>
  tableData.value.filter((e: any) => {
    return !search.value ||
        e.identifier.toLowerCase().includes(search.value.toLowerCase())
  })
)

// 新增平台
const openAddPlatformDialog = () => {
    console.log('1111111', addPlatformRef.value)
    addPlatformRef.value?.openDialog()
}

const getPlatform = (code: string): ComputedRef<Platform> => {
    return computed(() => {
        return FindPlatformByCode(code)
    })
}

const hanldeAddPlatform = (data: any) => {
    platformApi.create(data.identifier, data.platform)
        .then(() => addPlatformRef.value?.closeDialog())
        .catch(() => addPlatformRef.value?.addFail())
    refreshTableData()
}


onMounted(refreshTableData)

</script>

<style scoped></style>
  