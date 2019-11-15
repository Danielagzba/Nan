<template>
  <v-carousel
    hide-delimiters
      cycle
      show-arrows-on-hover
    height="100%">
      <v-carousel-item
        v-for="(item,i) in photos"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
</template>

<style>
  div {
    font-family: "montserrat", Times, serif;
  }
  .carousel-inner > item {
    height: 400px;
  }
</style>
carousel-inner > .item > img, .carousel-inner > .item > a > img {
width: 100%;
}

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
    data() {
        return{


            photos: [
                {
                    src: 'https://i.imgur.com/dVQD7jm.jpg',
                },
                {
                    src: 'https://i.imgur.com/JV55Ta2.jpg',
                },
                {
                  src: 'https://i.imgur.com/AGnj5K1.jpg'
                },
                {
                    src: 'https://i.imgur.com/Wyw8j10.jpg',
                },
                {
                    src: 'https://i.imgur.com/GEtKbGO.jpg',
                },
                {
                    src: 'https://i.imgur.com/h81eaTJ.jpg',
                },
            ],
        }
    },
}
</script>
