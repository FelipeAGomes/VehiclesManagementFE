<template>
    <h4>You have {{ sales.length }} sales</h4>
    <h4>You have {{ vehicles.length }} sales</h4>
    <h4>Your profis is: £{{ user.profitTotal }}</h4>
</template>

<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';
import { ISalesUser } from 'src/models/user/salesUser.type';
import { IVehiclesUser } from 'src/models/user/vehiclesUser.type';
import salesService from 'src/services/sales/sales.service';
import vehiclesService from 'src/services/vehicles/vehicles.service';
import { onMounted } from 'vue';

const user = LocalStorage.getItem('user') as ILoginUser;

onMounted(async () => {
    const sales = await salesService.salesUser(user.id);
    const vehicles = await vehiclesService.vehiclesUser(user.id);
    LocalStorage.set('vehicles', vehicles[1]);
    LocalStorage.set('sales', sales[1]);
});

const sales = user.sales;
const vehicles = user.vehicles;


</script>