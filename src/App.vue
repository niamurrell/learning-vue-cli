<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <composers></composers>
  </div>
</template>

<script>
import composers from "./components/Composers";

export default {
  components: {
    composers: composers
  },
  data() {
    return {
      title: `Composer App!`
    };
  }
};
</script>

<style>
</style>
