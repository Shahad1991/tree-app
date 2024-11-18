<template>
    <v-app class="home" id="home">
      <v-container fluid fill-height :style="{ backgroundColor: '#E9E5E5', width: '100%', padding: '25px' }">
        <v-col cols="12" md="8" lg="4" class="text-center">
          <h2 class="question">Velkommen! Indtast dine oplysninger for at starte:</h2>
        </v-col>
  
        <v-col cols="12" md="8" lg="4" align="center">
          <v-text-field
            v-model="userName"
            label="Dit navn"
            outlined
            :style="{ marginBottom: '24px' }"
          />
          <v-btn color="primary" @click="startChecklist">Start</v-btn>
        </v-col>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: '',
      };
    },
    methods: {
      startChecklist() {
        if (this.userName) {
          this.$store.dispatch('setUserInfo', { name: this.userName });
          this.$router.push('/elUse'); // Naviger til den første tjekliste
        } else {
          alert('Indtast venligst dit navn');
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
  
  .home {
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