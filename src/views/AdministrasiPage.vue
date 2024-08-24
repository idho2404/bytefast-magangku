<template>
  <div class="bg-white min-h-screen">
    <!-- Navbar at the top -->
    <Navbar />
    
    <!-- Main Content Area with padding to avoid overlap with the fixed Navbar -->
    <div class="pt-16">
        <AdministrasiSide />
    </div>
  </div>
</template>

<script setup>
import AdministrasiSide from '../components/administrasi/AdministrasiSide.vue';
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>
/* Optional: Custom styles for the page */
</style>
