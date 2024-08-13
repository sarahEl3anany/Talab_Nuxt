<template>
  <global-layout>
    <router-view />
  </global-layout>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import globalLayout from "./shared/layouts/global-layout.vue";
</script>