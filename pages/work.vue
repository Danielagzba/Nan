<template>
<v-col>
  <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list></quick-menu>
  <div>
    <gallery :images="images" :index="index" @close="index = null"
    ></gallery>
    <div
      class="image mousechange"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '300px' }"
    >

    </div>
  </div>


</v-col>

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
                    'https://i.imgur.com/tCrivAG.jpg',
                    'https://i.imgur.com/NwanJSu.jpg',
                    'https://i.imgur.com/9W7O5jJ.jpg',
                    'https://i.imgur.com/kmCH1Sq.jpg',
                    'https://i.imgur.com/LsiyOKC.jpg',
                    'https://i.imgur.com/LTHjzmG.jpg',
                    'https://i.imgur.com/UEL3oGd.jpg',
                    'https://i.imgur.com/hi4GD18.jpg',
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
  .mousechange:hover {
    cursor: pointer;
  }
</style>
