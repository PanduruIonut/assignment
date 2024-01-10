<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useProductStore } from '../pinia/useProductStore';

const productStore = useProductStore();
const products = computed(() => {
  return productStore.products;
});

onMounted(async () => {
  await productStore.getProducts();
});

function sort(key: string, sortable: boolean = false) {
  if (!sortable) return;
  productStore.sortProducts(key);
}

function getArrowDirection(key: string): string {

  const titleSortOrder = productStore.titleSortOrder;
  const brandSortOrder = productStore.brandSortOrder;

  if ((key === 'title' && titleSortOrder === 'asc') || (key === 'brand' && brandSortOrder === 'asc')) {
    return '↓';
  } else if ((key === 'title' && titleSortOrder === 'desc') || (key === 'brand' && brandSortOrder === 'desc')) {
    return '↑';
  }

  return '⇅';
}

type TableHeader = {
  title: string;
  key: string;
  sortable?: boolean;
  sortOrder?: 'asc' | 'desc' | null;
}

const tableHeader: Array<TableHeader> = [
  { title: 'Title', key: 'title', sortable: true, sortOrder: productStore.titleSortOrder },
  { title: 'Category', key: 'category' },
  { title: 'Brand', key: 'brand', sortable: true, sortOrder: productStore.brandSortOrder },
  { title: 'Price', key: 'price' },
  { title: 'Stock', key: 'stock' },
  { title: 'Rating', key: 'rating' },
];

</script>

<template>
  <div class="table-wrapper">
    <span :class="{ loader: products.length == 0 }"></span>
    <table class="data-table" v-if="products.length > 0">
      <thead>
        <tr>
          <th><input type="checkbox"/></th>
          <th v-for="header in tableHeader" @click="sort(header.key, header.sortable)" :key="header.key">
            {{ header.title }}
            <span v-if="header.sortable">
              {{ getArrowDirection(header.key) }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <router-link class="data-table__product" :to="{ name: 'ProductDetail', params: { id: product.id } }">
              {{ product.title }}
            </router-link>
          </td>
          <td>{{ product.category }}</td>
          <td>{{ product.brand }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.rating }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.table-wrapper {
  overflow-x: scroll;
  text-align: center;
}

.data-table {
  background-color: #fff;
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  line-height: 36px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
  font-size: smaller;
}

.data-table th:first-child,
.data-table td:first-child {
  border-left: none;
}

.data-table th:last-child,
.data-table td:last-child {
  border-right: none;
}

.data-table tr:first-child th,
.data-table tr:first-child td {
  border-top: none;
}


.arrow-up {
  content: '↑';
}

.arrow-down {
  content: '↓';
}

.data-table__product {
  text-decoration: none;
}
.loader{
  margin-top:100px;
}
</style>