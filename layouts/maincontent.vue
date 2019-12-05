<template>
  <v-app>
  <v-app-bar
    app
    color="accent"

  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title class="font-weight-bold display-2 text-center">Nan</v-toolbar-title>
  </v-app-bar>
    <v-footer
      color="accent"
      app>
      <darkMode></darkMode>
      <span class="primary--text">By Nan</span>


    </v-footer>

    <darkMode></darkMode>







  </v-app>
</template>

<script>
    export default {
        name: "maincontent"
    }
</script>

<style scoped>

</style>
