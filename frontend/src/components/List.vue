<template>
  <div class="q-pa-md">
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
      <template v-slot:item="props">
<!--        <div style="display: flex" :props="props">-->
<!--          {{props.row}}-->
<!--          <q-btn round>-->
<!--            <q-avatar size="28px">-->
<!--              <img :src="props.row.icon" />-->
<!--            </q-avatar>-->
<!--          </q-btn>-->
<!--          <div>-->
<!--            {{}}-->
<!--          </div>-->

<!--        </div>-->
        <q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img :src="props.row.icon" />
            </q-avatar>
          </q-item-section>

          <q-item-section style="width: 100%">
            <q-item-label>{{props.row.wish}}</q-item-label>
<!--            <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>-->
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>{{props.row.cost}}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>
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
            </q-item-label>
          </q-item-section>
        </q-item>

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
