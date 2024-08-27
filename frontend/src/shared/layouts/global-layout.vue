<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar app>
     <!-- logo --->
  <router-link to="/">
     <v-img src="../assets/logo.svg" width="110px" />
  </router-link>
      <!-- <div class="bg-blue-500 shadow-md my-auto mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex space-x-2 w-12 h-12">
        <RouterLink to="/" class="rounded-full">
          <img src="@/assets/favicon.ico" />
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/register"
          class="inline-block border border-blue-900 rounded py-1 px-3 bg-gray-50 text-blue-900">
          Register
          <font-awesome-icon class="pl-3" :icon="['fas', 'arrow-right']" />
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/login" class="inline-block border border-blue-900 rounded py-1 px-3 bg-gray-50 text-blue-900">
          Login
          <font-awesome-icon class="pl-3" :icon="['fas', 'arrow-right']" />
        </RouterLink>
      </div>
      </div> -->
    </v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <slot></slot>
    </v-main>
    <v-footer name="footer" app>
      <div class="fixed bottom-0 left-0 z-20 w-full p-4 bg-blue-500 border-t shadow-md md:flex md:items-center md:justify-between md:p-6">
        <span class="text-sm text-gray-50 sm:text-center">© 2024 <a href="/" class="hover:underline">Sarah™</a>. All
          Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-50 sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
