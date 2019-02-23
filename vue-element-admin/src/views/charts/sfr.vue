<template>
  <div>
    <h1>Hello</h1>
    <div class="chart-container">
      <chart height="100%" width="100%"/>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Charts/lineMarker'
import Chart1 from '@/components/Charts/keyboard'

export default {
  name: 'LineChart',
  components: { Chart, Chart1 }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

