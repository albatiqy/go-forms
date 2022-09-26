<template>
  <v-snackbar v-model="show" class="_snackbar" top right>
    <v-icon :color="color" class="pr-4" v-text="icon"></v-icon> {{ message }}
    <!--template v-slot:action="{ attrs }">
      <v-btn fab v-bind="attrs" @click="show = false">
        <v-icon color="pink" x-small>mdi-close-circle</v-icon>
      </v-btn>
    </template-->
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      color: "",
      icon:"",
    };
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "snackbar/showMessage") {
        this.message = state.snackbar.message;
        this.color = state.snackbar.color;
        this.icon = state.snackbar.icon;
        this.show = true;
      }
    });
  },
};
</script>

<style scoped>
._snackbar {
  opacity: 0.92;
}
</style>