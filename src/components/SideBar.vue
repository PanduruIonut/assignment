<script setup lang="ts">
import { menu } from '../data/menu.ts';

</script>
<template>
  <div class="bg-light border-right d-flex flex-column bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading pt-4 ps-5 pb-4">Sales.</div>
      <div class="list-group list-group-flush">
        <router-link 
          v-for="item in menu" 
          :key="item.id" 
          :to="item.link" 
          class="list-group-item list-group-item-action bg-white p-3 ps-5" 
          :class="{ active: $route.path === item.link }">
          <font-awesome-icon class="pe-4" :icon="item.icon" />
          {{ item.title }}
          
      </router-link>
    </div>
  </div>
</template>

<style scoped>

#sidebar-wrapper {
  height: 100vh;
}

.sidebar-heading {
  font-size: 1.6rem;
  color: #2859cf;
  
}

.list-group-item {
  border: 0px;
  color:#b4b4b4;
  font-size: 14px;
}

.list-group-item:last-child{
  position: absolute;
  max-width: fit-content;
  bottom: 15px;
}

.active{
  color: #1363f8;

}

.active::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  margin-left: 1px;
  height: 30px;
  background-color: #1363f8;
  align-items: center;
  margin-top: 12px;
}
</style>
