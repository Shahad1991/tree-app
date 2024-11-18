<template>
    <div>
      <!-- Denne komponent har ingen template, da den kun bruges til at beregne point -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedItems: Array,
    },
    computed: {
      totalPoints() {
        return this.selectedItems.reduce((acc, item) => acc + item.points, 0);
      },
    },
    watch: {
      selectedItems: {
        handler() {
          this.$emit('update:points', this.totalPoints);
        },
        deep: true,
      },
    },
  };
  </script>