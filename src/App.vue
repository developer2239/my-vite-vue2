<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
// import MainTodo from './components/MainTodo.vue';
</script>

<template>
  <div class="back_ground">
    <div class="wrap">
      <TheHeader></TheHeader>
      <main class="main"><RouterView /></main>
      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<style>
@import url('./assets/css/destyle.min.css');
.back_ground {
  height: 100%;
  width: 100vw;
  background-image: linear-gradient(
    90deg,
    rgb(93, 239, 141),
    rgb(161, 190, 253)
  );
}
.wrap {
  position: relative;
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
