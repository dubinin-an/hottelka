<template>
  <div class="q-pa-md borderBottom">
    <q-table
      grid
      grid-header
      flat
      square
      :rows="rows"
      :columns="columns"
      row-key="index"
      hide-pagination
      class="my-sticky-virtscroll-table bg-transparent"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="text-weight-bolder text-subtitle1"
            :style="`width: ${col.width} !important`"
          >
            <span class="text-weight-bolder text-subtitle1">{{ $te(col.name) ? $t(col.name) : '&ensp;	' }}</span>
          </q-th>
        </q-tr>
      </template>
      <template v-slot:item="props">
        <div class="row justify-between items-center" style="width: 100%" :props="props">
          <q-btn round>
            <q-avatar size="28px">
              <img :src="props.row.icon" />
            </q-avatar>
          </q-btn>
          <div class="col-auto">
            {{props.row.wish}}
          </div>
          <div class="col-auto">
            {{props.row.cost}}
          </div>
          <div class="col-auto">
            <q-knob
              :min="20"
              :max="70"
              v-model="props.row.bank"
              show-value
              size="50px"
              :thickness="0.22"
              color="teal"
              track-color="grey-3"
              class="q-ma-md"
            />
          </div>
        </div>
      </template>
    </q-table>

  </div>
</template>

<script setup lang="ts">
const rows = [
  {
    icon: '',
    wish: '1Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: '2Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: '3Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: '4Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: '5Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: '6Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
  {
    icon: '',
    wish: '7Frozen Yogurt',
    cost: 35000,
    bank: 30,
  },
]
const columns = [
  { name: 'icon', align: 'center', field: 'icon'},
  {
    name: 'wish',
    required: true,
    label: 'wish',
    align: 'left',
    field: row => row.wish,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'cost', align: 'center', label: 'cost', field: 'cost', sortable: true},
  { name: 'bank', label: '%', field: 'bank'},
]
</script>
<style>
.borderBottom .q-table--grid .q-table__middle{
  border-bottom: 1px solid darkgray !important;
}
</style>
<style scoped lang="scss">


.my-sticky-header-table::v-deep {
  tbody {
    max-height: 86vh;
    background-color: transparent;
    color: $secondary;
  }

  .q-item__section--side{
    color: $secondary;
  }

  thead tr:first-child th {
    background-color: $accent;
    color: $secondary;
    font-weight: bold;
    z-index: 1000;
    padding: 20px;
  }
  thead tr:first-child th{
    position: sticky;
    top: 0;
  }

}
</style>
