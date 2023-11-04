<template>
  <footer class="footer">
    <small class="footer_contents">
      <RouterLink class="footer_links" to="/"> Home </RouterLink>
      <RouterLink class="footer_links" to="/About"> About </RouterLink>
    </small>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 16px;
  height: 30px;
  position: absolute;
  bottom: 0;
}
.footer_contents {
  height: 20px;
}
.footer_links {
  margin: 8px;
}
.footer_links:hover {
  text-decoration: underline;
}
</style>
