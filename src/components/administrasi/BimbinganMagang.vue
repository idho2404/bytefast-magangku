<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4 border-b border-gray-300 pb-5">
      <h2 class="text-2xl text-black font-semibold">Bimbingan Magang</h2>
      <button @click="showModal = true" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Ajukan Bimbingan</button>
    </div>

    <!-- Modal Ajukan Bimbingan -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">Ajukan Bimbingan</h3>
        <form @submit.prevent="submitBimbingan">
          <div class="mb-4">
            <label for="tanggal" class="block text-sm font-medium text-gray-700">Tanggal</label>
            <input v-model="bimbingan.tanggal" type="date" id="tanggal" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div class="mb-4">
            <label for="waktu" class="block text-sm font-medium text-gray-700">Waktu</label>
            <input v-model="bimbingan.waktu" type="time" id="waktu" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div class="mb-4">
            <label for="topik" class="block text-sm font-medium text-gray-700">Topik yang Ingin Dibahas</label>
            <textarea v-model="bimbingan.topik" id="topik" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="3" required></textarea>
          </div>
          <div class="flex justify-end">
            <button @click="showModal = false" type="button" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">Batal</button>
            <button type="submit" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Ajukan</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Informasi Mentor -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 class="text-lg font-medium text-gray-800">Informasi Mentor</h3>
      <div class="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
        <img src="https://via.placeholder.com/100" alt="Foto Mentor" class="rounded-full h-24 w-24 object-cover">
        <div>
          <p class="text-sm text-gray-600"><strong>Nama:</strong> John Doe</p>
          <p class="text-sm text-gray-600"><strong>Email:</strong> john.doe@example.com</p>
          <p class="text-sm text-gray-600"><strong>Jam Kerja:</strong> Senin-Jumat, 14:00 - 16:00</p>
          <p class="text-sm text-gray-600"><strong>Bidang Keahlian:</strong> Pengembangan Web, Manajemen Proyek</p>
          <p class="text-sm text-gray-600"><strong>LinkedIn:</strong> <a href="#" class="text-blue-500 hover:underline">linkedin.com/in/johndoe</a></p>
        </div>
      </div>
    </div>

    <!-- Catatan Pribadi, Catatan Hasil, dan Riwayat Bimbingan -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Catatan Pribadi</h3>
        <textarea v-model="catatanPribadi" class="mt-4 w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700" rows="6" placeholder="Tambahkan catatan Anda di sini..."></textarea>
        <div class="flex justify-end mt-4">
          <button @click="simpanCatatan" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Simpan Catatan</button>
        </div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Catatan Hasil Bimbingan</h3>
        <p class="mt-4 text-sm text-gray-700">Catatan dari hasil bimbingan sebelumnya yang telah disepakati bersama.</p>
        <!-- Placeholder for Catatan Hasil Bimbingan -->
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Riwayat Bimbingan</h3>
        <ul class="mt-4 space-y-2 text-sm text-gray-700">
          <li><strong>25/08/2024:</strong> Pembahasan awal proyek</li>
          <li><strong>01/09/2024:</strong> Review proposal dan feedback</li>
          <li><strong>10/09/2024:</strong> Penilaian kemajuan dan arahan lanjut</li>
        </ul>
      </div>
    </div>

    <!-- Tugas yang Diberikan (Timeline), Progress, dan Evaluasi -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <!-- Timeline Tugas -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Tugas yang Diberikan</h3>
        <div class="mt-4">
          <div class="relative pb-6">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-full w-0.5 bg-gray-200"></div>
            </div>
            <ul class="relative space-y-6">
              <li>
                <div class="relative flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"/>
                      </svg>
                    </span>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">Selesaikan proposal proyek sebelum 25/08/2024</p>
                    <p class="text-sm text-gray-500">20/08/2024</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <span class="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center ring-8 ring-white">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"/>
                      </svg>
                    </span>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">Perbarui basis kode dengan fitur terbaru sebelum 01/09/2024</p>
                    <p class="text-sm text-gray-500">27/08/2024</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <span class="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center ring-8 ring-white">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"/>
                      </svg>
                    </span>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">Siapkan presentasi untuk rapat akhir review</p>
                    <p class="text-sm text-gray-500">01/09/2024</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Progress Chart -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Progress Magang</h3>
        <div class="mt-4">
          <canvas id="progressChart"></canvas>
        </div>
      </div>

      <!-- Evaluasi -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Evaluasi Bimbingan</h3>
        <textarea v-model="evaluasi" class="mt-4 w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700" rows="6" placeholder="Tambahkan evaluasi atau umpan balik di sini..."></textarea>
        <div class="flex justify-end mt-4">
          <button @click="submitEvaluasi" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Kirim Evaluasi</button>
        </div>
      </div>
    </div>

    <!-- Reminder and Notifications -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Reminder -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Reminder Bimbingan</h3>
        <div class="mt-4">
          <ul class="space-y-3 text-sm text-gray-700">
            <li><strong>Pengingat:</strong> Anda memiliki bimbingan pada 01/09/2024 pukul 14:00.</li>
            <li><strong>Pengingat:</strong> Tugas presentasi akhir harus diselesaikan sebelum 01/09/2024.</li>
          </ul>
          <div class="flex justify-end mt-4">
            <button @click="setReminder" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Setel Pengingat</button>
          </div>
        </div>
      </div>

      <!-- Notifications -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-800">Notifikasi Terbaru</h3>
        <div class="mt-4">
          <ul class="space-y-3 text-sm text-gray-700">
            <li><strong>27/08/2024:</strong> Anda telah menyelesaikan 60% dari tugas magang Anda.</li>
            <li><strong>01/09/2024:</strong> Bimbingan terakhir dijadwalkan pada 14:00.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

const showModal = ref(false);
const catatanPribadi = ref('');
const bimbingan = ref({
  tanggal: '',
  waktu: '',
  topik: ''
});
const evaluasi = ref('');

const simpanCatatan = () => {
  alert('Catatan berhasil disimpan!');
};

const submitBimbingan = () => {
  alert('Bimbingan berhasil diajukan!');
  showModal.value = false;
};

const submitEvaluasi = () => {
  alert('Evaluasi berhasil dikirim!');
  evaluasi.value = '';
};

const setReminder = () => {
  alert('Reminder berhasil disetel!');
};

onMounted(() => {
  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Selesai', 'Dalam Proses', 'Belum Mulai'],
      datasets: [{
        data: [60, 30, 10], // Contoh data progress
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

#progressChart {
  height: 250px; /* Tinggi untuk chart */
}
</style>
