<template>
  <div class="points-display">
    <img src="../../assets/fa-solid_award.svg" alt="Award Icon" />
    <p>{{ points }} points</p>
  </div>
</template>

<script>
export default {
  computed: {
    points() {
      return this.$store.state.totalPoints;
    },
  },
};
</script>

<style scoped>
.points-display {
  text-align: center;
  margin-top: 20px;
}

.points-display img {
  width: 50px;
  height: 50px;
}

.points-display p {
  font-size: 24px;
  font-weight: bold;
}
</style>