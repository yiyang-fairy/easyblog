<template>
  <div class="bg-grey">
    <div class="common-layout">
      <el-container>
        <el-header style="background-color: #fff;">Header</el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo bg-grey border-null"
            >
              <el-sub-menu
                v-for="(item, index) in list"
                :key="index"
                :index="index"
              >
                <template #title>
                  <i class="el-icon-location"></i>
                  <span class="color-333">{{ item.name }}</span>
                </template>
                <div v-for="(item1, index ) in item.group" :key="index">
                  <el-menu-item @click="open(item1)" class="bg-grey color-333 menu-item">{{item1.name}}</el-menu-item>
                </div>
              </el-sub-menu>
            </el-menu>
          </el-aside>
          <el-main style="background-color: #fff;margin: 20px;border-radius: 10px;">
            <div style="height: 600px;"><RouterView></RouterView></div>
            
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter();
function open(item) {
  console.log(item, 'item')
  router.push(item.url)
}
const list = [
  {
    name: "博客",
    group:[
      {
        name:"博客管理",
        url:'/blog'
      },
      {
        name:"分类管理",
        url:'/classify'
      }
    ]
  },
  {
    name: "专题",
    group: [
      {
        name: "专题管理",
        url:'/specialTopic'
      }
    ]
  },
  {
    name: "设置",
    group: [
      {
        name:'个人信息设置',
        url:'/setting'
        
      },
      {
        name:'博客成员',
        url:'/setting'
      },
      {
        name:"系统设置",
        url:'/setting'
      }
    ]
  },
  {
    name: "回收站",
    group: [
      {
        name:'回收站'
      }
    ]
  }
]
</script>

<style scoped>
.bg-grey {
  background-color: #F5F6F7;
}
.color-333 {
  color: #333;
}
.border-null {
  border: none;
}
:deep(.el-sub-menu__title:hover){
  background-color: #fff;
}
</style>