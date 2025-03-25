import { ref } from 'vue'

export function useTodos() {
    const newTodo = ref('')
    const todos = ref([])
    const nextTodoId = ref(1)

    function addTodo() {
        if (newTodo.value.trim()) {
            todos.value.push({
                id: nextTodoId.value++,
                text: newTodo.value.trim()
            })
            newTodo.value = ''
        }
    }

    return {
        newTodo,
        todos,
        addTodo
    }
}