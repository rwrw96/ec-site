<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">
      ヘッダー
    </div>
    <div class="link-wrapper">
      <router-link 
        to="/cart" 
        class="router-link"
        active-class="link--active"
      >カートを見る
      </router-link>
      <router-link 
        to="/productList" 
        class="router-link"
        active-class="link--active">商品一覧
      </router-link>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  height: 200px;
  background-color: red;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  .logo {
    background-color: rgb(0, 255, 4);
    margin: 0 auto;
    font-size: 40px;
  }
  .link-wrapper {
    display: flex;
    flex-direction: column;
    .router-link {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      color: #000;
      background-color: #fff;
    }
    .link--active {
      font-weight: bolder;
      background-color: #2d2d2d;
      color: #fff;
      height: 70px;
    }
  }
}
</style>
