<template>
  <div class="content-container">
    <div class="portfolio-grid">
      <transition
        name="fade-up"
        v-for="(portfolio, index) in $store.state.portfolioItems"
        :key="index"
      >
        <nuxt-link class="portfolio-item" :to="`/portfolio/${portfolio.slug}`">
          <video
            :src="portfolio.portfolioVideo"
            :id="index"
            @mouseover="playVideo(index)"
            @mouseout="stopVideo(index)"
            loop
            muted
          ></video>
          <div class="video-overlay"></div>
          <div class="portfolio-item-content">
            <h5>{{ portfolio.category }}</h5>
            <h2>{{ portfolio.title }}</h2>
            <h4>{{ portfolio.customer }}</h4>
          </div>
        </nuxt-link></transition
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioOverview",
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    playVideo(index) {
      let video = document.getElementById(index);
      video.play();
    },
    stopVideo(index) {
      let video = document.getElementById(index);
      video.pause();
    },
  },
};
</script>

<style>
</style>