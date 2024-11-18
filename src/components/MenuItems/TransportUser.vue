<template>
    <v-app class="transport" id="transport">
      <v-container fluid fill-height :style="{ backgroundColor: '#E9E5E5', width: '100%', padding: '25px' }">
        <v-col cols="12" md="8" lg="4" class="text-center">
          <h2 class="question">Hvordan har din transport været?</h2>
        </v-col>
  
        <v-col
          cols="12"
          md="8"
          lg="4"
          align="center"
          :style="{ backgroundColor: '#E59182', borderRadius: '25px', padding: '24px', width: '485px', marginBottom: '24px' }"
        >
          <CheckList
            :checklistItems="checklistItems"
            :selectedItems="selectedItems"
            @update:selectedItems="updateSelectedItems"
          />
        </v-col>
  
        <ArrowComponent nextRoute="/ScorepointComponent" previousRoute="/UsedThingComponent" />
  
        <PointDisplay :points="totalPoints" />
  
        <CheckList
          :style="{ backgroundColor: '', flexDirection: 'column', alignItems: 'center' }"
          :checklistItems="checklistItems"
          :selectedItems="selectedItems"
          @update:selectedItems="updateSelectedItems"
        />
        <ArrowComponent nextRoute="/ScorepointComponent" previousRoute="/UsedThingComponent" />
        <CalculatePoints
          :selectedItems="selectedItems"
          @update:points="emitUpdatePoints"
        />
        <PointsDisplay :points="totalPoints" />
      </v-container>
    </v-app>
  </template>
  
  <script>
  import CheckList from './CheckList.vue';
  import PointsDisplay from './PointsDisplay.vue';
  import ArrowComponent from '../ArrowComponent.vue';
  
  export default {
    components: {
      PointsDisplay,
      CheckList,
      ArrowComponent,
    },
    data() {
      return {
        checklistItems: [
          { id: 1, name: "Brug offentlig transport", score: 100 },
          { id: 2, name: "Cykel i stedet for at køre", score: 200 },
          { id: 3, name: "Gå i stedet for at køre", score: 150 },
          { id: 4, name: "Del bil med andre", score: 75 },
          { id: 5, name: "Brug elbil", score: 50 },
          { id: 6, name: "Reducer flyrejser", score: 100 },
          { id: 7, name: "Brug samkørsel", score: 50 },
        ],
      };
    },
    computed: {
      selectedItems() {
        return this.$store.state.selectedItems; // Get selected items from Vuex state
      },
      totalPoints() {
        return this.$store.getters.getTotalPoints; // Get total points from Vuex getter
      },
    },
    methods: {
      updateSelectedItems(newSelectedItems) {
        this.$store.dispatch('updateSelectedItems', newSelectedItems); // Update selected items in Vuex
        this.$store.dispatch('updateTotalPoints'); // Recalculate total points after updating selected items
      },
      emitUpdatePoints(newPoints) {
        this.totalPoints = newPoints;
        this.$emit('update:points', newPoints);
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
  
  .transport {
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
  
  .checklist-card {
    margin: 3px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }
  
  .checklist-card.selected {
    background-color: #4caf50;
    color: white;
  }
  
  .v-row {
    margin-top: 20px;
  }
  
  .custom-checkbox input:checked ~ .v-input__control .v-input__slot {
    background-color: #a6c9a8;
  }
  
  .v-label {
    color: black;
  }
  </style>