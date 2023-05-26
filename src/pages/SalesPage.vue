<template>
    <div class="q-pa-md">
        <q-table title="SALES" :rows="sales" :columns="columns" row-key="name">
        </q-table>
        <div class="q-pa-md q-gutter-sm" style="margin-top: 2rem;">
            <q-btn color="secondary" label="New" to="/app/salesNew" />
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { LocalStorage, QTableColumn } from 'quasar';
import { ISalesUser } from 'src/models/user/salesUser.type';
import { ILoginUser } from 'src/models/user/loginUser.type';
import salesService from 'src/services/sales/sales.service';
import { onMounted } from 'vue';

const user = LocalStorage.getItem('user') as ILoginUser;

onMounted(async () => {
    const sales = await salesService.salesUser(user.id);
    LocalStorage.set('sales', sales[1]);
});

const sales = LocalStorage.getItem('sales') as ISalesUser[];

const columns: QTableColumn[] = [
    { name: 'vehicles', align: 'center', label: 'Vehicle', field: ({ vehicles }) => vehicles.model, sortable: true },
    { name: 'data', align: 'center', label: 'Data', field: 'data', sortable: true },
    { name: 'price', align: 'center', label: 'Price', field: ({ price }) => `$${price}`, sortable: true },
    { name: 'profit', align: 'center', label: 'Profit', field: ({ profit }) => `$${profit}`, sortable: true },
]

</script>