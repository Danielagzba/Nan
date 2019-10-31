<template>
  <v-app light>



    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      class="indigo"
      color="grey darken-3">



      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            nuxt
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

      <v-app-bar flat app clipped-left
      color="grey darken-3">

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Daniela
        <span class="font-weight-bold">Gonzalez</span>



        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-divider vertical></v-divider>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-divider vertical></v-divider>


        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

    <nuxt/>

    <v-footer
      app
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >

        <v-col
          class="lighten-1 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Naan</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
  export default{
      data() {
          return{
              drawer: false,
              items: [
                  {
                      icon: 'mdi-home', text: 'Home', to: '/'
                  },
                  {
                      icon: 'mdi-camera', text: 'Work', to: '/work'
                  },
                  {
                      icon: 'mdi-face', text: 'About me', to: '/aboutme'
                  },
                  {
                      icon: 'mdi-email', text: 'Contact', to: '/contact'
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
                      src: 'https://i.imgur.com/TN03vf1.jpg',
                  },
              ],
          }
      },
      components: {},
      computed: {}
  }
</script>
