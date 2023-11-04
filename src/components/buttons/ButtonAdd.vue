<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['add-click']);
</script>
<template>
  <BaseButton color="blue" @on-click="emit('add-click')">ADD</BaseButton>
</template>
