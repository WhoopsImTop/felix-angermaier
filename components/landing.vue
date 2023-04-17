<template>
  <div class="video-container">
    <video autoplay muted loop>
      <source :src="videoUrl" type="video/mp4">
    </video>
    <div class="video-overlay">
        <klangbild-logo-long></klangbild-logo-long>
    </div>
  </div>
</template>

<script>
import klangbildLogoLong from './klangbildLogoLong.vue'
export default {
  props: {
    videoUrl: {
      type: String,
      default: "",
    },
  },
  components: { klangbildLogoLong },
}
</script>

<style>

</style>