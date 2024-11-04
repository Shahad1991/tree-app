<!-- src/components/PointsDisplay.vue -->
<template>
    <v-alert type="success" class="mt-4">
      Samlede point: {{ points }}
    </v-alert>
  </template>
  
  <script>
  export default {
    props: {
      points: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    
  };
  </script>
  <style scoped>
  .points {
  position: fixed; /* Fast position til pointdisplay */
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #4caf50; /* Grøn baggrund */
  color: black; /* Hvid tekstfarve */
  padding: 16px; /* Padding for pointdisplay */
  text-align: center;
-top: 60px;
}
</style>
  