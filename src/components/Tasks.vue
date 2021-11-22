<template>
    <div class="container">
        <TodoList 
            tasks={this.props.category.tasksToDo}
            deleteTask={this.props.deleteTask}
            checkTask={this.props.checkTask}
            editTask={this.props.editTask}    
        />
        <DoneList 
            tasks={this.props.category.tasksDone}
            uncheckTask={this.props.uncheckTask}
        />
        <AddTask 
            addTask={this.props.addTask} 
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