<template>
  <div class="footer">
    <div class="content-container footer-container">
      <div class="flex-start">
        <klangbild-logo-short
          height="115px"
          width="115px"
        ></klangbild-logo-short>
        <div class="footer-content-item">
          <p>Klangbild Filmproduktion</p>
          <p>Felix Angermaier</p>
          <p>Kandelstrasse 2</p>
          <p>79336 Herbolzheim</p>
        </div>
        <div class="footer-content-item">
          <a href="tel:076439199010">+49 7643 9199 010</a>
          <a href="mailto:hello@klangbild.com">hello@klangbild.com</a>
        </div>
        <div class="footer-content-item">
          <nuxt-link to="/impressum">Impressum</nuxt-link>
          <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
        </div>
      </div>
      <div class="flex-end">
        <div class="footer-content-item">
          <img src="/facebook.svg" height="70px" alt="facebook" />
        </div>
        <div class="footer-content-item">
          <img src="/vimeo.svg" height="60px" alt="vimeo" />
        </div>
        <div class="footer-content-item">
          <img src="/instagram.svg" height="60px" alt="instagram" />
        </div>
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