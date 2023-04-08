<template>
    <h1>Home</h1>
    <h2>Welcome {{ user.firstName }} {{ user.lastName }}</h2>
    <h2>Your id: {{ user.id }}</h2>
    <h2>Your email: {{ user.email }}</h2>
    <h2>Your profit is : R$ {{ user.profitTotal }}</h2>
</template>

<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';

const user = LocalStorage.getItem('user') as ILoginUser;

</script>