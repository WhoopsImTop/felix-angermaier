<template>
  <div class="content-container">
    <ContentContainer v-for="(content, index) in page.content" :key="index" :content="content"/>
  </div>
</template>

<script>

export default {
    async asyncData({ $content, params }) {
        console.log(params);
        const page = await $content("seiten/about").fetch();
        return { page };
    },
};
</script>

<style>
</style>