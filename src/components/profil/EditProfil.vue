<template>
  <div class="bg-white rounded-lg shadow-lg dark:bg-black p-6">
    <!-- Header -->
    <h2 class="text-center text-2xl font-semibold text-black mb-6">PROFIL</h2>

    <!-- Profile Detail Section -->
    <div class="flex flex-col md:flex-row md:space-x-6">
      <!-- Profile Picture and Basic Info -->
      <div class="flex flex-col items-center md:w-1/3">
        <div class="relative w-24 h-24 bg-gray-200 rounded-full mb-4">
          <img src="../../assets/image/foto.png" alt="Profile Picture" class="w-full h-full rounded-full object-cover">
          <input type="file" class="absolute inset-0 opacity-0 cursor-pointer" title="Unggah Foto Profil">
        </div>
        <div class="text-center">
          <h3 class="text-lg font-semibold text-black dark:text-white">Akma Batrisyia Jazima</h3>
          <p class="text-gray-700 dark:text-white">222111871</p>
          <p class="text-gray-500 dark:text-white">D4 Komputasi Statistik</p>
          <div class="mt-6 flex justify-center md:justify-end space-x-4">
            <button class="bg-red-800 text-white px-4 py-2 rounded hover:bg-gray-600">Reset</button>
            <button class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Simpan</button>
          </div>
        </div>
      </div>

      <!-- Profile Form -->
      <div class="md:w-2/3 mt-6 md:mt-0">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Left Column -->
          <div>
            <label class="block text-gray-700 dark:text-white">NIM</label>
            <input type="text" placeholder="222111871" class="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>
          <div>
            <label class="block text-gray-700 dark:text-white">Alamat</label>
            <textarea placeholder="Jl. Contoh No. 123" class="w-full border border-gray-300 rounded-md p-2 mt-1" rows="1"></textarea>
          </div>
          <div>
            <label class="block text-gray-700 dark:text-white">Nama</label>
            <input type="text" placeholder="Akma Batrisyia Jazima" class="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>
          <div>
            <label class="block text-gray-700 dark:text-white">Tempat Magang</label>
            <input type="text" placeholder="BPS Provinsi Jawa Timur" class="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>
          <div>
            <label class="block text-gray-700 dark:text-white">Email</label>
            <input type="email" placeholder="akma.batrisyia@example.com" class="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>
          <div>
            <label class="block text-gray-700 dark:text-white">Dosen Pembimbing</label>
            <input type="text" placeholder="Dr. Contoh Dosen, M.Sc." class="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>
          <div>
            <label class="block text-gray-700 dark:text-white">Kelas</label>
            <select class="w-full border border-gray-300 rounded-md p-2 mt-1">
              <option>Pilih Kelas</option>
              <option>D4-01</option>
              <option>D4-02</option>
              <option>D4-03</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 dark:text-white">Program Studi</label>
            <select class="w-full border border-gray-300 rounded-md p-2 mt-1">
              <option>Pilih Program Studi</option>
              <option>D4 Komputasi Statistik</option>
              <option>D4 Teknologi Informasi</option>
              <option>D4 Statistika Bisnis</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Section -->
    <div class="mt-10 bg-gray-100 p-6 rounded-lg shadow-md dark:bg-purple-800">
      <h3 class="text-lg font-semibold text-black mb-4 dark:text-white">Status Mahasiswa</h3>
      <div class="flex flex-wrap gap-12 md:gap-24">
        <div>
          <label class="block text-gray-700 dark:text-white">Status Akademik</label>
          <p class="text-gray-900 dark:text-white font-medium mt-1">Aktif</p>
        </div>
        <div>
          <label class="block text-gray-700 dark:text-white">Semester</label>
          <p class="text-gray-900 dark:text-white font-medium mt-1">Semester 6</p>
        </div>
        <div>
          <label class="block text-gray-700 dark:text-white">IPK Terakhir</label>
          <p class="text-gray-900 dark:text-white font-medium mt-1">3.85</p>
        </div>
        <div>
          <label class="block text-gray-700 dark:text-white">Jumlah SKS</label>
          <p class="text-gray-900 dark:text-white font-medium mt-1">120 SKS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// No need for dynamic props in this case
</script>

<style scoped>
/* Add any additional custom styling here */
input::placeholder, textarea::placeholder {
  color: #9CA3AF; /* Tailwind's gray-400 color */
  opacity: 1; /* Show placeholder text */
}
</style>
