<template>
  <div>0000
    <MarkdownEditor v-model="markdeonContent" :height="500"></MarkdownEditor>
    <div class="bg-pink-300 h-30 w-50%">{{ markdeonContent }}</div>
    
  </div>
</template>

<script setup>
import {ref} from 'vue'

let markdeonContent = ref('')

console.log(markdeonContent)
</script>

<style>

</style>