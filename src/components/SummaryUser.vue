<template>
    <v-app class="summary" id="summary">
      <v-container fluid fill-height :style="{ backgroundColor: '#E9E5E5', width: '100%', padding: '25px' }">
        <v-col cols="12" md="8" lg="4" class="text-center">
          <h2 class="question">Opsummering af dine point</h2>
          <p class="user-name">Bruger: {{ userName }}</p>
        </v-col>
  
        <v-col cols="12" md="8" lg="4" align="center">
          <PointsDisplay :points="totalPoints" />
          <v-btn color="primary" @click="savePoints">Gem point</v-btn>
        </v-col>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import axios from 'axios';
  import PointsDisplay from './MenuItems/PointsDisplay.vue';
  
  export default {
    components: {
      PointsDisplay,
    },
    computed: {
      userName() {
      return this.$store.getters.getUserInfo.name; // Get user name from Vuex store
    },
      totalPoints() {
        return this.$store.getters.getTotalPoints; // Get total points from Vuex getter
      },
    },
    methods: {
      async savePoints() {
        try {
          const userInfo = this.$store.getters.getUserInfo;
          await axios.post('http://your-backend-api.com/savePoints', {
            userId: userInfo.id, // Assuming you have user ID stored in userInfo
            points: this.totalPoints,
          });
          alert('Point gemt succesfuldt!');
        } catch (error) {
          console.error('Error saving points:', error);
          alert('Der opstod en fejl ved gemning af point.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .v-container {
    justify-content: center;
    margin: 10px;
    background-color: #1E7F85;
    padding: 20px;
    border-radius: 10px;
  }
  
  .summary {
    background-color: #E9E5E5;
    width: 100%;
    padding: 0;
  }
  
  .question {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 24px;
    color: black;
  }
  </style>