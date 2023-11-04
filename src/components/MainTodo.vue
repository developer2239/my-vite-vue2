<script setup>
import { ref } from 'vue';
import { useTodoList } from '../composables/useTodoList';
import BaseButton from './buttons/BaseButton.vue';
import ButtonAdd from './buttons/ButtonAdd.vue';
const todoRef = ref('');
const isEditRef = ref(false);
const { todoListRef, add, show, edit, del, check, countFin } = useTodoList();

const addTodo = () => {
  add(todoRef.value);
  todoRef.value = '';
};
const showTodo = (id) => {
  const task = show(id);
  todoRef.value = task;
  isEditRef.value = true;
};
const editTodo = () => {
  edit(todoRef.value);
  isEditRef.value = false;
  todoRef.value = '';
};
const deleteTodo = (id) => {
  del(id);
};
const changeCheck = (id) => {
  check(id);
};
</script>

<template>
  <div class="finCount">
    <span>総数 : {{ todoListRef.length }} </span>
    <br />
    <span> 完了 : {{ countFin }}</span>
    <span> 未完了 : {{ todoListRef.length - countFin }}</span>
  </div>
  <div class="box_input">
    <input
      type="text"
      class="todo_input"
      v-model="todoRef"
      placeholder="NEW TODO"
    />
    <BaseButton color="green" @on-click="editTodo" v-if="isEditRef">
      EDIT
    </BaseButton>
    <ButtonAdd @on-click="addTodo" v-else />
  </div>
  <div class="box_list">
    <div class="todo_list" v-for="todo in todoListRef" :key="todo.id">
      <div class="todo" :class="{ fin: todo.checked }">
        <input
          type="checkbox"
          class="check"
          @change="changeCheck(todo.id)"
          :checked="todo.checked"
        />
        <label>{{ todo.task }}</label>
      </div>
      <div class="btns">
        <BaseButton color="green" @on-click="showTodo(todo.id)">
          EDIT
        </BaseButton>
        <BaseButton color="pink" @on-click="deleteTodo(todo.id)">
          DEL
        </BaseButton>
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
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.fin {
  text-decoration: line-through;
  background-color: rgb(175, 175, 175);
  color: #777;
}
.finCount {
  text-align: center;
  margin-top: 12px;
}
</style>
