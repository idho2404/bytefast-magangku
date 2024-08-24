<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-4 border-b border-gray-300 pb-5">
      <h3 class="text-xl text-black font-semibold mb-4 sm:mb-0">Logbook Harian</h3>
      <button
        @click="showModal = true"
        class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full sm:w-auto"
      >
        + Tambah
      </button>
    </div>

    <!-- Import/Export Buttons -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
      <div class="flex flex-wrap justify-center sm:justify-start space-x-2">
        <button
          class="bg-white text-black py-2 flex items-center justify-center mb-2 sm:mb-0 w-full sm:w-auto"
        >Export As : 
        </button>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:border-none flex items-center justify-center mb-2 sm:mb-0 w-full sm:w-auto"
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
    </div>

    <!-- Logbook Table -->
    <div class="bg-white py-6 rounded-lg overflow-x-auto">
      <table class="w-full text-left table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-4">No.</th>
            <th class="py-3 px-4">Tanggal</th>
            <th class="py-3 px-4">Nama Kegiatan</th>
            <th class="py-3 px-4 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-sm font-light">
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4">1.</td>
            <td class="py-3 px-4">Senin, 1 Agustus 2024</td>
            <td class="py-3 px-4">Membuat laporan harian</td>
            <td class="py-3 px-4 text-center">
              <div class="flex justify-center space-x-2">
                <button
                  class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 min-w-[70px] flex items-center justify-center"
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
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4">2.</td>
            <td class="py-3 px-4">Selasa, 2 Agustus 2024</td>
            <td class="py-3 px-4">Menghadiri rapat proyek</td>
            <td class="py-3 px-4 text-center">
              <div class="flex justify-center space-x-2">
                <button
                  class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 min-w-[70px] flex items-center justify-center"
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
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4">3.</td>
            <td class="py-3 px-4">Rabu, 3 Agustus 2024</td>
            <td class="py-3 px-4">Menyelesaikan desain UI</td>
            <td class="py-3 px-4 text-center">
              <div class="flex justify-center space-x-2">
                <button
                  class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 min-w-[70px] flex items-center justify-center"
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
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4">4.</td>
            <td class="py-3 px-4">Kamis, 4 Agustus 2024</td>
            <td class="py-3 px-4">Menulis dokumentasi proyek</td>
            <td class="py-3 px-4 text-center">
              <div class="flex justify-center space-x-2">
                <button
                  class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 min-w-[70px] flex items-center justify-center"
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
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4">5.</td>
            <td class="py-3 px-4">Jumat, 5 Agustus 2024</td>
            <td class="py-3 px-4">Melakukan testing dan debugging</td>
            <td class="py-3 px-4 text-center">
              <div class="flex justify-center space-x-2">
                <button
                  class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 min-w-[70px] flex items-center justify-center"
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

      <!-- Static Pagination and Rows Select -->
      <div class="flex justify-between items-center mt-4">
        <div>
          <label for="rows" class="mr-2 text-sm text-gray-700">Rows per page:</label>
          <select id="rows" class="border border-gray-300 rounded px-2 py-1">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
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
        <div class="text-sm text-gray-600">
          Showing 1 to 5 of 5 entries
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">Tambah Kegiatan</h3>
        <form @submit.prevent="addEntry">
          <div class="mb-4">
            <label for="tanggal" class="block text-sm font-medium text-gray-700">Tanggal</label>
            <input
              v-model="form.tanggal"
              type="date"
              id="tanggal"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="kegiatan" class="block text-sm font-medium text-gray-700">Nama Kegiatan</label>
            <input
              v-model="form.kegiatan"
              type="text"
              id="kegiatan"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div class="flex justify-end">
            <button
              @click="showModal = false"
              type="button"
              class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
            >
              Batal
            </button>
            <button type="submit" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Simpan</button>
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
});

const rowsPerPage = ref(5);

const addEntry = () => {
  // Logic to add a new entry to the logbook (e.g., update the table)
  console.log("New Entry:", form.value);

  // Close the modal after saving the entry
  showModal.value = false;

  // Reset the form fields
  form.value = {
    tanggal: "",
    kegiatan: "",
  };
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
