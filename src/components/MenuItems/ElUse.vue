<template>
  <h2>Hvordan har dit El-forbrug været? </h2>
  <v-container>
    <v-row>
      <!-- Tjekliste container -->
      <v-col cols="12" sm="6" v-for="item in checklistItems" :key="item.name">
        <v-card class="checklist-card" :class="{ 'selected': selectedItems.includes(item) }">
          <v-checkbox
            v-model="selectedItems"
            :label="item.name"
            :value="item"
            @change="calculatePoints"
            class="custom-checkbox"
          ></v-checkbox>
          
        </v-card>
      </v-col>
    </v-row>

    <!-- PointsDisplay komponent viser totalen -->
    
  </v-container>
  <PointsDisplay :points="totalPoints" />
</template>

<script>
import PointsDisplay from '../PointsDisplay.vue'; // Juster stien, hvis nødvendigt

export default {
  components: {
    PointsDisplay,
  },
  data() {
    return {
      checklistItems: [
        { name: "Sluk for lys", points: 100 },
        { name: "Skift til LED-pærer)", points: 200 },
        { name: "Vask i kold vand", points: 75 },
        { name: "Tør tøj naturligt", points: 50 },
        { name: "Brug energivenlige stik til apparater", points: 25 },
        { name: "Brug energibesparende apparater", points: 50 },
        { name: "Brug mindre varme", points: -100 },
      ],
      selectedItems: [], // Brugervalgt liste
      totalPoints: 0, // Samlede point
    };
  },
  methods: {
    calculatePoints() {
      // Beregner totalen baseret på valgte elementer
      this.totalPoints = this.selectedItems.reduce((acc, item) => acc + item.points, 0);
    },
  },
};
</script>

<style scoped>
.v-container {
  justify-content: center;
  margin: 60px;
  background-color: #ffcc00;
  padding: 20px;
  border: 3px solid #ccc;
  
}
.checklist-card {
  margin: 3px;
  padding: 1px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.checklist-card.selected {
  background-color: #4caf50; /* Grøn farve når valgt */
  color: white; /* Ændrer tekstfarven til hvid */
}

.custom-checkbox {
  color: #4caf50; /* Standard farve for checkbox */
}

.custom-checkbox input:checked ~ .v-input__control .v-input__slot {
  background-color: #a6c9a8; /* Baggrundsfarve når checkbox er valgt */
}
h2  {
  color: #ffcc00;
  font-size: 30px;
  text-align: center;
}

</style>
