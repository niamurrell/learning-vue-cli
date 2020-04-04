<template>
  <div id="app">
    <app-header></app-header>
    <!-- Pass down props with v-bind -->
    <composers v-bind:composers="composers"></composers>
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
    return {
      composers: [
        { name: "Satie", era: "Post-Modern", show: false },
        { name: "Chopin", era: "Romantic", show: false },
        { name: "Toscanini", era: "Modern", show: false },
        { name: "Listz", era: "Classical", show: false },
        { name: "Tchaikovsky", era: "Classical", show: false }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  color: orangered;
}
</style>
