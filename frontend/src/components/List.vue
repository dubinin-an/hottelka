<template>
  <div class="q-pa-md">
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      row-key="index"
      virtual-scroll
      :virtual-scroll-sticky-size-start="48"
      class="my-sticky-virtscroll-table"
    />
  </div>
</template>

<script setup lang="ts">
const rows = [
  {
    icon: '',
    wish: 'Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: 'Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: 'Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: 'Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: 'Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: 'Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: 'Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: 'Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
]
const columns = [
  { name: 'icon', align: 'center', field: 'icon' },
  {
    name: 'wish',
    required: true,
    label: 'wish',
    align: 'left',
    field: row => row.wish,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'cost', align: 'center', label: 'cost', field: 'cost', sortable: true },
  { name: 'bank', label: '%', field: 'bank', sortable: true },
]
</script>

<style scoped lang="scss">

.my-sticky-virtscroll-table {  /* height or max-height is important */
  height: 410px;

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    background-color: #fff;
  }
  thead tr th {
    position: sticky;
    z-index: 1;
  }  /* this will be the loading indicator */
  thead tr:last-child th {    /* height of all previous header rows */
    top: 48px;
  }
  thead tr:first-child th {
    top: 0;
  }
}

</style>
