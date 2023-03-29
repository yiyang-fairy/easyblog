<template>
  <div>0000
    <!-- <MarkdownEditor v-model="markdeonContent" :height="500"></MarkdownEditor> -->

    <HTMLEditor v-model="htmlContent"></HTMLEditor>
    <div class="bg-pink-300 h-30 w-50%">{{ htmlContent }}</div>
    
  </div>
</template>

<script setup>
import {ref} from 'vue'
let htmlContent = ref('')
let markdeonContent = ref('')

console.log(markdeonContent)
</script>

<style>

</style>