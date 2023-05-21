<template>
    <div class="q-pa-md" style="max-width: 400px">
        <h4>New vehicle</h4>
        <q-form id="form-vehicle" class="q-gutter-md" @submit="submitForm">
            <q-input filled v-model="state.form.model" label="Model" hint="Vehicle model" lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type your vehicle model']" />
            <q-input filled v-model="state.form.brand" label="Brand" hint="Vehicle Brand" lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type your vehicle Brand']" />
            <q-input filled v-model="state.form.costPrice" label="Cost Price" type="number" hint="Vehicle Cost Price"
                lazy-rules :rules="[val => val && val.length > 0 || 'Please type your vehicle cost price']" />
            <div class="q-pa-md q-gutter-sm">
                <q-btn color="secondary" label="Submit" type="submit" form="form-vehicle" />
            </div>
        </q-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NewVehicle from 'src/services/vehicles/newVehicle.service';
import { useRouter } from 'vue-router';
import { LocalStorage } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';
import LoginService from 'src/services/login/login.service';

const user = LocalStorage.getItem('user') as ILoginUser;

interface IState { form: { model: string, brand: string, costPrice: number } };

const state = ref<IState>({
    form: {
        model: "",
        brand: "",
        costPrice: 0
    }
});

const { push } = useRouter();

async function submitForm() {

    const { model, brand, costPrice } = state.value.form;
    const modelU = model.charAt(0).toUpperCase() + model.substring(1);
    const brandU = brand.charAt(0).toUpperCase() + brand.substring(1);

    const [erro, res] = await NewVehicle.newVehicle(modelU, brandU, costPrice, 0, user);

    if (erro) throw new Error(console.log(erro) + 'Authentication Failure');
    if (res.status === 201) {

        const userc = await LoginService.loginUser(user.email, user.password);
        LocalStorage.set('user', userc[1]);

        push({ path: '/app/vehicles' })
    }

}

</script>