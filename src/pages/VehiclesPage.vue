<template>
  <div class="q-pa-md">
    <q-table title="VEHICLES" :rows="vehicles" :columns="columns">

    </q-table>
  </div>
</template>
  
<script setup lang="ts">
import { LocalStorage, QTableColumn } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';
import { IVehiclesUser } from 'src/models/user/vehiclesUser.type';
import vehiclesService from 'src/services/vehicles/vehicles.service';
import { onMounted, ref } from 'vue';

const user = LocalStorage.getItem('user') as ILoginUser;

onMounted(async () => {
  const [erro, dataVehicles] = await vehiclesService.vehiclesUser(user.id);
  if (erro) {
    throw new Error('Erro', erro)
  }
  vehicles.value = dataVehicles || []
})

const vehicles = ref<IVehiclesUser[]>([]);

const columns: QTableColumn[] = [
  { name: 'model', align: 'center', label: 'Model', field: 'model', sortable: true },
  { name: 'brand', align: 'center', label: 'Brand', field: 'brand', sortable: true },
  { name: 'costPrice', label: 'CostPrice', field: 'costPrice', sortable: true },
  { name: 'totalExtraCost', label: 'Total Extra Cost', field: 'totalExtraCost', sortable: true },
  { name: 'totalCost', label: 'TotalCost', field: 'totalCost', sortable: true },
  { name: 'status', label: 'Status', field: 'status', sortable: true },

]

</script>