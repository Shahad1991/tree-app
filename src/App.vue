<template>
  <NavigationsMenu></NavigationsMenu>
  <home-side></home-side>
  
  <router-view @update:points="updatePoints"></router-view>
 
  
 
  <!-- Passer totalPoints til PointsDisplay -->
</template>

<script>
import HomeSide from './components/HomeSide.vue';
import NavigationsMenu from './components/NavigationsMenu.vue';


export default {
  components: {
    NavigationsMenu,
    HomeSide,
   
  },
  data() {
    return {
      totalPoints: 0,
    };
  },
  methods: {
    updatePoints(newPoints) {
      this.totalPoints = newPoints;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  
}
body {
  background-color: #f0f0f0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
  align-content: center;
  height: fit-content;
}
</style>