import { defineStore } from 'pinia'
import { fetchProductsList, searchProducts } from '../helpers/productApiUtils'
import { Product } from '../types/product-type'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
    let products = ref<Product[]>([])
    const titleSortOrder = ref<'asc' | 'desc' | null>(null);
    const brandSortOrder = ref<'asc' | 'desc' | null>(null);

    const getProducts = async () => {
        try {
            const response = await fetchProductsList()
            if(response && response.products){
                products.value = response.products
            }
        } catch (error) {
            console.log(error)
        }
    }


    const sortProducts = (key: string) => {
        switch (key) {
            case 'title':
                if (titleSortOrder.value === null) {
                    titleSortOrder.value = 'asc';
                }
                if (titleSortOrder.value === 'asc') {
                    products.value.sort((a, b) => a.title.localeCompare(b.title));
                    titleSortOrder.value = 'desc';
                } else {
                    products.value.sort((a, b) => b.title.localeCompare(a.title));
                    titleSortOrder.value = 'asc';
                }
                brandSortOrder.value = null;
                break;
            case 'brand':
                if (brandSortOrder.value === null) {
                    brandSortOrder.value = 'asc';
                }
                if (brandSortOrder.value === 'asc') {
                    products.value.sort((a, b) => a.brand.localeCompare(b.brand));
                    brandSortOrder.value = 'desc';
                } else {
                    products.value.sort((a, b) => b.brand.localeCompare(a.brand));
                    brandSortOrder.value = 'asc';
                }
                titleSortOrder.value = null;
                break;
            default:
                break;
        }
    };

    const search = async (searchTerm: string) => {
        try {
            const response = await searchProducts(searchTerm)
            if (response && response.products)
                products.value = response.products
        } catch (error) {
            console.log(error)
        }
    }

    return {
        products,
        getProducts,
        sortProducts,
        titleSortOrder,
        brandSortOrder,
        search
    }
})
