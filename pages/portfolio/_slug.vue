<template>
  <div>
    <viemo-player-handler
      :video-embed="portfolioItems.portfolioVimeoLink"
      :background-image="portfolioItems.portfolioImage"
    ></viemo-player-handler>
    <div class="content-container text-container">
      <h5>{{ portfolioItems.category }}</h5>
      <h3>{{ portfolioItems.title }}</h3>
      <h4>{{ portfolioItems.customer }}</h4>

      <div class="grid-1-5">
        <p class="description" v-html="portfolioItems.description"></p>
        <div class="additional-info">
          <div class="info-item" v-for="(info, index) in portfolioItems.additionalInformation" :key="index">
            <h5>{{ info.title }}</h5>
            <p>{{ info.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "portfolio",
  name: "PortfolioOverview",
  async asyncData({ $content, params }) {
    const portfolioItems = await $content("portfolio", params.slug).fetch();
    return { portfolioItems };
  },
};
</script>

<style>
</style>