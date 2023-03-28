<template>
  <div class="video-container">
    <video autoplay muted loop>
      <source src="https://player.vimeo.com/external/227822011.sd.mp4?s=1ef80d5f692061aa25c48e2f82a094c537e4678d&profile_id=165" type="video/mp4">
    </video>
    <div class="video-overlay">
        <klangbild-logo-long></klangbild-logo-long>
    </div>
  </div>
</template>

<script>
import klangbildLogoLong from './klangbildLogoLong.vue'
export default {
  components: { klangbildLogoLong },
}
</script>

<style>

</style>