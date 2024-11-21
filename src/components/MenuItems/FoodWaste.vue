<template>
  <v-app class="foodwaste" id="foodwaste">
    <v-container fluid fill-height :style="{  width: '100%', padding: '25px' }">
      <v-col cols="12" md="8" lg="4" class="text-center">
        <h2 class="question">Hvordan har dit madspild været?</h2>
      </v-col>

      <CheckList :style="{ backgroundColor: '#E59182', width: '100%' }"
          :checklistItems="checklistItems"
          :selectedItems="selectedItems"
          @update:selectedItems="updateSelectedItems"
        />
    

      <ArrowComponent nextRoute="/summaryUser" previousRoute="/foodWaste" />

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
      checklistItems: [],
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
  created() {
    this.fetchChecklistItems();
  },
  methods: {
    async fetchChecklistItems() {
      try {
        const response = await fetch('http://localhost:3000/api/checklists/foodwaste');
        const data = await response.json();
        this.checklistItems = data;
      } catch (error) {
        console.error('Error fetching checklist items:', error);
      }
    },
    updateSelectedItems(newSelectedItems) {
      this.$store.dispatch('updateSelectedItems', newSelectedItems); // Update selected items in Vuex
      this.$store.dispatch('updateTotalPoints'); // Recalculate total points after updating selected items
    },
  },
};
</script>

<style scoped>
.v-container {
  justify-content: center;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  
}

.foodwaste {
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


</style>