<template>
  <div class="q-pa-md">
    <q-table title="VEHICLES" :rows="vehicles" :column="columns" row-key="name">

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="secondary" round dense @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>
  
<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';
import { IVehiclesUser } from 'src/models/user/vehiclesUser.type';
import vehiclesService from 'src/services/vehicles/vehicles.service';
import { onMounted } from 'vue';

const user = LocalStorage.getItem('user') as ILoginUser;

onMounted(async () => {
  const vehicles = await vehiclesService.vehiclesUser(user.id)
  LocalStorage.set('vehicles', vehicles[1]);
})

const vehicles = LocalStorage.getItem('vehicles') as IVehiclesUser;
console.log(vehicles)

const columns = [
  {
    name: 'Model',
    required: true,
    label: 'Model',
    align: 'left',
    field: (row: { name: string; }) => row.name,
    format: (val: string) => `${val}`,
    sortable: true
  },
  { name: 'brand', align: 'center', label: 'Brand', field: 'brand', sortable: true },
  { name: 'costPrice', label: 'CostPrice', field: 'costPrice', sortable: true },
  // { name: 'extraCost', label: 'ExtraCost', field: 'extraCost' },
  { name: 'totalCost', label: 'TotalCost', field: 'totalCost' },
  { name: 'status', align: 'left', label: 'Status', field: 'status' },

]

// const rows = [
//   {
//     name: 'GLA250',
//     brand: 'Mercedes',
//     costPrice: 1500.5,
//     extraCost: 1650.0,
//     totalCost: 3150.5,
//     status: 'SOLD',
//   },
//   {
//     name: 'A6',
//     brand: 'Audi',
//     costPrice: 9900.5,
//     extraCost: 1050.0,
//     totalCost: 10950.5,
//     status: 'SOLD',
//   },
//   {
//     name: 'V40',
//     brand: 'Volvo',
//     costPrice: 90900.5,
//     extraCost: 0,
//     totalCost: 90900.5,
//     status: 'TO SELL',
//   },
//   {
//     name: 'GLA350',
//     brand: 'Mercedes',
//     costPrice: 1500.5,
//     extraCost: 1650.0,
//     totalCost: 3150.5,
//     status: 'SOLD',
//   },
//   {
//     name: 'A1',
//     brand: 'Audi',
//     costPrice: 9900.5,
//     extraCost: 1050.0,
//     totalCost: 10950.5,
//     status: 'SOLD',
//   },
//   {
//     name: 'V60',
//     brand: 'Volvo',
//     costPrice: 90900.5,
//     extraCost: 0,
//     totalCost: 90900.5,
//     status: 'TO SELL',
//   },
//   {
//     name: 'GLA550',
//     brand: 'Mercedes',
//     costPrice: 1500.5,
//     extraCost: 1650.0,
//     totalCost: 3150.5,
//     status: 'SOLD',
//   },
//   {
//     name: 'A7',
//     brand: 'Audi',
//     costPrice: 9900.5,
//     extraCost: 1050.0,
//     totalCost: 10950.5,
//     status: 'SOLD',
//   },
//   {
//     name: 'V70',
//     brand: 'Volvo',
//     costPrice: 90900.5,
//     extraCost: 0,
//     totalCost: 90900.5,
//     status: 'TO SELL',
//   },
//   {
//     name: 'GLA200',
//     brand: 'Mercedes',
//     costPrice: 1500.5,
//     extraCost: 1650.0,
//     totalCost: 3150.5,
//     status: 'SOLD',
//   },
//   {
//     name: 'A2',
//     brand: 'Audi',
//     costPrice: 9900.5,
//     extraCost: 1050.0,
//     totalCost: 10950.5,
//     status: 'SOLD',
//   },
//   {
//     name: 'XC40',
//     brand: 'Volvo',
//     costPrice: 90900.5,
//     extraCost: 0,
//     totalCost: 90900.5,
//     status: 'TO SELL',
//   },
// ]
</script>