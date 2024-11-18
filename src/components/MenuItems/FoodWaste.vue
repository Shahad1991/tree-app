<template>
    <h2>Hvordan har dit madspild været? </h2>
    <Checklist
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
  import Checklist from './CheckList.vue';
  import CalculatePoints from './CalculatePoints.vue';
  
  export default {
    components: {
      PointsDisplay,
      Checklist,
      CalculatePoints,
    },
    data() {
      return {
        checklistItems: [
          { name: "Køb lokale råvarer", points: 100 },
          { name: "Spis vegetarisk", points: 200 },
          { name: "Undgå madspild", points: 150 },
          { name: "Køb økologiske produkter", points: 75 },
          { name: "Lav hjemmelavet mad frem for færdigretter", points: 50 },
          { name: "Brug genanvendelige emballager", points: 100 },
          { name: "Drik vand fra hanen i stedet for flaskevand", points: 50 },
          { name: "Reducer kødindtag", points: 150 },
        ],
        selectedItems: [],
        totalPoints: 0,
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
    color: #E59182; /* Text color for the title */
    margin: 20px; /* Space below the title */
  }

  .v-container {
    justify-content: center;
    margin: 10px; /* Reduced margin for smaller screens */
    background-color: #E59182; /* Background color */
    padding: 20px; /* Padding around the container */
    border: 5px solid #ccc; /* Border around the container */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }

  .checklist-card {
    margin: 3px 0; /* Margin for each checklist item */
    padding: 10px; /* Padding inside the card */
    border: 1px solid #ccc; /* Border around the checklist card */
    border-radius: 8px; /* Rounded corners for cards */
    transition: background-color 0.3s ease; /* Smooth transition for background color */
  }

  .checklist-card.selected {
    background-color: #4caf50; /* Green color when selected */
    color: white; /* Change text color to white */
  }

  .custom-checkbox {
    color: #4caf50; /* Default color for checkbox */
  }

  .custom-checkbox input:checked ~ .v-input__control .v-input__slot {
    background-color: #a6c9a8; /* Background color when checkbox is checked */
  }

</style>
