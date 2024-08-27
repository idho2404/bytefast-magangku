<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4 border-b border-gray-300 pb-5">
      <h2 class="text-2xl text-black font-semibold">Perizinan Kampus</h2>
      <button @click="showModal = true" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Ajukan Izin</button>
    </div>

    <!-- Modal Ajukan Izin -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">Ajukan Izin</h3>
        <form @submit.prevent="submitIzin">
          <div class="mb-4">
            <label for="jenisIzin" class="block text-sm font-medium text-gray-700">Jenis Izin</label>
            <select v-model="izin.jenisIzin" id="jenisIzin" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
              <option value="Sakit">Sakit</option>
              <option value="Keluarga">Keluarga</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="tanggalMulai" class="block text-sm font-medium text-gray-700">Tanggal Mulai</label>
            <input v-model="izin.tanggalMulai" type="date" id="tanggalMulai" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div class="mb-4">
            <label for="tanggalSelesai" class="block text-sm font-medium text-gray-700">Tanggal Selesai</label>
            <input v-model="izin.tanggalSelesai" type="date" id="tanggalSelesai" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div class="mb-4">
            <label for="alasan" class="block text-sm font-medium text-gray-700">Alasan Izin</label>
            <textarea v-model="izin.alasan" id="alasan" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="3" required></textarea>
          </div>
          <div class="flex justify-end">
            <button @click="showModal = false" type="button" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">Batal</button>
            <button type="submit" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Ajukan</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Daftar Izin yang Diajukan -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 class="text-lg font-medium text-gray-800">Daftar Izin yang Diajukan</h3>
      <table class="w-full mt-4 text-left table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
            <th class="py-2 px-3">No.</th>
            <th class="py-2 px-3">Jenis Izin</th>
            <th class="py-2 px-3">Tanggal Mulai</th>
            <th class="py-2 px-3">Tanggal Selesai</th>
            <th class="py-2 px-3">Alasan</th>
            <th class="py-2 px-3">Lampiran</th>
            <th class="py-2 px-3">Status</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-xs font-light">
          <tr v-for="(item, index) in izinList" :key="index" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-1 px-2">{{ index + 1 }}.</td>
            <td class="py-1 px-2">{{ item.jenisIzin }}</td>
            <td class="py-1 px-2">{{ item.tanggalMulai }}</td>
            <td class="py-1 px-2">{{ item.tanggalSelesai }}</td>
            <td class="py-1 px-2">{{ item.alasan }}</td>
            <td class="py-1 px-2">
              <a :href="item.lampiran" target="_blank" class="text-blue-500 hover:underline">Lihat Lampiran</a>
            </td>
            <td :class="getStatusClass(item.status)" class="py-1 px-2 font-semibold">{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Summary and Additional Features -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <!-- Status Izin Chart -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Status Izin</h3>
        <div class="mt-4">
          <canvas id="izinChart"></canvas>
        </div>
      </div>

      <!-- Statistics -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Statistik Izin</h3>
        <div class="mt-4">
          <ul class="space-y-3 text-sm text-gray-700">
            <li><strong>Total Izin Diajukan:</strong> {{ izinList.length }}</li>
            <li><strong>Total Izin Disetujui:</strong> {{ izinList.filter(i => i.status === 'Disetujui').length }}</li>
            <li><strong>Total Izin Ditolak:</strong> {{ izinList.filter(i => i.status === 'Ditolak').length }}</li>
            <li><strong>Total Izin Menunggu:</strong> {{ izinList.filter(i => i.status === 'Menunggu').length }}</li>
          </ul>
        </div>
      </div>

      <!-- Recent Notifications -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Notifikasi Terbaru</h3>
        <div class="mt-4">
          <ul class="space-y-3 text-sm text-gray-700">
            <li v-for="(notif, index) in notifications" :key="index" class="border-b border-gray-200 pb-2">
              <p>{{ notif.message }}</p>
              <p class="text-xs text-gray-500">{{ notif.date }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Feedback Section -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 class="text-lg font-medium text-gray-800">Beri Umpan Balik</h3>
      <textarea v-model="feedback" class="mt-4 w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700" rows="4" placeholder="Beri umpan balik atau komentar..."></textarea>
      <div class="flex justify-end mt-4">
        <button @click="submitFeedback" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Kirim Umpan Balik</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

const showModal = ref(false);
const feedback = ref('');
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

const notifications = ref([
  { message: 'Izin Anda pada tanggal 10/08/2024 telah disetujui.', date: '20/08/2024' },
  { message: 'Izin Anda pada tanggal 15/08/2024 telah ditolak.', date: '18/08/2024' },
]);

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
  return status === 'Disetujui' ? 'text-green-600' : status === 'Ditolak' ? 'text-red-600' : 'text-yellow-600';
};

const submitFeedback = () => {
  alert('Umpan balik berhasil dikirim!');
  feedback.value = '';
};

onMounted(() => {
  const ctx = document.getElementById('izinChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Disetujui', 'Menunggu', 'Ditolak'],
      datasets: [{
        data: [izinList.value.filter(i => i.status === 'Disetujui').length,
               izinList.value.filter(i => i.status === 'Menunggu').length,
               izinList.value.filter(i => i.status === 'Ditolak').length],
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
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
/* Tambahkan gaya responsif dan khusus di sini */
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
  height: 250px; /* Tinggi untuk chart */
}
</style>
