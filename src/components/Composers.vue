<template>
  <div id="composers">
    <h2>The Best Composers:</h2>
    <ul>
      <li
        v-for="(composer, index) in composers"
        v-bind:key="index"
        v-on:click="composer.show = !composer.show"
      >
        <h2>{{ composer.name }}</h2>
        <h3 v-show="composer.show">{{ composer.era }} era</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "composers",
  data() {
    return {
      composers: [
        { name: "Satie", era: "Post-Modern", show: false },
        { name: "Chopin", era: "Romantic", show: false },
        { name: "Toscanini", era: "Modern", show: false },
        { name: "Listz", era: "Classical", show: false },
        { name: "Tchaikoxsky", era: "Classical", show: false }
      ]
    };
  }
};
</script>

<!-- If you don't put scoped on the parent and the children, -->
<!-- ALL components will have the bottom-most styles applied -->
<style scoped>
h2 {
  text-align: center;
}
#composers {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 15px;
  border: 1px solid #222;
  margin: 10px;
}
</style>