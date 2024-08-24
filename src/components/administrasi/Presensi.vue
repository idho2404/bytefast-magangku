<template>
  <div class="p-0 flex flex-col">
    <!-- Header -->
    <h3 class="text-xl text-black font-semibold mb-2">Presensi</h3>

    <!-- Location Section -->
    <div class="flex flex-col md:flex-row items-center justify-between bg-white p-3 rounded-lg mb-4">
      <div class="w-full md:w-1/3 mb-3 md:mb-0">
        <!-- Static Map Image -->
        <img src="/src/assets/image/news.jpg" alt="Lokasi Magang" class="rounded-lg w-full h-auto max-h-60" />
      </div>
      <div class="w-full md:w-2/3 md:pl-4">
        <!-- Location Info -->
        <div class="bg-gray-100 p-3 rounded-lg text-center shadow-sm">
          <p class="text-gray-700 text-sm font-semibold">Lokasi Magang :</p>
          <p class="text-gray-700 text-sm">BPS Provinsi Jawa Timur</p>
          <p class="text-gray-700 text-sm">Rabu, 21 Agustus 2024</p>
          <p class="text-lg font-bold text-gray-800 mt-1">9 : 48 : 45 PM</p>
          <p class="mt-2 text-red-600 font-semibold text-xs">
            Anda Berada Di Luar Lokasi Magang <br />
            Jarak Anda Dengan Lokasi Magang Adalah 16 KM
          </p>
          <button class="mt-2 bg-purple-500 text-white px-3 py-1 rounded-full hover:bg-purple-600 text-sm">
            Tandai
          </button>
        </div>
      </div>
    </div>

    <!-- Attendance History Table -->
    <div class="bg-white p-4 rounded-lg">
      <h4 class="text-lg text-black font-semibold mb-3">Daftar Hadir</h4>
      <table class="w-full text-left table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
            <th class="py-2 px-3">No.</th>
            <th class="py-2 px-3">Tanggal</th>
            <th class="py-2 px-3">Waktu Datang</th>
            <th class="py-2 px-3">Waktu Pulang</th>
            <th class="py-2 px-3">Status</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-xs font-light">
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-1 px-2">1.</td>
            <td class="py-1 px-2">Senin, 1 Agustus 2024</td>
            <td class="py-1 px-2">07:45</td>
            <td class="py-1 px-2">17:15</td>
            <td class="py-1 px-2">Hadir</td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-1 px-2">2.</td>
            <td class="py-1 px-2">Selasa, 2 Agustus 2024</td>
            <td class="py-1 px-2">07:50</td>
            <td class="py-1 px-2">17:10</td>
            <td class="py-1 px-2">Hadir</td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-1 px-2">3.</td>
            <td class="py-1 px-2">Rabu, 3 Agustus 2024</td>
            <td class="py-1 px-2">07:55</td>
            <td class="py-1 px-2">17:00</td>
            <td class="py-1 px-2">Hadir</td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-1 px-2">4.</td>
            <td class="py-1 px-2">Kamis, 4 Agustus 2024</td>
            <td class="py-1 px-2">08:00</td>
            <td class="py-1 px-2">17:05</td>
            <td class="py-1 px-2">Hadir</td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-1 px-2">5.</td>
            <td class="py-1 px-2">Jumat, 5 Agustus 2024</td>
            <td class="py-1 px-2">08:10</td>
            <td class="py-1 px-2">16:55</td>
            <td class="py-1 px-2">Hadir</td>
          </tr>
        </tbody>
      </table>
      
      <!-- Pagination -->
      <div class="flex justify-center mt-4">
        <nav class="inline-flex rounded-md shadow">
          <a href="#" class="px-3 py-2 bg-white border border-gray-300 text-gray-500 hover:bg-gray-200">
            &laquo;
          </a>
          <a href="#" class="px-3 py-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-200">
            1
          </a>
          <a href="#" class="px-3 py-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-200">
            2
          </a>
          <a href="#" class="px-3 py-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-200">
            3
          </a>
          <a href="#" class="px-3 py-2 bg-white border border-gray-300 text-gray-500 hover:bg-gray-200">
            &raquo;
          </a>
        </nav>
      </div>
    </div>

    </div>
  
</template>

<script setup>
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
