<template>
  <div class="p-6">
    <!-- Header -->
    <div class="justify-between items-center mb-4 pb-5 text-center">
      <h2 class="text-2xl text-purple-800 font-bold text-center dark:text-white">PERIZINAN KAMPUS</h2>
    </div>

    <!-- Search, Filter, and Table Combined -->
    <div class="bg-white dark:bg-black p-6 rounded-lg shadow-md mb-6 text-white">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Cari izin..."
          class="border border-purple-800 bg-purple-800 placeholder-white rounded px-3 py-2 focus:outline-none focus:ring-purple-800 focus:border-purple-800 w-full sm:w-1/2"
        />
        <select
          v-model="filterStatus"
          class="border border-purple-800 bg-purple-800 rounded px-3 py-2 focus:outline-none focus:ring-purple-800 focus:border-purple-800 w-full sm:w-1/4"
        >
          <option value="">Semua Status</option>
          <option value="Disetujui">Disetujui</option>
          <option value="Menunggu">Menunggu</option>
          <option value="Ditolak">Ditolak</option>
        </select>
      </div>

      <h3 class="text-lg font-medium text-center text-purple-800">Daftar Izin yang Diajukan</h3>
<div class="overflow-x-auto">
  <table class="w-full mt-4 text-left table-auto text-purple-800">
    <thead>
      <tr class="bg-purple-800 text-white text-center uppercase text-xs leading-normal">
        <th class="py-2 px-3">No.</th>
        <th class="py-2 px-3">Jenis Izin</th>
        <th class="py-2 px-3">Tanggal Mulai</th>
        <th class="py-2 px-3">Tanggal Selesai</th>
        <th class="py-2 px-3">Alasan</th>
        <th class="py-2 px-3">Lampiran</th>
        <th class="py-2 px-3">Status</th>
        <th class="py-2 px-3 text-center">Aksi</th>
      </tr>
    </thead>
    <tbody class="text-xs dark:bg-white">
      <tr
        v-for="(item, index) in filteredIzinList"
        :key="index"
        class="border-b border-purple-100 hover:bg-purple-100"
      >
        <td class="py-2 px-2 text-center">{{ index + 1 }}.</td>
        <td class="py-2 px-2 text-center">{{ item.jenisIzin }}</td>
        <td class="py-2 px-2 text-center">{{ item.tanggalMulai }}</td>
        <td class="py-2 px-2 text-center">{{ item.tanggalSelesai }}</td>
        <td class="py-2 px-2 text-center">{{ item.alasan }}</td>
        <td class="py-2 px-2 text-center">
          <a :href="item.lampiran" target="_blank" class="text-blue-500 hover:underline">Lihat Lampiran</a>
        </td>
        <td :class="getStatusClass(item.status)" class="py-1 px-2 font-semibold text-center">
          {{ item.status }}
        </td>
        <td class="py-2 px-2 text-center">
          <button class="text-sm text-white bg-purple-600 px-2 py-1 rounded hover:bg-purple-700 mr-2">
            Edit
          </button>
          <button class="text-sm text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700">
            Hapus
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>


    </div>

    <!-- Summary Cards and Chart Combined in Flex Layout -->
    <div class="flex flex-col md:flex-row gap-6 mb-6">
      
      <div class="flex flex-row gap-4 md:w-1/3 h-full justify-center items-center flex-wrap">
        <div class="bg-purple-100 p-4 rounded-lg shadow-md text-center">
          <h4 class="text-xl font-semibold text-purple-800">Total Izin</h4>
          <p class="text-3xl font-bold text-purple-700">{{ izinList.length }}</p>
        </div>
        <div class="bg-green-100 p-4 rounded-lg shadow-md text-center">
          <h4 class="text-xl font-semibold text-green-800">Disetujui</h4>
          <p class="text-3xl font-bold text-green-700">{{ izinList.filter(i => i.status === 'Disetujui').length }}</p>
        </div>
        <div class="bg-red-100 p-4 rounded-lg shadow-md text-center">
          <h4 class="text-xl font-semibold text-red-800">Ditolak</h4>
          <p class="text-3xl font-bold text-red-700">{{ izinList.filter(i => i.status === 'Ditolak').length }}</p>
        </div>
      </div>
      
      <!-- Chart Column -->
      <div class="md:w-2/3 p-6 bg-white rounded-lg shadow-md">
        <canvas id="izinChart" class="h-48"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

const showModal = ref(false);
const searchQuery = ref('');
const filterStatus = ref('');
const izin = ref({
  jenisIzin: 'Sakit',
  tanggalMulai: '',
  tanggalSelesai: '',
  alasan: '',
  lampiran: '', // Optional lampiran link
});

const izinList = ref([
  { jenisIzin: 'Keluarga', tanggalMulai: '2024-08-01', tanggalSelesai: '2024-08-05', alasan: 'Urusan Keluarga', lampiran: '#', status: 'Disetujui' },
  { jenisIzin: 'Sakit', tanggalMulai: '2024-08-10', tanggalSelesai: '2024-08-12', alasan: 'Sakit Flu', lampiran: '#', status: 'Menunggu' },
  { jenisIzin: 'Lainnya', tanggalMulai: '2024-08-15', tanggalSelesai: '2024-08-20', alasan: 'Liburan', lampiran: '#', status: 'Ditolak' },
]);

const filteredIzinList = computed(() => {
  return izinList.value.filter(item => {
    const matchesSearch = item.jenisIzin.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.alasan.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = filterStatus.value ? item.status === filterStatus.value : true;
    return matchesSearch && matchesStatus;
  });
});

const submitIzin = () => {
  izinList.value.push({
    jenisIzin: izin.value.jenisIzin,
    tanggalMulai: izin.value.tanggalMulai,
    tanggalSelesai: izin.value.tanggalSelesai,
    alasan: izin.value.alasan,
    lampiran: '#', // Placeholder for lampiran
    status: 'Menunggu',
  });
  showModal.value = false;
  alert('Izin berhasil diajukan!');
};

const getStatusClass = (status) => {
  return status === 'Disetujui' ? 'text-green-500' : status === 'Ditolak' ? 'text-red-500' : 'text-yellow-500';
};

onMounted(() => {
  const ctx = document.getElementById('izinChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Disetujui', 'Menunggu', 'Ditolak'],
      datasets: [{
        data: [
          izinList.value.filter(i => i.status === 'Disetujui').length,
          izinList.value.filter(i => i.status === 'Menunggu').length,
          izinList.value.filter(i => i.status === 'Ditolak').length,
        ],
        backgroundColor: ['#8e24aa', '#ba68c8', '#e57373'],
        hoverBackgroundColor: ['#66BB6A', '#FFD54F', '#E57373']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  });
});
</script>

<style scoped>
@media (min-width: 640px) {
  .flex-col {
    flex-direction: column;
  }
}

@media (min-width: 768px) {
  .flex-col {
    flex-direction: row;
  }
}

#izinChart {
  height: 250px;
}

/* Custom scrollbar styles */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #e0d7ff;
  border-radius: 8px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #7c3aed;
  border-radius: 8px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #5b21b6;
}
</style>
