<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->
    <div class="q-pa-md">
      <q-layout view="lHh Lpr lff">
        <q-header elevated class="bg-cyan-8">
          <q-toolbar>
            <q-toolbar-title>Vehicles Management</q-toolbar-title>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="400">
          <!-- COMPONENT MENU -->
          <menu-links />
          <!-- COMPONENT AVATAR -->
          <img-avatar />
        </q-drawer>
        <q-page-container>
          <q-page padding>
            <router-view />
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MenuLinks from '../components/MenuLinks.vue';
import ImgAvatar from '../components/ImgAvatar.vue';

const drawer = ref(false)

</script>
