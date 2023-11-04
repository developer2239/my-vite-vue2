<script setup>
const aaa = () => {
  console.log("it's working");
};
const props = defineProps({ color: String });
const emits = defineEmits(['on-click']);
const onClick = (str) => {
  emits('on-click', str);
};
</script>
<template>
  <button class="btn" :class="props.color" @click="onClick()">
    <slot></slot>
  </button>
</template>
<style scoped>
.btn {
  padding: 8px;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.blue {
  background-color: rgb(5, 5, 164);
}
.green {
  background-color: rgb(23, 193, 23);
}
.pink {
  background-color: rgb(211, 79, 101);
}
</style>
