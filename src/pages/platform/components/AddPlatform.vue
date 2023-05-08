<template>
    <el-dialog class="my-dialog" align-center v-model="dialogVisible" destroy-on-close title="新增发布平台" :show-close="false"
        :close-on-click-modal="false" :close-on-press-escape="false">
        <el-form ref="formRef" :model="form" :rules="rules" label-width="90px">
            <el-form-item label="账号标识: " prop="identifier">
                <el-input v-model.trim="form.identifier" placeholder="账号标识" clearable></el-input>
            </el-form-item>
            <el-form-item label="选择平台: " prop="platform">
                <el-radio-group v-model="form.platform">
                    <el-radio label="dou_yin">抖音</el-radio>
                    <el-radio label="xi_gua">西瓜视频</el-radio>
                    <el-radio label="kuai_shou">快手</el-radio>
                    <el-radio label="xiao_hong_shu">小红书</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="submitForm" :loading="isLoading">
                    确 认
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script lang="ts" setup>
import { ref, reactive, defineEmits } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'

const dialogVisible = ref(false);
const formRef = ref<FormInstance>();
const form = reactive({
    identifier: null,
    platform: null,
});

const rules = reactive<FormRules>({
    identifier: [
        { required: true, message: '请输入账号标识，比如:运营号-06', trigger: 'blur' }
    ],
    platform: [
        { required: true, message: '请选择增加平台', trigger: 'blur' }
    ]
})

const isLoading = ref(false)
const openDialog = () => dialogVisible.value = true
const closeDialog = () => dialogVisible.value = false
const addFail = () => isLoading.value = false
const emitFunc = defineEmits(['submit']);
const submitForm = async () => {
    isLoading.value = true
    await formRef.value.validate((valid: any, fields: any) => {
        if (valid) {
            console.log('submit!', valid, form)
            emitFunc('submit', form)
        } else {
            console.log('error submit!', fields)
        }
    })
};

defineExpose({
    openDialog, closeDialog, addFail
});
</script>

<style lang="scss">
.my-dialog {
    min-width: 370px;
    max-width: 500px;

    .ep-dialog__header {
        box-shadow: 0px 0px 5px 0px rgba(136, 152, 157, 0.3);
        border-radius: 6px 6px 0px 0px;
        padding: 20px 20px 18px 25px;
        margin-right: 0;

        .ep-dialog__title {
            color: #212121;
            font-weight: 16px;
        }
    }
    .ep-form-item__label {
        justify-content: left;
    }
    .ep-form-item {
        margin-bottom: 30px;
    }
}
</style>