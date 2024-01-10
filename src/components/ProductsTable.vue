<template>
  <table class="data-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
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
</template>
<style>
.data-table {
  width: 80%;
  margin-top: 20px;
}

.data-table th,
.data-table td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}
</style>