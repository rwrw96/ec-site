<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    ヘッダー
  </header>

  <RouterView />
</template>

<style scoped>
header {
  height: 200px;
  background-color: red;
  margin-bottom: 100px;
}
</style>
