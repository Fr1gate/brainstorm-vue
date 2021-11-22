<template>
<div >
    <h2 class="header">Сделать</h2>
    <ul>
        <Task v-for="(task, index) in tasks" :key="task.name" :name="task.name" :completed="false" :index="index" />
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
            return categories.filter(category => category.categoryName === this.$route.params.slug)[0].tasksToDo
        }
    },
    components: {
        Task
    },
}
</script>

<style>

</style>