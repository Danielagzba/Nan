<template>

      <div>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '400px', height: '400px' }"
        ></div>
      </div>


</template>

<script>
    import VueGallery from 'vue-gallery';

    export default {
        data: function () {
            return {
                images: [
                    'https://i.imgur.com/u6D1wkL.jpg',
                    'https://i.imgur.com/sr0L8F0.jpg',
                    'https://i.imgur.com/U2hIz27.jpg',
                    'https://i.imgur.com/H9Pyuc5.jpg',
                ],
                index: null
            };
        },

        components: {
            'gallery': VueGallery
        },
    }
</script>

<style scoped>
  .image {
    float: left;
    align-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 3px solid #ebebeb;
    margin: 5px;
  }
</style>
