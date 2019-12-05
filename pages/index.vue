<template>
  <div class="text-center">

    <v-carousel
      height="703px"
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

          <p class="font-weight-light text-uppercase font-weight-black display-2 white--text"> Daniela Barron </p>


      </v-carousel-item>
    </v-carousel>
  </div>

</template>

<style>
  div {

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
                        src: 'https://i.imgur.com/r0tX99x.jpg',
                    },
                    {
                        src: 'https://i.imgur.com/fmWQNVO.jpg',
                    },
                ],
            }
        },
    }
</script>
