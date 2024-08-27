<template>
    <Navbar />

    <div class="pt-16">
        <BeritaKomponen />
    </div>
    <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import BeritaKomponen from '../components/berita/BeritaKomponen.vue';
</script>
