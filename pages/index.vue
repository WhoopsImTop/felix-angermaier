<template>
  <div>
    <landing :videoUrl="landingData.videoURL" />
    <navigation />
    <portfolio-overview />
  </div>
</template>

<script>
import portfolioOverview from "../components/portfolioOverview.vue";

export default {
  components: { portfolioOverview },
  layout: "index",
  name: "IndexPage",
  async asyncData({ store: { dispatch }, $content }) {
    await dispatch("getPortfolioItems");
    const landingData = await $content("landing", "index").fetch();
    return { landingData };
  },
  created() {
    //scrollsnap to navigation on a small scroll in landing
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        document.querySelector(".navigation").scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  },
};
</script>
