<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodo />
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";

export default {
  name: "App",
  components: {
    Todo,
    AddTodo,
    FilterTodo,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
