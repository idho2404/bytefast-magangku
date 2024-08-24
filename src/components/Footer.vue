<template>
  <footer class="bg-[#1D1A44] text-white py-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-start px-1">
      <!-- Left Section: Logo and Contact Info -->
      <div class="flex flex-col md:flex-row items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0 mb-6 md:mb-0">
        <img src="/src/assets/image/image.png" alt="Logo" class="w-45d h-auto"/>
        <div>
          <h3 class="font-bold text-lg">Kalteng Satu Data</h3>
          <p class="mt-2">
            <span class="block">Email: <a href="mailto:satudata@kalteng.go.id" class="text-gray-300">satudata@kalteng.go.id</a></span>
            <span class="block">Alamat: Gedung Smart Province</span>
            <span class="block">Jl. Cilik Riwut No.88, Bukit Tunggal,</span>
            <span class="block">Kec. Jekan Raya, Kota Palangka Raya,</span>
            <span class="block">Kalimantan Tengah 74874</span>
          </p>
        </div>
      </div>

      <!-- Middle Section: Links -->
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
        <div>
          <h4 class="font-bold text-lg mb-4">Satu Data Kalteng</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white">Tentang</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Ketentuan Penggunaan</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Kebijakan Privasi</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4">Telusuri Satu Data</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white">Dataset</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Artikel</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Kategori Data</a></li>
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
