<template>
  <div class="navigation" :class="active ? 'active' : ''">
    <div class="content-container navigation-container">
      <nuxt-link to="/"><klangbild-logo-short height="50px" width="50px"></klangbild-logo-short></nuxt-link>
      <div class="navigation-items" @click="active = false">
        <nuxt-link to="/" class="navigation-item" @click="active = false">Home</nuxt-link>
        <nuxt-link to="/about" class="navigation-item" @click="active = false">About</nuxt-link>
        <nuxt-link to="/contact" class="navigation-item" @click="active = false">Contact</nuxt-link>
      </div>
      <div class="burger" :class="active ? 'active' : ''" @click="active = !active">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import klangbildLogoShort from "./klangbildLogoShort.vue";
export default {
  components: { klangbildLogoShort },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
</style>