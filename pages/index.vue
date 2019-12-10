<template>
<v-row>
    <v-carousel

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
          <v-col sm="6" md="12">

            <h1 class="font-weight-thin text-uppercase text-center display-4 white--text carousel-inner"> Daniela Barron </h1>

          </v-col>
        </v-row>


      </v-carousel-item>
    </v-carousel>


</v-row>
</template>

<style>
.carousel-inner{
  padding: 14% 0;
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
                        src: 'https://i.imgur.com/JV55Ta2.jpg',
                    },
                    {
                        src: 'https://i.imgur.com/Zyd88GD.jpg',
                    },
                    {
                        src: 'https://i.imgur.com/fmWQNVO.jpg',
                    },
                ],
            }
        },
    }
</script>
