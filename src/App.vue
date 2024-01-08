<script setup lang="ts">
import SideBar from './components/SideBar.vue';


</script>

<template>
    <div class="row">
      <div class="col-2">
        <SideBar/>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
