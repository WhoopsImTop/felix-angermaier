<template>
  <div class="navigation">
    <div class="content-container navigation-container">
      <klangbild-logo-short></klangbild-logo-short>
      <div class="navigation-items">
        <nuxt-link to="/" class="navigation-item">Home</nuxt-link>
        <nuxt-link to="/about" class="navigation-item">About</nuxt-link>
        <nuxt-link to="/contact" class="navigation-item">Contact</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import klangbildLogoShort from "./klangbildLogoShort.vue";
export default {
  components: { klangbildLogoShort },
};
</script>

<style>
</style>