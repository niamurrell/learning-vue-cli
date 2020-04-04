<template>
  <div id="app">
    <app-header></app-header>
    <composers></composers>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/Header";
import footer from "./components/Footer";
import composers from "./components/Composers";

export default {
  components: {
    composers: composers,
    "app-footer": footer,
    "app-header": header
  },
  data() {
    return {};
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
