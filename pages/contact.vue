<template>
<v-container fluid>
  <v-row align="center" justify="center"
         class="pa-3">
    <v-col cols="6" xs="12" sm="6">
  <form  action="https://formspree.io/mjvvzvvg"  method="post">



      <v-text-field outlined type="text" name="name" label="Your name" v-model="name" v-validate="'required|max:20'"></v-text-field>
      <v-text-field outlined type="text" name="email" label="Your email:" v-model="email" v-validate="'required|email'"></v-text-field>
      <v-text-field outlined type="text" name="message" label="Message:" v-model="message" v-validate="'required|message'"></v-text-field>



      <!-- your other form fields go here -->

      <v-btn outlined tile type="submit">Send</v-btn>


  </form>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>

</style>
