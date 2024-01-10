<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProductById } from '../helpers/productApiUtils';

const { id } = defineProps<{ id: number }>();

const product = ref();

onMounted(async () => {
    product.value = await fetchProductById(id);
});

</script>

<template>
    <div class="product-details__wrapper">
        <h1 class="mb-5">Product Details</h1>
        <span :class="{ loader: !product }"></span>
        {{ product }}
    </div>
</template>

<style scoped>
.product-details__wrapper {
    min-height: 100vh;
    background-color: #f8f8f8;
    padding: 40px;
    text-align: center;
}

.loader {
    margin-top: 20px;
}
</style>
