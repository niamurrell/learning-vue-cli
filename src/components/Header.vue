<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {};
  },
  methods: {
    // This is not best practice but a demo of reference types
    // The on-click title is NOT preserved and will be overwritten
    // when the parent component re-renders
    changeTitle: function() {
      this.title = "The Best Composers!";
    }
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