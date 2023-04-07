<template>
    <h1>Home</h1>
    <h2>{{ user.id }}</h2>
    <h2>{{ user.email }}</h2>
    <h2>{{ user.firstName }} {{ user.lastName }}</h2>
</template>

<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { ILoginUser } from 'src/models/user/loginUser.type';

const user = LocalStorage.getItem('user') as ILoginUser;
console.log(user);
</script>