<template>
  <div class="content-block">
    <div class="text-content">
        <div class="text-container text-block width-3_4">
            <h2 v-if="content.title">{{ content.title }}</h2>
            <p v-if="content.body" v-html="$md.render(content.body)"></p>
        </div>
        <grid-layout :images="content.images" v-if="content.images"></grid-layout>
    </div>
  </div>
</template>

<script>
import gridLayout from './grid-layout.vue'
export default {
  components: { gridLayout },
    props: ['content'],
}
</script>

<style>

</style>