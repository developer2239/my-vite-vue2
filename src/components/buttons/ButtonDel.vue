<script setup>
import BaseButton from './BaseButton.vue';
const emits = defineEmits(['del-click']);
</script>
<template>
  <BaseButton color="pink" @on-click="emits('del-click')">DEL</BaseButton>
</template>
