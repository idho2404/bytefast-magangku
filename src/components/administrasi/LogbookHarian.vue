<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-4 border-b border-gray-300 pb-5">
      <h3 class="text-2xl text-purple-800 dark:text-white text-center font-bold mb-4 sm:mb-0">LOGBOOK</h3>
      <button
        @click="showModal = true"
        class="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600 w-full sm:w-auto"
      >
        + Tambah
      </button>
    </div>

    <!-- Import/Export Buttons -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
      <div class="flex flex-wrap justify-center sm:justify-start space-x-2">
        <button class="bg-white dark:bg-black dark:text-white text-black py-2 flex items-center justify-center mb-2 sm:mb-0 w-full sm:w-auto">
          Export As:
        </button>
        <button
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-purple-800 hover:border-none flex items-center justify-center mb-2 sm:mb-0 w-full sm:w-auto"
        >
          <font-awesome-icon icon="file-excel" class="mr-2" />
          XLX
        </button>
        <button
          class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 hover:border-none flex items-center justify-center mb-2 sm:mb-0 w-full sm:w-auto"
        >
          <font-awesome-icon icon="file-csv" class="mr-2" />
          CSV
        </button>
        <button
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:border-none flex items-center justify-center mb-2 sm:mb-0 w-full sm:w-auto"
        >
          <font-awesome-icon icon="file-pdf" class="mr-2" />
          PDF
        </button>
        <button
          class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 hover:border-none flex items-center justify-center w-full sm:w-auto"
        >
          <font-awesome-icon icon="database" class="mr-2" />
          SQL
        </button>
      </div>
      <div class="flex space-x-2">
        <input type="month" v-model="selectedMonth" class="border border-gray-300 bg-purple-800 rounded px-2 py-1" />
      </div>
    </div>

    <!-- Logbook Table -->
    <div class="bg-white dark:bg-black dark:text-white py-6 rounded-lg overflow-x-auto">
      <table class="w-full text-left table-auto border ">
        <thead>
          <tr class="bg-purple-800 text-white uppercase text-sm leading-normal">
            <th class="py-3 px-4 text-center">No.</th>
            <th class="py-3 px-4 text-center">Tanggal</th>
            <th class="py-3 px-4 text-center">Nama Kegiatan</th>
            <th class="py-3 px-4 text-center">Durasi</th>
            <th class="py-3 px-4 text-center">Persentase</th>
            <th class="py-3 px-4 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-sm font-light">
          <tr class="border-b border-gray-200 hover:bg-purple-100 dark:hover:bg-purple-800" v-for="(entry, index) in logbookEntries" :key="index">
            <td class="py-3 px-4 dark:text-white text-center">{{ index + 1 }}.</td>
            <td class="py-3 px-4 dark:text-white">{{ entry.tanggal }}</td>
            <td class="py-3 px-4 dark:text-white">{{ entry.kegiatan }}</td>
            <td class="py-3 px-4 dark:text-white text-center">{{ entry.durasi }}</td>
            <td class="py-3 px-4 dark:text-white text-center">{{ entry.persentasi }}%</td>
            <td class="py-3 px-4 dark:text-white text-center text-center">
              <div class="flex justify-center space-x-2">
                <button
                  class="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-800 min-w-[70px] flex items-center justify-center"
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 min-w-[70px] flex items-center justify-center"
                >
                  Hapus
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Updated Pagination -->
      <div class="flex justify-between items-center mt-10 ">
        <div>
          <label for="rows" class="mr-2 text-sm text-gray-700 dark:text-white">Rows per page:</label>
          <select id="rows" class="border bg-purple-800 border-gray-300 rounded px-2 py-1 text-white">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-white bg-purple-800 hover:bg-indigo-600 ring-1 ring-inset ring-purple-800 focus:z-20 focus:outline-none">
            <span class="sr-only">Previous</span>
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </a>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-none md:inline-flex">
            1
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-800 to-purple-800 text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-none">
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
          <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-white bg-purple-800 hover:bg-indigo-600 ring-1 ring-inset ring-purple-800 focus:z-20 focus:outline-none">
            <span class="sr-only">Next</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </nav>
        <div class="text-sm text-gray-600 dark:text-white">
          Showing 1 to 5 of 197 entries
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-purple-800  p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">Tambah Kegiatan</h3>
        <form @submit.prevent="addEntry">
          <div class="mb-4">
            <label for="tanggal" class="block text-sm font-medium text-white">Tanggal</label>
            <input
              v-model="form.tanggal"
              type="date"
              id="tanggal"
              class="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-800 focus:border-purple-800 sm:text-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="kegiatan" class="block text-sm font-medium text-white">Nama Kegiatan</label>
            <input
              v-model="form.kegiatan"
              type="text"
              id="kegiatan"
              class="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-800 focus:border-purple-800 sm:text-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="durasi" class="block text-sm font-medium text-white">Durasi (jam)</label>
            <input
              v-model="form.durasi"
              type="number"
              id="durasi"
              class="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-800 focus:border-purple-800 sm:text-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="persentasi" class="block text-sm font-medium text-white">Persentasi (%)</label>
            <input
              v-model="form.persentasi"
              type="number"
              id="persentasi"
              class="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-800 focus:border-purple-800 sm:text-sm"
              required
            />
          </div>
          <div class="flex justify-end">
            <button
              @click="showModal = false"
              type="button"
              class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 mr-2"
            >
              Batal
            </button>
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-500 hover:border-none">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const form = ref({
  tanggal: "",
  kegiatan: "",
  durasi: "",
  persentasi: "",
});

const logbookEntries = ref([
  { tanggal: "Senin, 1 Agustus 2024", kegiatan: "Membuat laporan harian", durasi: "2", persentasi: 50 },
  { tanggal: "Selasa, 2 Agustus 2024", kegiatan: "Menghadiri rapat proyek", durasi: "3", persentasi: 80 },
  { tanggal: "Rabu, 3 Agustus 2024", kegiatan: "Menyelesaikan desain UI", durasi: "4", persentasi: 100 },
  { tanggal: "Kamis, 4 Agustus 2024", kegiatan: "Menulis dokumentasi proyek", durasi: "2", persentasi: 70 },
  { tanggal: "Jumat, 5 Agustus 2024", kegiatan: "Melakukan testing dan debugging", durasi: "5", persentasi: 60 },
]);

const addEntry = () => {
  // Add new entry to the logbook
  logbookEntries.value.push({ ...form.value });

  // Close the modal after saving the entry
  showModal.value = false;

  // Reset the form fields
  form.value = {
    tanggal: "",
    kegiatan: "",
    durasi: "",
    persentasi: "",
  };
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
