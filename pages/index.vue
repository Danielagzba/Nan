<template>
  <v-row>
    <v-carousel
      class="carousel-image"
      hide-delimiters
      cycle
      show-arrows-on-hover>

      <v-carousel-item
        v-for="(item,i) in photos"
        :key="i"
        :src="item.src"
        reverse-transition="reverse-transition"
        transition="fade-transition"
      >

        <v-row align="center" justify="center">
          <v-col sm="12" md="12" xs="12">

            <h1 class="font-weight-thin text-uppercase text-center display-4 white--text carousel-inner"> Daniela Barron
              <p class="display-1 font-weight-regular">
                Travel photographer
              </p></h1>


          </v-col>
        </v-row>


      </v-carousel-item>
    </v-carousel>


  </v-row>
</template>

<style>
  .carousel-inner {
    padding: 15% 0;
  }

  .carousel-image {
    max-height: 100% !important;
  }
</style>


<script>
    import Logo from '~/components/Logo.vue'
    import VuetifyLogo from '~/components/VuetifyLogo.vue'

    export default {
        data() {
            return {


                photos: [

                    {
                        src: 'https://i.imgur.com/Zyd88GD.jpg',
                    },
                    {
                        src: 'https://i.imgur.com/fmWQNVO.jpg',
                    },
                    {
                        src: 'https://i.imgur.com/9VY9hPi.jpg',
                    },
                ],
            }
        },
    }
</script>
