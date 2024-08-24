<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-4 border-b border-gray-300 pb-5">
      <h3 class="text-xl text-black font-semibold mb-4 sm:mb-0">Logbook Bulanan</h3>
    </div>

    <!-- Filter and Export Options -->
    <div class="flex justify-between items-center mb-4">
      <!-- Filter Options -->
      <div class="flex space-x-2">
        <input type="month" v-model="selectedMonth" class="border border-gray-300 rounded px-2 py-1" />
      </div>

      <!-- Export Buttons -->
      <div class="flex space-x-2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center">
          <font-awesome-icon icon="file-excel" class="mr-2" />
          Excel
        </button>
        <button class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 flex items-center justify-center">
          <font-awesome-icon icon="file-csv" class="mr-2" />
          CSV
        </button>
        <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center justify-center">
          <font-awesome-icon icon="file-pdf" class="mr-2" />
          PDF
        </button>
        <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex items-center justify-center">
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
            <th class="py-3 px-4">Bulan</th>
            <th class="py-3 px-4">Nama Kegiatan</th>
            <th class="py-3 px-4">Progress</th>
            <th class="py-3 px-4">Waktu Terpakai (Jam)</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-sm font-light">
          <tr v-for="(entry, index) in logbookEntries" :key="entry.id" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4">{{ index + 1 }}</td>
            <td class="py-3 px-4">{{ formatMonth(entry.month) }}</td>
            <td class="py-3 px-4">{{ entry.activity }}</td>
            <td class="py-3 px-4">{{ entry.progress }}</td>
            <td class="py-3 px-4">{{ entry.timeSpent }} hours</td>
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
          Showing 1 to {{ logbookEntries.length }} of {{ logbookEntries.length }} entries
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const logbookEntries = ref([
  // Example data, replace with real data from your backend
  { id: 1, month: '2024-08', activity: 'Project A Development', progress: 'Completed Phase 1', timeSpent: 80 },
  { id: 2, month: '2024-08', activity: 'Regular Reports', progress: 'Submitted 4 weekly reports', timeSpent: 16 },
  { id: 3, month: '2024-09', activity: 'Project B Planning', progress: 'Initial research done', timeSpent: 40 },
  { id: 4, month: '2024-09', activity: 'Client Meetings', progress: 'Attended 3 meetings', timeSpent: 12 },
  { id: 5, month: '2024-09', activity: 'Documentation', progress: 'Started writing user manual', timeSpent: 20 },
]);

const formatMonth = (month) => {
  const date = new Date(month + '-01');
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
