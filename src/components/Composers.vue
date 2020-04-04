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
  // // This is how you add props without type validation:
  // props: ["composers"],
  // // Otherwise, this is the same with type validation:
  props: {
    composers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

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