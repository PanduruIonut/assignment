<script setup lang="ts">
import { ref } from 'vue';
import { menu } from '../data/menu.ts';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const toggle = ref(false);
const toggleMenu = () => {
    toggle.value = !toggle.value;
};
</script>
<template>
    <div class="bg-light border-right d-flex flex-column bg-white position-md-fixed" id="sidebar-wrapper">
        <div class="d-flex justify-content-between align-items-center">
            <div class="sidebar-heading pt-4 ps-5 pb-4">Sales.</div>
            <div v-if="toggle" @click="toggleMenu()">
                <font-awesome-icon icon="fa-x" />
            </div>
            <div v-else @click="toggleMenu()">
                <font-awesome-icon icon="fa-bars" />
            </div>
        </div>
        <transition name="fade">
            <div class="list-group list-group-flush" v-if="toggle">
                <router-link v-for="item in menu" :key="item.id" :to="item.link"
                    class="list-group-item list-group-item-action bg-white p-3 ps-5"
                    :class="{ active: $route.path === item.link }">
                    <font-awesome-icon class="pe-4" :icon="item.icon" />
                    {{ item.title }}
                </router-link>
            </div>
        </transition>
    </div>
</template>

<style scoped>
#sidebar-wrapper {
    min-height: 100%;
}

@media screen and (min-width:768px) {
    #sidebar-wrapper {
        position: fixed;
    }
}



.sidebar-heading {
    font-size: 1.6rem;
    color: #2859cf;

}

.list-group-item {
    border: 0px;
    color: #b4b4b4;
    font-size: 14px;
}

.list-group-item:last-child {
    position: absolute;
    max-width: fit-content;
    bottom: 15px;
}

.active {
    color: #1363f8;

}

.active::before {
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

@media screen and (max-width:768px) {
    .list-group-item:last-child {
        position: relative;
        max-width: fit-content;
        bottom: 0;
    }
}
</style>
