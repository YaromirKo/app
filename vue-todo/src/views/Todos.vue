<template>
    <div>
        <h2>todo</h2>
        <router-link to="/">Home</router-link>
        <add-todo @add-todo="addTodo"></add-todo>
        <select v-model="filter">
            <option value="all">all</option>
            <option value="completed">completed</option>
            <option value="not-completed">Not completed</option>
        </select>
        <hr>
        <loader v-if="loading"></loader>
        <todo-list
                v-else-if="todos.length"
                v-bind:todos="filteredTodos"
                @remove-todo="removeTodo"/>
        <p v-else>No todos!</p>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
export default {
    name: 'App',
    components: {
        TodoList,
        AddTodo,
        Loader
    },
    data() {
        return {
            todos: [
                // {id: 1, title: 'buy bread', completed: false},
                // {id: 2, title: 'buy some', completed: false},
                // {id: 3, title: 'buy candy', completed: false},
            ],
            loading: false,
            filter: 'all'
        }
    },
    mounted() {
        this.loading = true
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => response.json())
            .then(json => {
                setTimeout(()=>{
                    this.todos = json
                    this.loading = false
                }, 300)
            })
    },
    // watch: {
    //     filter(value) {
    //
    //     }
    // },
    /* eslint-disable */
    computed: {
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos
            }
            if (this.filter === 'completed') {
                return this.todos.filter(t => t.completed)
            }
            if (this.filter === 'not-completed') {
                return this.todos.filter(t => !t.completed)
            }
            // return this.todos
        }
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },
        addTodo(todo) {
            this.todos.push(todo)
        }
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
