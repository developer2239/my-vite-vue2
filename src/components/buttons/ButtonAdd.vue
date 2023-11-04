<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['on-click']);
</script>
<template>
  <BaseButton color="blue" @on-click="emit('add-click')">ADD</BaseButton>
</template>
