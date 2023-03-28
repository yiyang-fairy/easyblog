<template>
  <div>
    <div class="mt-20">
      <el-button class="bg-green-500" type="success" @click="create()">新建</el-button>
    </div>
    <div class="flex">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "List item " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "List item " + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
</style>