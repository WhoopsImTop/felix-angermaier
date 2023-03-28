<template>
  <div>
    <landing />
    <navigation />
    <portfolio-overview />
  </div>
</template>

<script>
import landing from "../components/landing.vue";
import portfolioOverview from '../components/portfolioOverview.vue';

export default {
  components: { portfolioOverview },
  layout: "index",
  name: "IndexPage",
  async asyncData({ store: { dispatch } }) {
    await dispatch("getPortfolioItems");
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
