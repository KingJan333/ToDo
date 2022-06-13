<template>
  <Header />
  <TodoForm />
  <TodoList />
  <p class="status incomplete" v-if="todoList.some((item) => !item.done)">
    есть незаконченные задачи
  </p>
  <p class="status tasks-completed" v-else>
    все задачи закончены
  </p>
</template>

<script>
  import Header from "@/components/Header.vue";
  import TodoForm from "@/components/TodoForm.vue";
  import TodoList from "@/components/TodoList.vue";
  import { useTodoListStore } from "@/store/useTodoListStore";
  import { storeToRefs } from "pinia";

  export default {
    setup() {
      const store = useTodoListStore();
      const { todoList } = storeToRefs(store);

      return {
        todoList
      };
    },
    components: {
      Header,
      TodoList,
      TodoForm,
    },
  };
</script>

<style lang="scss" scoped>
  .status {
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 60px;
    font-family: sans-serif;
  }
  .incomplete {
    color: red;
  }
  .tasks-completed {
    color: green;
  }
</style>
