<script setup>
import { ref } from 'vue';
const todoRef = ref('');
const todoListRef = ref([]);
const ls = localStorage.todoList;
todoListRef.value = ls ? JSON.parse(ls) : [];
const addTodo = () => {
  const id = new Date().getTime();
  todoListRef.value.push({ id: id, task: todoRef.value });
  localStorage.todoList = JSON.stringify(todoListRef.value);
  todoRef.value = '';
};
</script>

<template>
  <div class="box_input">
    <input
      type="text"
      class="todo_input"
      v-model="todoRef"
      placeholder="NEW TODO"
    />
    <button class="btn" @click="addTodo">ADD</button>
  </div>
  <div class="box_list">
    <div class="todo_list" v-for="todo in todoListRef" :key="todo.id">
      <div class="todo">
        <input type="checkbox" class="check" />
        <label>{{ todo.task }}</label>
      </div>
      <div class="btns">
        <div class="btn green">CHG</div>
        <div class="btn pink">DEL</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box_input {
  margin-top: 20px;
}

.todo_input {
  width: 300px;
  margin-right: 8px;
  padding: 8px;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 6px;
}
.box_list {
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.todo_list {
  display: flex;
  align-items: center;
  gap: 8px;
}
.todo {
  border: 1px solid;
  border-radius: 6px;
  padding: 12px;
  width: 300px;
}
.check {
  border: 1px solid red;
  transform: scale(1.6);
  margin: 0 16px 2px 6px;
}
.btns {
  display: flex;
  gap: 4px;
}
.btn {
  padding: 8px;
  background-color: rgb(5, 5, 164);
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.green {
  background-color: rgb(23, 193, 23);
}
.pink {
  background-color: rgb(211, 79, 101);
}
</style>
