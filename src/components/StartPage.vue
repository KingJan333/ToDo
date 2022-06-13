<template>
    <div class="start-page">
        <h1 class="start-title">Перейти в списку задач</h1>
        <router-link class="start-btn" :to="{name: 'todo'}">Список</router-link>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    .start-page {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #000;
        height: 100vh;
    }
    .start-title {
        color: #fff;
        font-size: 41px;
    }
    .start-btn {
        color: #fff;
        text-decoration: none;
        border: 1px solid #fff;
        padding: 10px 20px;
        transition: ease-in-out .4s;
    }
    .start-btn:hover {
        color: #000;
        background-color: #fff;

    }
</style>