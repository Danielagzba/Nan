<template>

  <v-btn icon>
    <v-icon @click="isDark = !isDark">
      mdi-invert-colors
    </v-icon>
  </v-btn>

</template>

<script>
    export default {
        computed: {
            isDark: {
                get() {
                    return this.$store.state.isDark
                },
                set(value) {
                    this.$store.commit('setDark', value);
                }
            },
        }
    }
</script>
