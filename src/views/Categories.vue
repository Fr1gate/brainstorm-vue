<template>
    <div class="page">
        <SideMenu />
        <Tasks />
    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import Tasks from '@/components/Tasks.vue';

export default {
    // props: {
    //     slug: {
    //         type: String,
    //         required: true,
    //         default: 'Дом'
    //     }
    // },
    name: 'Categories',
    components: {
        SideMenu,
        Tasks
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