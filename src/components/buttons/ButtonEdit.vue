<script setup>
import BaseButton from './BaseButton.vue';
const emits = defineEmits(['on-click']);
</script>
<template>
  <BaseButton color="green" @on-click="emits('on-click')">EDIT</BaseButton>
</template>
