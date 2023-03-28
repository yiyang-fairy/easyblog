<template>
  <div v-if="show" class="w-100% h-100% fixed bg-black bg-opacity-40 z-10 flex justify-center items-center text-black">
    <div class="bg-white rounded-lg shadow-xl text-black opacity-100"
         style="width: 600px;">
      <div class="border-b-dark-500 border-b-2 pl-40 pr-40 h-60 flex items-center">
        新增文章
      </div>
      <div class="flex justify-center items-center w-90% mb-20 mt-20">
        <el-form :model="config" class="w-100% ml-50">
          <el-form-item label="名称">
            <el-input v-model="config.name" />
          </el-form-item>
          <el-form-item label="封面">
            <el-input v-model="config.img" />
          </el-form-item>
          <el-form-item label="简介">
            <el-input v-model="config.name" type="textarea"/>
          </el-form-item>
          <div>
        <el-button class="bg-green-500 flex justify-end"
                 type="success">发布</el-button>
      </div>
        </el-form>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
// import { ElMessage, ElMessageBox } from 'element-plus'
// import type { Action } from 'element-plus'

const props = defineProps(['config'])
const essay = reactive({
  title: '新增文章',
  name: '',
  img: '',
  intro: ''
})
let show = ref(false)
console.log(props.config)
const info = Object.assign(essay, props.config)
console.log(info)
function open() {
show = true


}



</script>

<style>
</style>