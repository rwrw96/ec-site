<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import constants from "@/data/constants.json";

const filterText = ref('');

const displayProducts = computed(() => {
    return constants.products.filter(product => product.name.includes(filterText.value))
})
</script>

<template>
    <div>
        <div class="product-header">
            <h2>商品一覧</h2>
            <div class="search-input">
                <input type="text" v-model="filterText">
            </div>
        </div>
        <div class="product-wrapper">
            <ProductCard :product="product" v-for="product in displayProducts" :key="product.id" />
        </div>
    </div>
</template>

<style>
    h2 {
        text-align: center;
        position: relative;
    }
    .product-header {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
    .search-input {
        position: absolute;
        right: 20px;
    }
    .product-wrapper {
        padding: 0 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>
