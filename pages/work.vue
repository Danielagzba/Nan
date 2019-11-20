<template>


  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>


</template>

<script>
    import Gallery from "vue-cover-gallery"

    export default {

        name: "Example",
        components: {
            Gallery
        },
        data() {
            return {
                images: [
                    {
                        title: "title 1",
                        description: "des 1",
                        href: "https://i.imgur.com/u6D1wkL.jpg"
                    },
                    {
                        title: "title 2",
                        description: "des 2",
                        href: "https://i.imgur.com/sr0L8F0.jpg"
                    },
                    {
                        title: "title 3",
                        description: "des 3",
                        href: "https://i.imgur.com/U2hIz27.jpg"
                    },
                    {
                        title: "title 4",
                        description: "des 4",
                        href: "https://i.imgur.com/H9Pyuc5.jpg"
                    },
                    {
                        title: "title 5",
                        description: "des 5",
                        href: "https://i.imgur.com/FweGLgk.jpg"
                    },
                ],
            };
        },
    };
</script>


<style scoped>

</style>
