<template>
    <div class="default">
        <Header></Header>
        <slot />
        <Footer></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>