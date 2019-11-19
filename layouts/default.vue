<template>
  <v-app :dark="setTheme">



    <v-card tile>
      <v-toolbar
        color="accent"
        flat

      >


        <v-spacer></v-spacer>
        <v-toolbar-title class="font-weight-bold display-3">Nan</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
        <v-tabs
          class="tabs white--text"
          centered
          grow
          background-color="transparent"

        >


          <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.to" exact >
            {{ tab.name }}
          </v-tab>
        </v-tabs>
        </template>



      </v-toolbar>

    </v-card>




    <nuxt/>


    <v-footer
      color="accent"
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
      <darkMode></darkMode>
    </v-footer>
  </v-app>
</template>



<script>
    import darkMode from "../components/darkMode";

    export default {


        data(){
        return {

            tabs: [
                { id: 1, name: "Home", to:'/'},
                { id: 2, name: "Work", to:'/work' },
                { id: 3, name: "About me", to:'/aboutme' },
                { id: 4, name: "Contact", to:'/contact' }
            ]
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
