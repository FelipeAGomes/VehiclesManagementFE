<template>
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
            <q-item clickable v-ripple to="/app/home">
                <q-item-section avatar>
                    <q-icon name="home" />
                </q-item-section>
                <q-item-section>
                    Home
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/app/vehicles">
                <q-item-section avatar>
                    <q-icon name="inbox" />
                </q-item-section>
                <q-item-section>
                    Vehicles
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/app/sales">
                <q-item-section avatar>
                    <q-icon name="star" />
                </q-item-section>
                <q-item-section>
                    Sales
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/app/settings">
                <q-item-section avatar>
                    <q-icon name="settings" />
                </q-item-section>
                <q-item-section>
                    Settings
                </q-item-section>
            </q-item>

        </q-list>
    </q-scroll-area>
</template>

<script setup lang="ts">

</script>