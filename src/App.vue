<template>
  <transition name="moveInUp">
    <router-view />
  </transition>
</template>

<script>
  import StartPage from "@/components/StartPage.vue";
  import TodoApp from "@/components/TodoApp.vue";

  export default {
    name: "App",
    components: {
      StartPage,
      TodoApp,
    },
  };
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
