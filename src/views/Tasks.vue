<template>
    <div class="container">
        <TodoList  
        />
        <DoneList
        />
        <AddTask 
        />
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import DoneList from '@/components/DoneList.vue';
import AddTask from '@/components/AddTask.vue';

export default {
    components: {
        TodoList,
        DoneList,
        AddTask,
    }
}
</script>

<style>
.container {
    padding: 9.5vh 66px 30px 50px;
    flex-grow: 1;
    text-align: center;
}

@media screen and (max-width: 767px) {
    .container {
        padding: 15px;
        flex-grow: 1;
        text-align: center;
    }
}
</style>