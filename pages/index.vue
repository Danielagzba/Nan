<template>

  <v-carousel hide-delimiters height="100%">
    <v-carousel-item v-for="(photo, i) in photos" :key="i" :src="photo.src">

      <v-row align="center" justify="center">
        <v-col sm="12" md="12" xs="12">

          <h1 class="font-weight-thin text-uppercase text-center display-4 white--text carousel-inner"> Daniela Barron
            <p class="display-1 font-weight-light ">
              Travel photographer
            </p></h1>


        </v-col>
      </v-row>


    </v-carousel-item>

  </v-carousel>

</template>

<style>
  .carousel-inner {
    padding: 20% 0;
  }



</style>


<script>
    import Logo from '~/components/Logo.vue'
    import VuetifyLogo from '~/components/VuetifyLogo.vue'

    export default {
        layout: "carousel",

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
