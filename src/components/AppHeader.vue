<template>
    <div class="app-header">
        <h2>welcome, {{ user.name }} ({{ user.level }})</h2>
        <button @click="$emit('logout')" class="logout-button">登出</button>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        emits: ['logout']
    }
</script>

<style scoped>
    .app-header {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        margin:  0;
    }

    .logout-button {
        border: none;
        border-radius: 4px;
        padding: 5px 10px;
        background-color: #ff4949;
        color: white;
        cursor: pointer;
    }
</style>