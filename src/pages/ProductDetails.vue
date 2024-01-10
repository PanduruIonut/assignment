<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProductById } from '../helpers/productApiUtils';
import { Product } from '../types/product-type';

const { id } = defineProps<{ id: number }>();

const product = ref<Product>();

onMounted(async () => {
    product.value = await fetchProductById(id);
});

</script>

<template>
    <div class="product-details__wrapper">
        <h1 class="mb-5">Product Details</h1>
        <div class="product-details__wrapper-loader-container">
            <span :class="{ loader: !product }" style="align-self: center;"></span>
        </div>
        <div class="row">
            <div class="col-12 col-sm-12 col-lg-6 col-md-12">
                <img class="w-100" :src="product?.thumbnail" :alt="product?.title" />
            </div>
            <div class="col-12 col-sm-12 col-lg-6 col-md-12" style="padding-start: 20px;">
                <div v-for="(value, key) in product" :key="key">
                    <b>{{ key }}</b>: {{ value }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-details__wrapper {
    min-height: 100vh;
    background-color: #f8f8f8;
    padding: 40px;
}

.product-details__wrapper-loader-container{
    display: flex;
    justify-content: center;
}
.loader {
    margin-top: 20px;
}
</style>
