<template>
  <ul>
    <li v-for="(composer, index) in composers" v-bind:key="index">{{ composer }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      composers: ["Dvorak", "Chopin", "Toscanini", "Listz"]
    };
  }
};
</script>

<style>
</style>