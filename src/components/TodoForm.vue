<template>
  <form @submit.prevent="addItemAndClear(todo)" class="form-todo">
    <input v-model="todo" type="text" class="input-todo" placeholder="Задача" />
    <button class="btn-todo">Добавить</button>
  </form>
</template>

<script>
  import { ref } from "vue";
  import { useTodoListStore } from "@/store/useTodoListStore";
  export default {
    setup() {
      const todo = ref("");
      const store = useTodoListStore();

      function addItemAndClear(item) {
        if (item.length === 0) {
          return;
        }
        store.addTodo(item);
        todo.value = "";
      }

      return {
        todo,
        addItemAndClear,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .form-todo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  .input-todo {
    max-width: 360px;
    width: 100%;
    padding: 10px 4px;
    background-color: #efefef;
    outline: none;
    border: 1px solid #efefef;
  }
  .btn-todo {
    max-width: 370px;
    width: 100%;
    height: 30px;
    background-color: #efefef;
    outline: none;
    border: 1px solid #efefef;
    cursor: pointer;
    margin-top: 15px;
  }
</style>
