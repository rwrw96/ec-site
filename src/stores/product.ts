import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [
            {
                name: '商品名1',
                description: '',
                price: '12000',
                imagePath: '',
            },
            {
                name: '商品名2',
                description: '',
                price: '13000',
                imagePath: '',
            },
            {
                name: '商品名3',
                description: '',
                price: '14000',
                imagePath: '',
            },
            {
                name: '商品名4',
                description: '',
                price: '15000',
                imagePath: '',
            },
            {
                name: '商品名5',
                description: '',
                price: '16000',
                imagePath: '',
            },
            {
                name: '商品名6',
                description: '',
                price: '17000',
                imagePath: '',
            },
            {
                name: '商品名7',
                description: '',
                price: '18000',
                imagePath: '',
            },
            {
                name: '商品名8',
                description: '',
                price: '19000',
                imagePath: '',
            },
            {
                name: '商品名9',
                description: '',
                price: '110000',
                imagePath: '',
            },
            {
                name: '商品名10',
                description: '',
                price: '121100',
                imagePath: '',
            },
        ]
    })
})
