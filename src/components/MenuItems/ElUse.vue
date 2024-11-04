<template>
  <h2>Hvordan har dit El-forbrug været? </h2>
  <CheckList
    :checklistItems="checklistItems"
    :selectedItems="selectedItems"
    @update:selectedItems="updateSelectedItems"
  />
  <CalculatePoints
    :selectedItems="selectedItems"
    @update:points="emitUpdatePoints"
  />
  <PointsDisplay :points="totalPoints" />
</template>

<script>
import PointsDisplay from '../PointsDisplay.vue';
import CheckList from './CheckList.vue';
import CalculatePoints from './CalculatePoints.vue';

export default {
  components: {
    PointsDisplay,
    CheckList,
    CalculatePoints,
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
    updateSelectedItems(newSelectedItems) {
      this.selectedItems = newSelectedItems;
    },
    emitUpdatePoints(newPoints) {
      this.totalPoints = newPoints;
      this.$emit('update:points', newPoints);
    },
  },
};
</script>

<style scoped>
  h2 {
    text-align: center;
    color: #1E7F85; /* Title color */
    margin: 20px; /* Space below the title */
  }

  .v-container {
    justify-content: center;
    margin: 20px; /* Reduced margin for mobile */
    background-color: #1E7F85; /* Background color */
    padding: 20px; /* Padding inside the container */
    border: 3px solid #ccc; /* Border */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }

  .checklist-card {
    margin: 5px 0; /* Margin for each checklist item */
    padding: 8px; /* Padding inside the card for touch */
    border: 1px solid #ccc; /* Border around the checklist card */
    border-radius: 8px; /* Rounded corners */
    transition: background-color 0.3s ease; /* Smooth transition */
  }

  .checklist-card.selected {
    background-color: #4caf50; /* Green color when selected */
    color: white; /* Text color when selected */
  }

  .custom-checkbox {
    color: #4caf50; /* Checkbox color */
  }

  .custom-checkbox input:checked ~ .v-input__control .v-input__slot {
    background-color: #a6c9a8;
  }
  </style>
