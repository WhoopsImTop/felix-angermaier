<template>
  <div class="grid-container">
    <div class="grid-image" v-for="(image, index) in images" :key="index">
        <img :src="image.image" alt="grid image" />
    </div>
  </div>
</template>

<script>
export default {
    props: ["images"]
}
</script>

<style>

</style>