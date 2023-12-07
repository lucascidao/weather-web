<template>
  <footer class="footer">
    <div class="container">
      <p>{{ currentYear }} My Website. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<script>
export default {
  name: "LayoutFooter",
};
</script>
<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}
</style>
