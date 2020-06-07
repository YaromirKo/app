<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{id+1}}</strong>
            {{todo.title | uppercase}}
            <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
        </span>
    </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true,
            },
            id: Number
        },
        filters: {
            uppercase(value) {
                console.log(value)
                return value.toUpperCase()
            }
        }
    };
</script>
<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .rm {
        background: gray;
        border-radius: 50%;
        font-weight: bold;
    }
    input  {
        margin-right: 1rem;
    }
    .done {
        text-decoration: line-through;
    }


</style>
