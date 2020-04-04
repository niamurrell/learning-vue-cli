<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
header {
  background: lightsalmon;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>