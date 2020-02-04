<template>
<v-col>
  <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list></quick-menu>
  <div>
    <gallery :images="images" :index="index" @close="index = null"
    >
      <v-icon>mdi-home</v-icon>
    </gallery>
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
                    'https://i.imgur.com/cR6kx50.jpg',
                    'https://i.imgur.com/BaCH16T.jpg',
                    'https://i.imgur.com/H67xEcc.jpg',
                    'https://i.imgur.com/pZnMB2N.jpg',
                    'https://i.imgur.com/kmadKgS.jpg',
                    'https://i.imgur.com/AeJ8hyx.jpg',
                    'https://i.imgur.com/Az0vAcQ.jpg',
                    'https://i.imgur.com/88zVwBK.jpg',
                    'https://i.imgur.com/gm8nXtu.jpg',
                    'https://i.imgur.com/NV9D3pf.jpg',

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
