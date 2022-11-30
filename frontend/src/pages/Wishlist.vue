<template>
  <TopCard>
    <template v-slot:default>
      <BankChart/>
    </template>
  </TopCard>
  <List/>
</template>

<script setup lang="ts">
import TopCard from "components/TopCard.vue";
import BankChart from "components/BankChart.vue";
import List from "components/List.vue";
</script>

<style scoped lang="scss">

</style>
