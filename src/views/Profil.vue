<template>
  <div class="bg-white min-h-screen">
    <!-- Navbar at the top -->
    <Navbar />
    
    <!-- Main Content Area with padding to avoid overlap with the fixed Navbar -->
    <div class="pt-16">
        <ProfilSide />
    </div>
  </div>
</template>

<script setup>
import ProfilSide from '../components/profil/ProfilSide.vue';
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>
/* Optional: Custom styles for the page */
</style>
