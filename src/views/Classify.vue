<template>
  <div>
    <div>
      <el-button type="success"
                 plain
                 @click="create() ">新增分类</el-button>
    </div>

    <div class="mt-20">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="titlePage" label="封面" width="180">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="intro" label="简介"> </el-table-column>
        <el-table-column prop="numbers" label="博客数"> </el-table-column>
        <el-table-column prop="handle" label="操作">
          <!-- <template slot-scope="scope">
            <div>111</div>
            <el-button size="mini" @click="handleEdit(scope)">编辑</el-button>
            <div>{{ scope.row }}</div>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template> -->
        </el-table-column>
      </el-table>
    </div>
    <div class="mt-20 flex-x-y">
      <el-pagination background layout="prev, pager, next" :total="3">
      </el-pagination>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
function create() {
  console.log("新建一个文章");
}
function handleEdit(index, row) {
  console.log(index, row);
}
function handleDelete(index, row) {
  console.log(index, row);
}

const tableData = [
  {
    titlePage: "11",
    name: "hihi",
    intro: "000",
    numbers: "19",
    handle: "ppp",
  },
  {
    titlePage: "11",
    name: "hihi",
    intro: "000",
    numbers: "19",
    handle: "ppp",
  },
  {
    titlePage: "11",
    name: "hihi",
    intro: "000",
    numbers: "19",
    handle: "ppp",
  },
];
</script>
<style>
</style>