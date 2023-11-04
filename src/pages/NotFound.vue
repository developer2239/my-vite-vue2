<template>
  <div class="error">
    <p class="error_code">404</p>
    <div class="msg">
      <p>Page</p>
      <p>Not</p>
      <p>Found</p>
    </div>
  </div>
</template>
<style scoped>
.error {
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: 30px;
  padding: 30px;
}
.error_code {
  font-weight: bold;
  font-size: 45px;
  margin-right: 25px;
}
.msg {
  color: gray;
}
</style>
