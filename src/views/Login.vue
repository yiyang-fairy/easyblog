<template>
  <div>
    <div class="login">login</div>
    

    <div class="flex flex-x-y">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="form"
      >
        <el-form-item label="Password" prop="pass">
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-button type="primary" @click="toIndex()">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter();
const ruleForm = reactive({
  pass: "",
  checkPass: "",
});

const rules = reactive({
  pass: [{ required: true, message: "请输入" }],
  checkPass: [{ required: true, message: "请输入" }],
});

const toIndex = () => {
    router.push("/index")
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
}
</style>