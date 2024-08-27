<template>
  <div class="px-4 md:px-20 py-10">
    <!-- Header -->
    <h2 class="text-center text-3xl font-semibold text-black mb-8">BERITA <span class="text-purple-600">TERBARU</span></h2>

    <!-- Main Content -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Left Column (Main News) -->
      <div class="md:col-span-2">
        <!-- Tabs -->
        <div class="flex space-x-4 border-b-2 border-purple-600 mb-6">
            <!-- Active Tab -->
            <button class="pb-2 px-4 bg-purple-600 text-white font-semibold rounded-none">
                Semua
            </button>
            <!-- Inactive Tabs -->
            <button class="pb-2 px-4 text-gray-500 hover:text-purple-600 focus:outline-none border-none">
                Pra
            </button>
            <button class="pb-2 px-4 text-gray-500 hover:text-purple-600 focus:outline-none border-none">
                Pencacahan
            </button>
            <button class="pb-2 px-4 text-gray-500 hover:text-purple-600 focus:outline-none border-none">
                Pasca
            </button>
        </div>

        <!-- News List -->
        <div class="space-y-6">
          <div class="flex space-x-4 border-b-2 border-purple-600 py-2" v-for="index in 5" :key="index">
            <img src="/src/assets/image/news.jpg" alt="News Image" class="w-40 h-25 object-cover rounded-md">
            <div class="flex-1 ">
              <h3 class="text-xl font-semibold text-gray-800">Menggali Data di Pulau Dewata bersama PKL D-IV Angkatan 63</h3>
              <p class="text-sm text-purple-200 mt-1">04 Maret 2024</p>
              <div class="flex items-center space-x-2 mt-2">
                <span class="text-sm text-red-500">114 kali</span>
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Pencacahan</span>
                <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Emily Azizaida</span>
              </div>
              <p class="mt-2 text-gray-700">Mengiringi perayaan hari-hari besar umat Hindu, Prodi D-IV Angkatan 63 telah turut serta hadir di pulau dewata untuk melangsungkan kegiatan pencacahan lapangan...</p>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-6">
          <nav class="inline-flex rounded-md shadow">
            <a href="#" class="px-3 py-2 bg-purple-200 border border-gray-300 text-gray-500 hover:bg-gray-200">
              First
            </a>
            <a href="#" class="px-3 py-2 bg-white border border-gray-300 text-gray-500 hover:bg-gray-200">
              &laquo;
            </a>
            <a href="#" class="px-3 py-2 bg-purple-500 border-t border-b border-gray-300 text-white hover:bg-purple-500 hover:text-white">
              1
            </a>
            <a href="#" class="px-3 py-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-purple-500 hover:text-white">
              2
            </a>
            <a href="#" class="px-3 py-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-purple-500 hover:text-white">
              3
            </a>
            <span class="px-3 py-2 bg-white border-t border-b border-gray-300 text-gray-700">...</span>
            <a href="#" class="px-3 py-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-purple-500 hover:text-white">
              16
            </a>
            <a href="#" class="px-3 py-2 bg-white border border-gray-300 text-gray-500 hover:bg-gray-200">
              &raquo;
            </a>
            <a href="#" class="px-3 py-2 bg-purple-200 border border-gray-300 text-gray-500 hover:bg-gray-200">
              Last
            </a>
          </nav>
        </div>
      </div>

      <!-- Right Column (Popular News) -->
<div class="bg-purple-700 p-6 rounded-lg shadow-lg h-max">
  <h3 class="text-2xl font-semibold text-white mb-6">Berita Populer</h3>
  <div class="space-y-4">
    <div class="flex space-x-4 border-b pb-2">
      <img src="/src/assets/image/news.jpg" alt="Popular News Image" class="w-20 h-20 object-cover rounded-md">
      <div class="flex-1">
        <h4 class="text-md font-semibold text-white">Doa Bersama PKL Prodi D-IV Angkatan 63 T.A. 2023/2024</h4>
        <div class="flex justify-between mt-1">
          <p class="text-sm text-purple-200">23 Februari 2024</p>
          <span class="text-sm text-white  ml-4">1045 kali</span>
        </div>
      </div>
    </div>

    <div class="flex space-x-4 border-b pb-2">
      <img src="/src/assets/image/news.jpg" alt="Popular News Image" class="w-20 h-20 object-cover rounded-md">
      <div class="flex-1">
        <h4 class="text-md font-semibold text-white">Rapat Akbar I PKL Prodi D-IV Angkatan 63 T.A. 2023/2024</h4>
        <div class="flex justify-between mt-1">
          <p class="text-sm text-purple-200">10 November 2023</p>
          <span class="text-sm text-white  ml-4">376 kali</span>
        </div>
      </div>
    </div>

    <div class="flex space-x-4 border-b pb-2">
      <img src="/src/assets/image/news.jpg" alt="Popular News Image" class="w-20 h-20 object-cover rounded-md">
      <div class="flex-1">
        <h4 class="text-md font-semibold text-white">Menggali Data di Pulau Dewata bersama PKL D-IV...</h4>
        <div class="flex justify-between mt-1">
          <p class="text-sm text-purple-200">04 Maret 2024</p>
          <span class="text-sm text-white  ml-4">114 kali</span>
        </div>
      </div>
    </div>

    <!-- Add more popular news items similarly -->
  </div>
</div>

    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this layout.
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
