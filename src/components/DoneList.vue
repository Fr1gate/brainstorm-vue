<template>
<div >
    <h2 class="header">Сделано</h2>
    <ul>
        <Task v-for="(task, index) in tasks" :key="task.name" v-bind:name="task.name" v-bind:completed="true" :index="index" />
    </ul>
</div>
</template>

<script>
import Task from '@/components/Task.vue';

export default {
    data() {
        return {

        }
    },
    computed: {
        tasks() {
            const categories = this.$store.state.categories;
            return categories.filter(category => category.categoryName === this.$route.params.slug)[0].tasksDone
        }
    },
    components: {
        Task
    },
}
</script>

<style>

</style>