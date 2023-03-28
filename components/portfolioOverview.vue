<template>
  <div class="content-container portfolio-grid">
    <nuxt-link
      class="portfolio-item"
      :to="`/portfolio/${portfolio.slug}`"
      v-for="(portfolio, index) in $store.state.portfolioItems"
      :key="index"
    >
      <video
        :src="portfolio.portfolioVideo"
        loop
        muted
        @mouseover="playVideo()"
        @mouseout="pauseVideo()"
      ></video>
      <div class="video-overlay"></div>
      <div class="portfolio-item-content">
        <h5>{{ portfolio.category }}</h5>
        <h3>{{ portfolio.title }}</h3>
        <h4>{{ portfolio.customer }}</h4>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "PortfolioOverview",
  methods: {
    playVideo() {
      this.$el.querySelector("video").play();
    },
    pauseVideo() {
      this.$el.querySelector("video").pause();
    },
  },
};
</script>

<style>
</style>