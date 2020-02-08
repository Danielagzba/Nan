<template>
<v-content>
  <v-container fluid>
    <v-row>
      <v-col>


          <v-img
            v-if="showPicture"
            @click="myMethod"
            src="https://i.imgur.com/BaCH16T.jpg"
            aspect-ratio="1"
            max-width="300"
            max-height="300"
          >
          </v-img>


      </v-col>
    </v-row>
  </v-container>

</v-content>
</template>

<script>
    export default {
        data() {
            return {
                showPicture: true
            }
        },
        methods: {
            myMethod() {
                this.showPicture = false
            }
        }
    }
</script>

<style scoped>


</style>
