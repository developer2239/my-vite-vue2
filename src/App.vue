<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="wrap">
    <TheHeader></TheHeader>
    <main class="main">Main</main>
    <TheFooter></TheFooter>
  </div>
</template>

<style>
@import url('./assets/css/destyle.css');
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 370px;
  margin: 0 auto;
  font-family: sans-serif;
}
.main {
  flex: 1;
  width: 100%;
}
</style>
