<script setup lang="ts">
import { ref, reactive, defineProps, computed } from 'vue';

const props = defineProps(['product']);
const displayPrice = computed(() => {
    return Number(props.product.price).toLocaleString()
})
</script>

<template>
    <div>
        <div class="productCard-wrapper product">
            <img class="product__image" :src="props.product.imagePath" :alt="`商品画像_${props.product.id}`" />
            <div class="product__explanation">
                <p class="product__name">{{ props.product.name }}</p>
                <p class="product__price">{{ displayPrice + "円" }}</p>
            </div>
        </div>
    </div>
</template>

<style>
    .productCard-wrapper {
        height: auto;
        width: 200px;
        text-align: center;
        display: block;
    }
    .product__image {
        height: 200px;
    }
</style>
