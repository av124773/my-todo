<!-- src/App.vue -->
<template>
  <h1>Vue.js Todo list</h1>

  <div class="todo-container">
    <AppHeader
      :user="user"
      @logout="logout"
    />

    <TodoForm 
      v-model="newTodo"
      @add-todo="addTodo"
      ref="todoFormRef"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import TodoForm from './components/TodoForm.vue';
import { useTodos } from './composables/useTodos';

export default {
  name: 'App',
  components: {
    AppHeader,
    TodoForm
  },
  setup() {
    const todoFormRef = ref(null)

    const user = ref({
      name: '測試用戶',
      level: '一般會員'
    })

    const {
      newTodo,
      todos,
      addTodo
    } = useTodos()

    function logout() {
      alert('登出(展示用)')
    }

    return {
      user,
      newTodo,
      todos,
      logout,
      addTodo
    }
  }
};
</script>

<style scoped>
/* 你的樣式 */
</style>