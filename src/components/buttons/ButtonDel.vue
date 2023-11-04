<script setup>
import BaseButton from './BaseButton.vue';
const emits = defineEmits(['on-click']);
</script>
<template>
  <BaseButton color="pink" @on-click="emits('on-click')">DEL</BaseButton>
</template>
