<script setup lang="ts">
import { ref, reactive, defineProps, computed } from 'vue';

const props = defineProps(['product']);
const displayPrice = computed(() => {
    return Number(props.product.price).toLocaleString()
})
const isAddedCart = ref(JSON.parse(localStorage.getItem('productId') ?? "[]").includes(props.product.id));

/**
 * ローカルストレージにカートに入れたい商品のIDを格納する
 * @param productId 
 */
function addProductInCart(productId: string) {
    let productIdJson = localStorage.getItem('productId');
    let productIdsArray = productIdJson ? JSON.parse(productIdJson) : [];

    if (!isAddedCart.value) {
        productIdsArray.push(productId);   
        localStorage.setItem('productId', JSON.stringify(productIdsArray));
    }

    isAddedCart.value = true;
}
</script>

<template>
    <div>
        <div class="productCard-wrapper product">
            <img class="product__image" :src="props.product.imagePath" :alt="`商品画像_${props.product.id}`" />
            <div class="product__explanation">
                <p class="product__name">{{ props.product.name }}</p>
                <p class="product__price">{{ displayPrice + "円" }}</p>
                <button class="product__cart" @click="addProductInCart(props.product.id)">{{ isAddedCart ? '済み' : 'カートに入れる' }}</button>
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
    .product__cart {
    }
</style>
