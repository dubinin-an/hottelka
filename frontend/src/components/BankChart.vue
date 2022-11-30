<template>
  <div class="row justify-between items-center">
    <div class="col-4 text-h6">{{$t('kopilka')}}</div>
    <div
      class="col-5 text-accent bg-accent-light q-px-md round"
      @click="addMony"
    >
      <div class="row justify-between items-center">
        <div class="col-auto text-h6">
          5000
        </div>
        <div class="col-auto">
          <q-icon flat round color="accent" size="xs" name="mdi-hand-coin-outline" />
        </div>
      </div>

    </div>
  </div>

  <q-dialog v-model="addMonyDialog" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">
          {{$t('addMony')}}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat :label="$t('cancel')" v-close-popup />
        <q-btn flat :label="$t('add')" @click="add" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">

import {ref} from "vue";

const addMonyDialog = ref(false)
const addMony = () => {
  addMonyDialog.value = true
}
const add = () => {

}

</script>

<style scoped lang="scss">
.round{
  border-radius: 20px;
}
</style>
