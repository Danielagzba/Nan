<template>
  <v-app :dark="setTheme" style="height: 100vh">

    <v-app-bar
      app
      color="accent"
      flat

    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      temporary>




      <v-list dense>
        <template v-for="item in items">

          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"

          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="child.to"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>


          <v-list-item
            v-else
            :key="item.text"
            link
            :to="item.to"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <darkMode></darkMode>
    </v-navigation-drawer>





    <nuxt></nuxt>


    <v-footer
      app
      color="accent"
    >

      <v-row
        justify="center"
        no-gutters
      >

        <v-col
          class="lighten-1 py-4 text-center primary--text font-weight-thin"
          cols="12"
        >
          <strong>BY NAN</strong>
        </v-col>
      </v-row>




    </v-footer>


  </v-app>
</template>

<script>

    import darkMode from "../components/darkMode";

    export default {
        name: "carousel",

        data(){
            return {

                dialog: false,

                items: [
                    {
                        icon: 'mdi-home-outline', text: ' Home', to: '/'
                    },

                    {
                        text: 'Work',
                        icon: 'mdi-camera-outline',
                        'icon-alt': 'mdi-camera-outline',
                        model: false,
                        children: [
                            { text: 'Portraits', to: '/work'},
                            { text: 'Studio' },
                            { text: 'Landscape' },
                            { text: 'Product' },
                        ],
                    },
                    {
                        icon: 'mdi-account-outline', text: 'About me', to: '/aboutme'
                    },
                    {
                        icon: 'mdi-email-outline', text: 'Contact', to: '/contact'
                    },

                ],
                drawer: null,

            };


        },
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

</script>

<style scoped>

</style>
