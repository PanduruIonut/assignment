<script lang="ts" setup>
import { ref } from 'vue';
import { useProductStore } from '../pinia/useProductStore';

const title = ref('');
const brand = ref('');
const productStore = useProductStore();

const debounce = <F extends (...args: any[]) => void>(func: F, waitFor: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<F>): void => {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), waitFor);
    };
};

const debouncedSearch = debounce(async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const searchQuery = target.value;
    await productStore.search(searchQuery);
}, 500);
</script>

<template>
    <div class="search-container">
        <h5 class="search-container__title">Products Information</h5>
        <div class="search-container__inputs">
            <div class="input-field--title me-4">
                <label class="input-field__label" for="title">Title</label>
                <input type="text" id="title" placeholder="Enter Title" v-model="title" @input="debouncedSearch"
                    class="input-field__input" />
            </div>
            <div class="input-field--brand">
                <label class="input-field__label" for="brand">Brand</label>
                <input type="text" id="brand" placeholder="Enter Brand" v-model="brand" @input="debouncedSearch"
                    class="input-field__input" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.search-container__inputs {
    display: flex;
    flex-wrap: wrap;
}

.search-container__title {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: #333;
}

.input-field {
    margin-right: 2rem;
    margin-bottom: 1rem;
}

.input-field__label {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
    display: block;
}

.input-field__input {
    width: 100%;
    max-width: 200px;
    padding: 8px;
    margin-top: 5px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
