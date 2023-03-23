<template>
    <h1>Home</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as api from '../api/requests';
const response = api.user('1');

onMounted(async () => {
    console.log(await response);
})

</script>