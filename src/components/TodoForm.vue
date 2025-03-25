<template>
    <div class="todo-form">
        <input 
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @keyup.enter="addTodo"
            class="todo-input"
            placeholder="新增代辦事項..."
            ref="todoInput"
        >
        <button @click="addTodo" class="todo-button">新增</button>
    </div>
</template>

<script>
    export default {
        name: 'TodoForm',
        props: {
            modelValue: {
                type: String,
                default: ''
            }
        },
        emits: ['update:modelValue', 'add-todo'],
        methods: {
            addTodo() {
                this.$emit('add-todo')
            }
        }
    }
</script>

<style scoped>
    .todo-form {
        margin-bottom: 20px;
        display: flex;
    }

    .todo-input {
        flex-grow: 5;
        border: 1px solid #ddd;
        border-radius: 4px 0 0 4px;
        padding: 8px;
    }

    .todo-button {
        border: none;
        border-radius: 0 4px 4px 0;
        padding: 5px 15px;
        background-color: green;
        color: white;
    }
</style>