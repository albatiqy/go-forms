<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="mb-16">
        <nuxt />
      </v-container>
    </v-main>
    <snackbar></snackbar>
  </v-app>
</template>

<script>
import Snackbar from "~/components/Snackbar.vue";

export default {
  components: { Snackbar },
  name: "front",
  data: () => ({}),
};
</script>

<style scoped>
</style>
