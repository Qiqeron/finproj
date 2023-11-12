<template>
    <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/chat">Чат</router-link>
        <router-link to="/test">Загрузка данных</router-link>
        <router-link to="/todo">Список дел</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style scoped>
    nav{
        width: 500px;
        display: flex;
    }
    a.router-link-active:after {
        background-color: white;
        width: 100%;
        height: 3px;
    }
    a{
        margin: 0 15px;
        color: white;
    }
    a:hover{
        color: rgba(255, 255, 255, 0.6)
    }
    a:after {
        display: block; 
        content: "";
        height: 2px; 
        width: 0%; 
        background-color: rgba(255, 255, 255, 0.601); 
        transition: width 0.2s; 
    }
    a:hover:after, a:focus:after {
        width: 100%;
    }
</style>