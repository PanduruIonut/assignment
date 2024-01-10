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
    <div>
        <h1>Product Details</h1>
        <div class="row" v-if="product">
            {{ product  }}
        </div>
        <div v-else>
            Loading product details...
        </div>
    </div>
</template>
