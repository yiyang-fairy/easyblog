<template>
  <div>
    <div class="flex flex-x-y mt-20">     
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="form"
      >
      <div class="login">login</div>
        <el-form-item label="账号" prop="id">
          <el-input
            v-model="ruleForm.id"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-button type="primary" plain @click="toIndex()">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const router = useRouter();
const ruleForm = reactive({
  id: "",
  password: "",
});

const rules = reactive({
  id: [{ required: true, message: "请输入" }],
  password: [{ required: true, message: "请输入" }],
});
let show = ref(false)
const toIndex = () => {
  if(!ruleForm.id || !ruleForm.password) {
    ElMessage.error('账号或密码不正确')
    return
  }
    router.push("/blog")
};
</script>

<style>
.form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
}
.login {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
</style>