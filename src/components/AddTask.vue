<template>
    <div class='add-task'>
        <form v-on:submit="handleSubmit">
            <input v-model="text" class="add-task__input" type="text" placeholder="Введите текст задачи" />
            <input class="add-task__submit" type="submit" value="ДОБАВИТЬ"/>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            categoryName:  this.$route.params.slug
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();

            const payload = {
                task: {
                    name: this.text
                }, 
                categoryName: this.categoryName
            }
            this.$store.commit('addTask', payload)

            this.text = '';
        }
    }
}
</script>

<style>
    .add-task {
        display: flex;
        margin-top: 20px;
    }

    .add-task__input {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 3px solid var(--border-color);
        border-radius: 7px;
        padding-left: 12px;
        padding-right: 125px;
    }

    .add-task {
        display: block;
        position: relative;
        height: 45px;
    }

    .add-task__submit {
        position: absolute;
        top: 5px;
        right: 5px;
        height: 35px;
        border: none;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        padding: 8px 19px;
        z-index: 2;
        background: var(--background-select-color);
        
        color: var(--font-color);
        font-size: 16px;
        font-weight: 400;
        text-transform: uppercase;
        
        cursor: pointer;
    }


    .add-task__input {
        font-size: 16px;
    }
</style>