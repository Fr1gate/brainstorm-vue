<template>
    <div class="page">
        <SideMenu />
        <router-view :key="$route.path" />
    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';

export default {
    name: 'Categories',
    components: {
        SideMenu,
    }
}
</script>

<style>
.page {
  display: flex;
}

.header {
  margin-top: 36px;
  margin-bottom: 10px;
  
  font-size: 20px;
  font-weight: 200;
  text-transform: uppercase;
}
</style>