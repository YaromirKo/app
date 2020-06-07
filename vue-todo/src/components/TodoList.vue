<template>
    <div>
        <ul>
            <todo-item
                v-for="(todo, id) of todos" :key="id"
                v-bind:todo="todo"
                v-bind:id="id"
                v-on:remove-todo="removeTodo"/>
        </ul>
    </div>
</template>

<script>
    import TodoItem from "@/components/TodoItem";
    export default {
        name: "TodoList",
        props: ['todos'],
        components: {
            TodoItem,
        },
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>