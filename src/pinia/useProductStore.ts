import { defineStore } from 'pinia'
import { fetchProductsList } from '../helpers/productApiUtils'
import { Product } from '../types/product-type'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
    let products = ref<Product[]>([])

    const setProducts = async () => {
        try {
            const response = (await fetchProductsList()).products
            products.value = response
        } catch (error) {
            console.log(error)
        }
    }

    return {
        products,
        setProducts
    }
})
