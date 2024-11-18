<template>
    <v-row align="center" justify="space-between">
      <v-col cols="auto">
        <img src="../assets/Undo.svg" @click="goToPrevious" />
      </v-col>
      <v-spacer />
      <v-col cols="auto">
        <img src="../assets/Forward Arrow.svg" @click="goToNext" />
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    props: {
      nextRoute: {
        type: String,
        required: true,
      },
      previousRoute: {
        type: String,
        required: true,
      },
    },
    methods: {
      goToPrevious() {
        this.$router.push(this.previousRoute);
      },
      goToNext() {
        this.$router.push(this.nextRoute);
      },
    },
  };
  </script>
  