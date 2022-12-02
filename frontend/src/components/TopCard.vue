<template>
  <q-card flat class="my-card">
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>

</template>

<script setup lang="ts">
//TopCard
</script>

<style scoped lang="scss">
.my-card{
  height: 40vh;
  background-color: white;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
}
.q-card__section--vert{
  padding: 0 16px;
}

</style>
