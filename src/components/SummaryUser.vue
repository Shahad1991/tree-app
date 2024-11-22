<template>
  
    <v-container fluid fill-height :style="{ backgroundColor: '#E9E5E5', width: '100%', padding: '25px' }">
      <v-col cols="12" md="8" lg="4" class="text-center">
        <h2 class="question">Opsummering af dine point</h2>
        <p class="user-name">Bruger: {{ userName }}</p>
        <p class="total-points">Samlede point: {{ totalPoints }}</p>
      </v-col>

      <v-col cols="12" md="8" lg="4" align="center">
        <PointsDisplay :points="totalPoints" />
        <v-btn color="primary" @click="savePoints">Gem point</v-btn>
        <v-btn color="secondary" @click="goBack">Tilbage</v-btn>
      </v-col>
    </v-container>

    <UsersList></UsersList>
 
</template>

<script>
import PointsDisplay from './MenuItems/PointsDisplay.vue'; 
import UsersList from './UsersList.vue';

export default {
  components: {
    PointsDisplay,
    UsersList,
  },
  computed: {
    userName() {
      return this.$store.getters.getUserInfo.name; // Get user name from Vuex store
    },
    userId() {
      return this.$store.getters.getUserInfo.id; // Get user ID from Vuex store
    },
    totalPoints() {
      return this.$store.getters.getTotalPoints; // Get total points from Vuex getter
    },
  },
  methods: {
    async savePoints() {
      try {
        console.log('User ID:', this.userId);
        console.log('User Name:', this.userName);
        console.log('Total Points:', this.totalPoints);
        console.log('Sending data to backend:', {
          userId: this.userId,
          name: this.userName,
          points: this.totalPoints,
        });
        const response = await fetch('http://localhost:3000/api/savePoints', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: this.userId, // Sender user ID til backend
            name: this.userName,
            points: this.totalPoints,
          })
        });
        const data = await response.json();
        console.log('Response from backend:', data);
        alert('Point gemt succesfuldt!');
      } catch (error) {
        console.error('Error saving points:', error);
        alert('Der opstod en fejl ved gemning af point.');
      }
    },
    goBack() {
      this.$router.go(-1); // Naviger tilbage til den forrige side
    },
  },
};
</script>

<style scoped>
.v-container {
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 2px;
  padding: 20px;
 
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

.user-name {
  font-size: 18px;
  margin-top: 10px;
  color: black;
}

.total-points {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 50px; /* Tilføj margin-bottom for at adskille elementerne */
  color: black;
}

.action-button {
  margin-top: 30px; /* Tilføj margin-top for at adskille knapperne */
  margin-bottom: 10px; /* Tilføj margin-bottom for at adskille knapperne */
}
</style>