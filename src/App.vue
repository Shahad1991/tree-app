<template>
  <NavigationsMenu></NavigationsMenu>
  <main>
    <router-view></router-view>
  </main>
  <!-- Passer totalPoints til PointsDisplay -->
  <PointsDisplay :points="totalPoints"></PointsDisplay>
</template>

<script>
import NavigationsMenu from './components/NavigationsMenu.vue';
import PointsDisplay from './components/PointsDisplay.vue';

export default {
  components: {
    NavigationsMenu,
    PointsDisplay,
  },
  created() {
  console.log('ElUse component created');
}

  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
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
