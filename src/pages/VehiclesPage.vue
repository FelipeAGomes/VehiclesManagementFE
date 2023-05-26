<template>
  <div class="q-pa-md">
    <q-table title="VEHICLES" :rows="vehicles" :columns="columns" :rows-per-page-options="[10, 20, 50, 100]">
    </q-table>
    <div class="q-pa-md q-gutter-sm" style="margin-top: 2rem;">
      <q-btn color="secondary" label="New" to="/app/vehiclesNew" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { all } from 'axios';
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
  { name: 'costPrice', align: 'center', label: 'CostPrice', field: ({ costPrice }) => `$${costPrice}`, sortable: true },
  { name: 'totalExtraCost', align: 'center', label: 'Extra Cost', field: ({ totalExtraCost }) => `$${totalExtraCost}`, sortable: true },
  { name: 'totalCost', align: 'center', label: 'Total Cost', field: ({ totalCost }) => `$${totalCost}`, sortable: true },
  { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },

]

</script>