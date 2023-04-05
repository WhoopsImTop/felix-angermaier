<template>
  <div>
    <Nuxt />
    <footer-component />
  </div>
</template>

<script>
import footerComponent from '../components/footerComponent.vue';
export default {
  components: { footerComponent },
  name: "PortfolioOverview",
};
</script>

<style>
</style>