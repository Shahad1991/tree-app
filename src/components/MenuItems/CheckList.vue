<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" v-for="item in checklistItems" :key="item.name">
        <v-card class="checklist-card" :class="{ 'selected': localSelectedItems.includes(item) }">
          <v-checkbox
            v-model="localSelectedItems"
            :label="item.name"
            :value="item"
            class="custom-checkbox"
            @change="updateSelectedItems"
          ></v-checkbox>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    checklistItems: Array,
    selectedItems: Array,
  },
  data() {
    return {
      localSelectedItems: [...this.selectedItems], // Kopierer selectedItems
    };
  },
  watch: {
    selectedItems: {
      handler(newVal) {
        this.localSelectedItems = [...newVal]; // Opdaterer lokal kopi
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    updateSelectedItems() {
      // Udsender opdaterede valgte elementer til forælderen
      this.$emit('update:selectedItems', this.localSelectedItems);
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
</style>
