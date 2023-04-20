<template>
    <div class="q-pa-md">
        <h4 style="padding: 0;">Settings</h4>
        <div class="q-gutter-md row items-start" style="margin-top: 1rem;">
            <q-input filled v-model="user.firstName" hint="First Name" disable />
            <q-input filled v-model="user.lastName" hint="Last Name" disable />
        </div>
        <div class="q-gutter-md row items-start" style="margin-top: 1rem;">
            <q-input filled v-model="user.email" hint="Email" disable />
            <q-input filled v-model="user.password" hint="Password" disable />
        </div>
        <div class="q-pa-md q-gutter-sm" style="margin-top: 2rem;">
            <q-btn color="secondary" label="Update" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';

const user = LocalStorage.getItem('user') as ILoginUser;

</script>