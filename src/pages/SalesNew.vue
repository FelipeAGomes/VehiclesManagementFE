<template>
    <div class="q-pa-md" style="max-width: 400px">
        <h4>New sale</h4>
        <q-form id="form-vehicle" class="q-gutter-md" @submit="submitForm">
            <q-select filled v-model="state.form.model" map-options emit-value :options="state.options.vehicles"
                field='model' label="Vehicle" hint="Vehicle " lazy-rules :rules="[requiredRule]" />
            <q-input filled v-model="state.form.costPrice" label="Price" type="number" hint="Vehicle Price" lazy-rules
                :rules="[requiredRule]" />
            <div class="q-pa-md q-gutter-sm">
                <q-btn color="secondary" label="Submit" type="submit" form="form-vehicle" />
            </div>
        </q-form>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { LocalStorage } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';
import vehiclesService from 'src/services/vehicles/vehicles.service';
import { IVehiclesUser } from 'src/models/user/vehiclesUser.type';
import { requiredRule } from 'src/utils/form/rules/requiredRule.utils'

const user = LocalStorage.getItem('user') as ILoginUser;

// onMounted(async () => {
//     const [erro, dataVehicles] = await vehiclesService.vehiclesUser(user.id);
//     if (erro) {
//         throw new Error('Erro', erro)
//     }
//     vehicles.value = dataVehicles || []
//     console.log(dataVehicles)
// })

// const vehicles = ref<IVehiclesUser[]>([]);

const vehicles = user.vehicles
const model = vehicles.map((c: { model: any; }) => { return c.model })
console.log(model)


interface IState { form: { model: string, model2: any, costPrice: any }, options: { vehicles: any[] } };

const state = ref<IState>({
    form: {
        model: "",
        model2: vehicles,
        costPrice: null
    },
    options: {
        vehicles: user.vehicles.map((vehicle: IVehiclesUser) => {
            return {
                label: vehicle.model,
                value: vehicle.id
            }
        })
    }
});

const { push } = useRouter();

async function submitForm() {

    // const { model, costPrice } = state.value.form;
    // const modelU = model.charAt(0).toUpperCase() + model.substring(1);
    // const brandU = brand.charAt(0).toUpperCase() + brand.substring(1);

    // const [erro, res] = await NewVehicle.newVehicle(modelU, brandU, costPrice, 0, user);

    // if (erro) throw new Error(console.log(erro) + 'Authentication Failure');
    // if (res.status === 201) {

    //     const userc = await LoginService.loginUser(user.email, user.password);
    //     LocalStorage.set('user', userc[1]);

    //     push({ path: '/app/vehicles' })
    // }
    push({ path: '/app/sales' })
}

</script>