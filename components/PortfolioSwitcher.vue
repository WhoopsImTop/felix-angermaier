<template>
  <div class="portfolioSwitcher">
    <div class="content-container portfolioSwitchContent">
      <div @click="goToPrevPortfolio" class="prev"><h2>PREV</h2></div>
      <nuxt-link class="closeBtn" to="/"><img src="/close.svg" width="50px"></nuxt-link>
      <div @click="goToNextPortfolio" class="next"><h2>NEXT</h2></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const portfolioItems = await $content("portfolio").fetch();
    return { portfolioItems };
  },
  name: "PortfolioSwitcher",
  methods: {
    goToNextPortfolio() {
      let currentIndex = this.$store.state.portfolioItems.findIndex(
        (item) => item.slug === this.$route.params.slug
      );
      let nextIndex;
      if (currentIndex === this.$store.state.portfolioItems.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
      this.$router.push(`/portfolio/${this.$store.state.portfolioItems[nextIndex].slug}`);
    },
    goToPrevPortfolio() {
      let currentIndex = this.$store.state.portfolioItems.findIndex(
        (item) => item.slug === this.$route.params.slug
      );
      let prevIndex;
      if (currentIndex === 0) {
        prevIndex = this.$store.state.portfolioItems.length - 1;
      } else {
        prevIndex = currentIndex - 1;
      }
      this.$router.push(`/portfolio/${this.$store.state.portfolioItems[prevIndex].slug}`);
    },
  }
};
</script>

<style>
</style>