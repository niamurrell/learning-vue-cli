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

<!-- If you don't put scoped on the parent and the children, -->
<!-- ALL components will have the bottom-most styles applied -->
<style scoped>
h1 {
  color: orangered;
}
</style>
