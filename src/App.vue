<!-- src/App.vue -->
<template>
  <h1>Vue.js Todo list</h1>

  <div class="todo-container">
    <AppHeader
      :user="user"
      @logout="logout"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  setup() {
    const user = ref({
      name: '測試用戶',
      level: '一般會員'
    })

    function logout() {
      alert('登出(展示用)')
    }

    return {
      user,
      logout
    }
  }
};
</script>

<style scoped>
/* 你的樣式 */
</style>