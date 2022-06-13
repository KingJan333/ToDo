import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
  }),
  getters: {
    getTodos: (state) => state.todoList,
  },
  actions: {
    addTodo(item) {
      this.todoList.push({ text: item, id: this.todoList.length + 1, done: false });
      localStorage.setItem("todoItems", JSON.stringify(this.todoList));
    },

    deleteTodo(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },

    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.done = !todo.done;
      }
    },

    fetchData() {
      if (localStorage.length) {
        this.todoList = JSON.parse(localStorage.getItem("todoItem"));
      } else {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
          .then((response) => response.json())
          .then((json) => {
            this.todoList = json.map((item, index) => {
              return {id: index + 1, text: item.title, done: item.completed}
            });
          });
      }
    },
  },
});
