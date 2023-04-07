<template>
    <div class="bg-cyan-8 window-height window-width row justify-center items-center">
        <div class="column window-height window-width row justify-center items-center">
            <div class="row">
                <h5 class="text-h5 text-white q-my-md">Vehicles Management</h5>
            </div>
            <div class="row">
                <q-card square bordered class="q-pa-lg shadow-1">
                    <q-card-section>
                        <q-form id="form-login" class="q-gutter-md" @submit="submitForm">
                            <q-input square filled clearable v-model="state.form.email" type="email" label="email"
                                :rules="[requiredRule, emailRule]" />
                            <q-input square filled clearable v-model="state.form.password" type="password" label="password"
                                :rules="[requiredRule]" />
                        </q-form>
                    </q-card-section>
                    <q-card-actions class="q-px-md">
                        <q-btn unelevated color="cyan-8" size="lg" class="full-width" label="Login" form="form-login"
                            type="submit" />
                    </q-card-actions>
                    <q-card-section class="text-center q-pa-none">
                        <p class="text-grey-6">Not registered? Created an Account</p>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { emailRule } from 'src/utils/form/rules/emailRule.utils';
import { requiredRule } from 'src/utils/form/rules/requiredRule.utils';
import { ref } from 'vue';
import LoginService from 'src/services/login/login.service';
import { LocalStorage } from 'quasar';
import { useRouter } from 'vue-router';

interface IState { form: { email: string | null, password: string | null } };


const state = ref<IState>({
    form: {
        email: null,
        password: null
    }
})

const { push } = useRouter();

async function submitForm() {
    const { email, password } = state.value.form;

    if (!email || !password) throw new Error('Form empty');

    const [erro, user] = await LoginService.loginUser(email, password);

    if (erro) throw new Error('Authentication Failure');

    LocalStorage.set('user', user);

    push({ path: '/app/home' })
}

</script>

<style>
.q-card {
    width: 360px;
}
</style>