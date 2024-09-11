<template>
  <footer class="bg-[#512E91] dark:bg-black text-white py-8 px-12 py-20 lg:py-10">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-start px-1">
      <!-- Left Section: Logo and Contact Info -->
      <div class="flex flex-col md:flex-row items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0 mb-6 md:mb-0">
        <img src="/src/assets/image/image.png" alt="Logo" class="w-24 h-24 text-color-white"/>
        <div>
          <h3 class="font-bold text-lg">Link Internship</h3>
          <p class="mt-2">
            <span class="block">Email: <a href="#" class="text-gray-300">linkintern@gmail.com</a></span>
            <span class="block">Alamat: Gedung Smart Province</span>
            <span class="block">Jl. Cilik Riwut No.88, Bukit Tunggal,</span>
            <span class="block">Kec. Jekan Raya, Kota Surabaya,</span>
            <span class="block">Jawa Timur</span>
          </p>
        </div>
      </div>

      <!-- Middle Section: Links -->
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
        <div>
          <h4 class="font-bold text-lg mb-4">Link Internship</h4>
          <ul class="space-y-2">
            <li><a href="/" class="text-gray-300 hover:text-white">Beranda</a></li>
            <li><a href="/administrasi" class="text-gray-300 hover:text-white">Administrasi</a></li>
            <li><a href="/berita" class="text-gray-300 hover:text-white">Berita</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4">Tentang</h4>
          <ul class="space-y-2">
            
            <li><a href="#" class="text-gray-300 hover:text-white">Dosen Pembimbing</a></li>
            <li><a href="/profil" class="text-gray-300 hover:text-white">Profil</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4">Sosial Media</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white">Facebook</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Instagram</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Youtube</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue';

// Props to allow customization of the footer
const props = defineProps({
  logoSrc: {
    type: String,
    required: true, // The logo source is required
  },
});
</script>

<style scoped>
/* Additional styles if necessary */
</style>
