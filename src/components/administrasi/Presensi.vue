<template>
  <div class="p-4 flex flex-col pl-[1px] space-y-6 ">
    <!-- Header -->
    <h3 class="text-2xl font-bold text-center text-purple-700 border-b-[1px] border-purple-300 p-3 dark:text-white">PRESENSI</h3>

    <!-- Combined Card -->
    <div class="bg-white dark:bg-black dark:text-white p-6 space-y-6">
      <!-- Location and Map Section -->
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div class="w-full md:w-1/3 mb-5">
          <!-- Static Map Image -->
          <img src="/src/assets/image/maps.jpg" alt="Lokasi Magang" class="rounded-lg w-full h-auto max-h-60 object-cover shadow-sm" />
        </div>
        <div class="w-full md:w-2/3 md:pl-6">
          <!-- Location Info -->
          <div class="p-4 pt-0 rounded-lg text-center shadow-sm">
            <p class="text-gray-700 dark:text-white text-2xl font-bold mb-1">Lokasi Magang :</p>
            <p class="text-gray-700 dark:text-white text-sm mb-1">BPS Provinsi Jawa Timur</p>
            <p class="text-gray-700 dark:text-white text-sm mb-1">Rabu, 21 Agustus 2024</p>
            <p class="text-xl font-bold text-gray-800 mt-2 dark:text-white">9 : 48 : 45 PM</p>
            <p class="mt-2 text-red-600 font-semibold text-xs">
              Anda Berada Di Luar Lokasi Magang <br />
              Jarak Anda Dengan Lokasi Magang Adalah 16 KM
            </p>
            <button class="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 text-sm transition duration-300 shadow">
              Tandai
            </button>
          </div>
        </div>
      </div>

      <!-- Attendance History Table -->
      <div class="overflow-x-auto">
        <h4 class="text-lg text-purple-700 mt-4 text-center font-bold mb-4 dark:text-white">DAFTAR HADIR</h4>
        <table class="w-full text-left table-auto border border-purple-500">
          <thead>
            <tr class="bg-purple-700 text-white uppercase text-xs leading-normal">
              <th class="py-3 px-4 text-center">No.</th>
              <th class="py-3 px-4 text-center">Tanggal</th>
              <th class="py-3 px-4 text-center">Waktu Datang</th>
              <th class="py-3 px-4 text-center">Waktu Pulang</th>
              <th class="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 dark:text-white text-sm">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-4 text-center">1.</td>
              <td class="py-3 px-4">Senin, 1 Agustus 2024</td>
              <td class="py-3 px-4 text-center">07:45</td>
              <td class="py-3 px-4 text-center">17:15</td>
              <td class="py-3 px-4 text-center">Hadir</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-4 text-center">2.</td>
              <td class="py-3 px-4">Selasa, 2 Agustus 2024</td>
              <td class="py-3 px-4 text-center">07:50</td>
              <td class="py-3 px-4 text-center">17:10</td>
              <td class="py-3 px-4 text-center">Hadir</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-4 text-center">3.</td>
              <td class="py-3 px-4">Rabu, 3 Agustus 2024</td>
              <td class="py-3 px-4 text-center">07:55</td>
              <td class="py-3 px-4 text-center">17:00</td>
              <td class="py-3 px-4 text-center">Hadir</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-4 text-center">4.</td>
              <td class="py-3 px-4">Kamis, 4 Agustus 2024</td>
              <td class="py-3 px-4 text-center">08:00</td>
              <td class="py-3 px-4 text-center">17:05</td>
              <td class="py-3 px-4 text-center">Hadir</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-4 text-center">5.</td>
              <td class="py-3 px-4">Jumat, 5 Agustus 2024</td>
              <td class="py-3 px-4 text-center">08:10</td>
              <td class="py-3 px-4 text-center">16:55</td>
              <td class="py-3 px-4 text-center">Hadir</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Updated Pagination -->
      <div class="flex justify-between items-center mt-10">
        <div>
          <label for="rows" class="mr-2 text-sm text-gray-700 dark:text-white">Rows per page:</label>
          <select id="rows" class="border bg-purple-700 border-gray-300 rounded px-2 py-1 text-white">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-white bg-purple-700 hover:bg-purple-600 ring-1 ring-inset ring-purple-500 focus:z-20 focus:outline-none">
            <span class="sr-only">Previous</span>
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </a>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-none md:inline-flex">
            1
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-purple-800 text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-none">
            2
          </a>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-none md:inline-flex">
            3
          </a>
          <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white ring-1 ring-inset ring-gray-300">
            ...
          </span>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-none md:inline-flex">
            8
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-none">
            9
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-none">
            10
          </a>
          <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-white bg-purple-700 hover:bg-purple-600 ring-1 ring-inset ring-purple-500 focus:z-20 focus:outline-none">
            <span class="sr-only">Next</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </nav>
        <div class="text-sm text-gray-600">
          Showing 1 to 5 of 197 entries
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
