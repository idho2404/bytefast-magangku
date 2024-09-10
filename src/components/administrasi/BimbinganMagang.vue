<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl text-purple-700 font-semibold">Bimbingan Magang</h2>
    </div>

    <!-- Profil Dosen -->
    <div class="bg-white p-6 rounded-lg border border-[5px] border-purple 800 mb-6">
      <h3 class="text-lg font-medium text-purple-800">Profil Dosen</h3>
      <div class="mt-4 bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-lg text-gray-800">
        <p><strong>Nama:</strong> Dr. John Doe</p>
        <p><strong>Email:</strong> john.doe@university.edu</p>
        <p><strong>Jam Kerja:</strong> Senin-Jumat, 14:00 - 16:00</p>
        <p><strong>Bidang Keahlian:</strong> Pengembangan Web, Manajemen Proyek</p>
        <p><strong>LinkedIn:</strong> <a href="#" class="text-blue-500 hover:underline">linkedin.com/in/johndoe</a></p>
      </div>
    </div>

    <!-- Jadwal dan Pengingat -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Jadwal Pertemuan -->
      <div class="bg-gradient-to-r from-purple-800 to-blue-800 p-6 rounded-lg shadow-md  text-white">
        <h3 class="text-lg text-center text-white font-medium">Jadwal Pertemuan</h3>
        <p class="mt-4 text-white text-center">Jadwal Pertemuan dengan Dosen yang telah disetujui</p>
        <div class="mt-4 bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-lg text-gray-800">
          <!-- Calendar placeholder -->
          <div class="calendar-container">
            <div class="calendar">
              <div class="calendar-header flex justify-between items-center">
                <button class="text-gray-700 hover:text-gray-900">
                  &lt;
                </button>
                <h4 class="font-bold">September 2024</h4>
                <button class="text-gray-700 hover:text-gray-900">
                  &gt;
                </button>
              </div>
              <div class="calendar-grid grid grid-cols-7 gap-2 mt-4 text-center">
                <div class="font-bold">Sun</div>
                <div class="font-bold">Mon</div>
                <div class="font-bold">Tue</div>
                <div class="font-bold">Wed</div>
                <div class="font-bold">Thu</div>
                <div class="font-bold">Fri</div>
                <div class="font-bold">Sat</div>
                <!-- Calendar dates -->
                <div class="text-gray-400">29</div>
                <div class="text-gray-400">30</div>
                <div class="text-gray-400">31</div>
                <div>1</div>
                <div class="bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-full">2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div class="bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-full">21</div>
                <div>22</div>
                <div>23</div>
                <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div class="text-gray-400">1</div>
                <div class="text-gray-400">2</div>
                <div class="text-gray-400">3</div>
                <div class="text-gray-400">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pengaturan Waktu Konsultasi -->
      <div class="bg-gradient-to-r from-purple-800 to-blue-800 p-6 rounded-lg shadow-md text-white">
        <h3 class="text-lg font-medium text-center text-white">Pengaturan Waktu Konsultasi</h3>
        <p class="mt-4 text-center text-white">Atur waktu konsultasi. Pilih slot waktu yang tersedia.</p>
        <div class="mt-4 bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-lg text-gray-800">
          <form>
            <div class="mb-4">
              <label for="consultation-date" class="block text-sm font-medium text-gray-700">Tanggal Konsultasi</label>
              <input type="date" id="consultation-date" class="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
            </div>
            <div class="mb-4">
              <label for="consultation-time" class="block text-sm font-medium text-gray-700">Pilih Waktu</label>
              <select id="consultation-time" class="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                <option value="14:00">14:00 - 14:30</option>
                <option value="14:30">14:30 - 15:00</option>
                <option value="15:00">15:00 - 15:30</option>
                <option value="15:30">15:30 - 16:00</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="activity-name" class="block text-sm font-medium text-gray-700">Nama Kegiatan</label>
              <input type="text" id="activity-name" class="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Masukkan nama kegiatan">
            </div>
            <div class="text-center"><button type="submit" class="bg-gradient-to-r from-purple-800 to-blue-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600">Ajukan</button></div>
          </form>
        </div>
      </div>
    </div>

    <!-- Grafik dan Statistik -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- Grafik Progress -->
      <div class="bg-white border border-[5px] border-purple-800 p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-center text-purple-800">Grafik Progress Mahasiswa</h3>
        <div class="mt-4 bg-white p-4 rounded-lg text-gray-800">
          <canvas id="progressChart" class="h-48"></canvas>
        </div>
      </div>

      <!-- Riwayat Bimbingan -->
      <div class="bg-white border border-[5px] border-purple-800 p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-purple-800 text-center">Riwayat Bimbingan</h3>
        <div class="mt-4 p-4 rounded-md text-gray-800 overflow-y-auto max-h-80">
          <ul class="space-y-3">
            <li class="flex justify-between">
              <div class="border-b-2 pb-2">
                <p class="font-semibold text-purple-700">Pertemuan 1:</p>
                <p>Diskusi pembahasan proposal proyek dan menentukan timeline kerja.</p>
                <p class="text-sm text-gray-600">Tanggal: 01/09/2024</p>
              </div>
            </li>
            <li class="flex justify-between">
              <div class="border-b-2 pb-2">
                <p class="font-semibold text-purple-700">Pertemuan 2:</p>
                <p>Review kemajuan proyek dan revisi bab 2 laporan magang.</p>
                <p class="text-sm text-gray-600">Tanggal: 08/09/2024</p>
              </div>
            </li>
            <li class="flex justify-between">
              <div class="border-b-2 pb-2">
                <p class="font-semibold text-purple-700">Pertemuan 3:</p>
                <p>Penilaian awal hasil kerja dan masukan perbaikan.</p>
                <p class="text-sm text-gray-600">Tanggal: 15/09/2024</p>
              </div>
            </li>
            <li class="flex justify-between">
              <div class="border-b-2 pb-2">
                <p class="font-semibold text-purple-700">Pertemuan 4:</p>
                <p>Evaluasi keseluruhan progress dan persiapan presentasi akhir.</p>
                <p class="text-sm text-gray-600">Tanggal: 22/09/2024</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> 

    <!-- Daftar Tugas -->
  <div class="bg-gradient-to-r from-purple-800 to-blue-800 p-6 rounded-lg shadow-md text-white">
    <h3 class="text-lg font-medium text-white text-center">Daftar Penugasan</h3>
    <p class="mt-4 text-center">Daftar tugas yang harus diselesaikan oleh mahasiswa, dengan status pencapaian dan prioritas.</p>
    <div class="mt-4 p-4 rounded-lg text-gray-800">
      <table class="w-full text-black rounded-md overflow-hidden">
        <thead>
          <tr class="bg-purple-500 text-white">
            <th class="py-2 px-4 text-center">Centang</th>
            <th class="py-2 px-4 text-center">Tugas</th>
            <th class="py-2 px-4 text-center">Status</th>
            <th class="py-2 px-4 text-center">Prioritas</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white hover:bg-gray-100">
            <td class="py-2 px-4 text-center">
              <input type="checkbox" checked disabled />
            </td>
            <td class="py-2 px-4 line-through text-center">Menyusun Proposal</td>
            <td class="py-2 px-4 text-center">Selesai</td>
            <td class="py-2 px-4 text-center">Tinggi</td>
          </tr>
          <tr class="bg-white hover:bg-gray-100">
            <td class="py-2 px-4 text-center">
              <input type="checkbox" checked disabled />
            </td>
            <td class="py-2 px-4 line-through text-center">Mengumpulkan Data</td>
            <td class="py-2 px-4 text-center">Selesai</td>
            <td class="py-2 px-4 text-center">Tinggi</td>
          </tr>
          <tr class="bg-white hover:bg-gray-100">
            <td class="py-2 px-4 text-center">
              <input type="checkbox" />
            </td>
            <td class="py-2 px-4 text-center">Merevisi Kode</td>
            <td class="py-2 px-4 text-center">Proses</td>
            <td class="py-2 px-4 text-center">Sedang</td>
          </tr>
          <tr class="bg-white hover:bg-gray-100">
            <td class="py-2 px-4 text-center">
              <input type="checkbox" />
            </td>
            <td class="py-2 px-4 text-center">Menulis Laporan Akhir</td>
            <td class="py-2 px-4 text-center">Belum Mulai</td>
            <td class="py-2 px-4 text-center">Tinggi</td>
          </tr>
          <tr class="bg-white hover:bg-gray-100">
            <td class="py-2 px-4 text-center">
              <input type="checkbox" />
            </td>
            <td class="py-2 px-4 text-center">Persiapan Presentasi</td>
            <td class="py-2 px-4 text-center">Belum Mulai</td>
            <td class="py-2 px-4 text-center">Rendah</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

const showModal = ref(false);

const submitBimbingan = () => {
  alert('Bimbingan berhasil diajukan!');
  showModal.value = false;
};

onMounted(() => {
  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Selesai', 'Dalam Proses', 'Belum Mulai'],
      datasets: [{
        data: [60, 30, 10], // Contoh data progress
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

.calendar-container {
  max-height: 300px; /* Adjust as necessary */
  overflow-y: auto;
}

.calendar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

/* Custom scrollbar styles */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px; /* Lebar scrollbar */
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #e0d7ff; /* Warna track scrollbar */
  border-radius: 8px; /* Membuat track scrollbar rounded */
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #7c3aed; /* Warna thumb scrollbar */
  border-radius: 8px; /* Membuat thumb scrollbar rounded */
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #5b21b6; /* Warna thumb scrollbar saat di hover */
}

</style>
