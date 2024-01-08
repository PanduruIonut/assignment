<script lang="ts">
import ProductsTable from "../components/ProductsTable.vue";
import ProductsSearch from "../components/ProductsSearch.vue";
</script>
<template>
    <div class="dashboard">
        <ProductsSearch />
        <ProductsTable />
    </div>
</template>

<style>
.dashboard {
    background-color: #f8f8f8 !important;
    height: 100vh;
    padding: 40px;
}
</style>
