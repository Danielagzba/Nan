<template>
  <v-carousel
      cycle
      show-arrows-on-hover
    height="650px">
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
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
    data() {
        return{
            drawer: false,
            items: [
                {
                    icon: 'mdi-home',
                    text: 'Home',
                },
                {
                    icon: 'mdi-camera',
                    text: 'Work',
                },
                {
                    icon: 'mdi-face',
                    text: 'About me',
                },
                {
                    icon: 'mdi-email',
                    text: 'Contact',
                },
            ],
            model: 1,

            photos: [
                {
                    src: 'https://i.imgur.com/dVQD7jm.jpg',
                },
                {
                    src: 'https://i.imgur.com/JV55Ta2.jpg',
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
