<script lang="ts" script>
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
    padding: 40px;
    min-height: 100%;
}
</style>
