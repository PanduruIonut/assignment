<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import MobileMenu from './components/MobileMenu.vue';
import NotificationLayout from './components/NotificationLayout.vue';


</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xs-12 col-md-3 col-lg-2">
        <SideBar class="d-none d-md-block" />
        <MobileMenu class="d-block d-md-none" />
      </div>
      <div class="col-12 col-xs-12 col-md-9 col-lg-10">
        <NotificationLayout />
        <router-view></router-view>
      </div>
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
