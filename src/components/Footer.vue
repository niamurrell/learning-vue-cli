<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {
      copyright: "Copyright 2020 Bomber"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightslategray;
  text-align: center;
}
</style>