<template>
  <div v-for="todo in todoList" :key="todo.id" class="list-wrapper">
    <span>{{ todo.id }}</span>
    <span class="list-text" :class="{ completed: todo.done }">{{
      todo.text
    }}</span>
    <div>
      <span class="list-btn" @click.stop="toggleCompleted(todo.id)"
        >&#10004;</span
      >
      <span class="list-btn" @click="deleteTodo(todo.id)">&#10060;</span>
    </div>
  </div>
</template>

<script>
  import { useTodoListStore } from "@/store/useTodoListStore";
  import { storeToRefs } from "pinia";

  export default {
    setup() {
      const store = useTodoListStore();
      const { todoList } = storeToRefs(store);
      const { toggleCompleted, deleteTodo, getTodos, fetchData } = store;

      if(!getTodos.length) {
        fetchData()
      }

      return {
        todoList,
        toggleCompleted,
        deleteTodo,
      };
    },
  };
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
  .list-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    max-width: 400px;
    width: 100%;
    border: 1px solid #efefef;
    padding: 15px;
  }
  .list-text {
    margin-right: 10px;
  }
  .list-btn {
    cursor: pointer;
    margin-right: 10px;
  }
</style>
