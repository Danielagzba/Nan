<template>
  <v-app :dark="setTheme">

    <darkMode></darkMode>


    <v-navigation-drawer
      app
      temporary
      clipped
      v-model="drawer"
      class="indigo"
      color="primary">


      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            nuxt
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"
                      color="white"></v-icon>
            </v-list-item-icon>
            <v-list-item-content class="accent--text">
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar tile app clipped-left
               color="accent">

      <v-app-bar-nav-icon @click="drawer = !drawer" color="primary"></v-app-bar-nav-icon>

      <v-toolbar-title class="primary--text">Daniela
        <span class="font-weight-bold primary--text">Gonzalez</span>


      </v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon color="primary">mdi-magnify</v-icon>
      </v-btn>


      <v-btn icon>
        <v-icon color="primary">mdi-heart</v-icon>
      </v-btn>


      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon
                 v-on="on">
            <v-icon color="primary">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in list"
            :key="index"
            @click=""
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <nuxt/>



    <v-footer
      color="white"
      app
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >

        <v-col
          class="lighten-1 py-4 text-center primary--text"
          cols="12"
        >
          <strong>By Nan</strong>
        </v-col>
      </v-row>

    </v-footer>
  </v-app>
</template>

<script>
    import darkMode from "../components/darkMode";

    export default {

        data() {

            return {
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
                list: [
                    {title: 'Click Me'},
                    {title: 'Click Me'},
                    {title: 'Click Me'},
                    {title: 'Click Me 2'},
                ],

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
                components: {
                    darkMode: darkMode
                },
                computed: {
                    setTheme() {
                        if (this.$store.state.isDark) {
                            return (this.$vuetify.theme.dark = true);
                        }
                        else {
                            return (this.$vuetify.theme.dark = false);
                        }
                    }
                }


            }
        }
    }
</script>
