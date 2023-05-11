<template>
    <q-img class="absolute-top  " src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Felipe Gomes</div>
            <div>@felipeagomes</div>
        </div>
    </q-img>
    <q-img class="absolute-bottom" style="height: 150px">
        <lottie-player id="firstLottie" src="https://assets4.lottiefiles.com/packages/lf20_um6xzlk1.json" loop
            autoplay>"></lottie-player>
    </q-img>
</template>

<script setup lang="ts">
import '@lottiefiles/lottie-player';
</script>