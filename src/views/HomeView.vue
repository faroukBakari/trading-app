<script setup lang="ts">
import { version } from '../../public/charting_library'
// Make sure the path is correct; update if necessary
import TVChartContainer from '../components/TVChartContainer.vue';
</script>

<template>
  <div class="home">
    <h1>Welcome to Trading App!</h1>
    <p>Charting library version: {{ version() }}</p>
    <TVChartContainer />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #42b983;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

p {
  font-size: 1.5rem;
  color: #2c3e50;
}
</style>
