<template>
  <Gallery :images="images" ></Gallery>
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
                        href: "https://i.imgur.com/uEJep4N.jpg"},
                    {
                        title: "title 2",
                        description: "des 2",
                        href: "https://i.imgur.com/sr0L8F0.jpg"
                    },
                ],
            };
        },
    };
</script>

<style scoped>

</style>
