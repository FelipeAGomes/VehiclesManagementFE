import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/app/login',
    component: () => import('pages/LoginPage.vue')
  },
  {
    path: '',
    redirect: '/app/login'
  }
  , {
    path: '/app',
    redirect: '/app/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'vehicles', component: () => import('src/pages/VehiclesPage.vue') },
      { path: 'settings', component: () => import('src/pages/SettingsPage.vue') },
      { path: 'sales', component: () => import('pages/SalesPage.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
