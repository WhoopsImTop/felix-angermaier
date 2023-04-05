<template>
  <div style="position: relative;" class="portfolio-background">
    <img class="portfolio-bg" :src="backgroundImage" alt="background image" />
    <div class="content-container embed-container" style="display: none">
      <iframe
        :src="videoEmbed"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["videoEmbed", "backgroundImage"],
  mounted() {
    if (process.client) {
      let background = document.querySelector(".portfolio-bg");
      let videoContainer = document.querySelector(".embed-container");
      let video = document.querySelector("iframe");

      //blur background after .5s
      setTimeout(() => {
        background.style.filter = "blur(5px)";
      }, 500);

      //move video from top to bottom after 1s
      setTimeout(() => {
        videoContainer.style.display = "block";
        videoContainer.classList.add("embed-container--bottom");
      }, 1000);

      //play video after 1.5s
      setTimeout(() => {
        video.play();
      }, 1500);
    }
  },
};
</script>

<style>
</style>