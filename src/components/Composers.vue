<template>
  <div>
    <h1>The Best Composers:</h1>
    <ul>
      <li v-for="(composer, index) in composers" v-bind:key="index">{{ composer }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "composers",
  data() {
    return {
      composers: ["Dvorak", "Chopin", "Toscanini", "Listz"]
    };
  }
};
</script>

<!-- If you don't put scoped on the parent and the children, -->
<!-- ALL components will have the bottom-most styles applied -->
<style scoped>
h1 {
  color: blueviolet;
}
</style>