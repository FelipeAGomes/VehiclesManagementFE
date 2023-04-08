<template>
    <h2>Home</h2>
    <h4>Welcome {{ user.firstName }} {{ user.lastName }}</h4>
    <h4>Your id: {{ user.id }}</h4>
    <h4>Your email: {{ user.email }}</h4>
    <h4>Your profit is : ${{ user.profitTotal }}</h4>
</template>

<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';

const user = LocalStorage.getItem('user') as ILoginUser;

</script>