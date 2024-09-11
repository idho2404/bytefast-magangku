<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex justify-center text-center items-center mb-4 border-b border-gray-300 pb-5">
      <h3 class="text-2xl text-black font-bold text-center text-purple-700">LAPORAN MAGANG</h3>
    </div>

    <!-- Submission Date and File Upload -->
    <div class="bg-white dark:bg-dark-300 dark:text-white p-6 rounded-lg shadow-md">
      <!-- Tanggal Pengumpulan Laporan Magang -->
      <div class="mb-4 w-full md:w-[25rem]">
        <label for="submissionDate" class="block text-sm font-medium text-gray-700">Tanggal Pengumpulan</label>
        <input v-model="submissionDate" type="date" id="submissionDate" class="mt-1 bg-purple-800 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
      </div>

      <!-- Berkas Laporan Magang -->
      <div class="mb-4">
        <label for="reportFile" class="block text-sm font-medium text-gray-700">Berkas Laporan Magang</label>
        <div @dragover.prevent @drop.prevent="handleFileDrop" class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-purple-300 border-dashed rounded-md cursor-pointer" @click="triggerFileInput">
          <div class="space-y-1 text-center">
            <font-awesome-icon icon="image" class="mx-auto text-9xl text-purple-800"/>
            <div class="flex flex-col text-sm text-gray-600">
              <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-purple-800 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                <span>Tarik File Ke Sini atau Klik Untuk Memilih File</span>
              </label>
              <p class="pl-1">Maksimal File 200 Mb</p>
            </div>
            <p class="text-xs text-gray-500" v-if="reportFile">File: {{ reportFile.name }}</p>
            <input id="file-upload" name="file-upload" type="file" class="sr-only" ref="fileInput" @change="handleFileChange" />
          </div>
        </div>
      </div>

      <!-- Upload Progress Bar -->
      <div v-if="uploadProgress > 0 && uploadProgress < 100" class="mb-4">
        <div class="h-2 bg-gray-200 rounded-full">
          <div class="h-full bg-purple-800 rounded-full" :style="{ width: uploadProgress + '%' }"></div>
        </div>
        <p class="text-sm text-gray-600 mt-2">{{ uploadProgress }}% completed</p>
      </div>

      <!-- Upload Button -->
      <div class="flex justify-end">
        <button @click="uploadReport" class="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-800 flex items-center">
          <font-awesome-icon icon="cloud-upload-alt" class="mr-2" />
          Upload
        </button>
      </div>

      <!-- Report Status -->
      <div v-if="reportStatus" class="mt-10 p-4 rounded-lg bg-indigo-50 text-purple-700 flex justify-between items-center">
        <p><strong>Status:</strong> {{ reportStatus }}</p>
        <button 
          v-if="reportFileUrl" 
          @click="viewReport" 
          class="flex items-center hover:text-blue-500 transition duration-300"
          :style="{ 'outline': 'none', 'border': 'none' }"
        >
          <svg class="w-6 h-6 text-purple-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
          </svg>
          <span class="ml-1 text-purple-800 hover:text-blue-800 transition duration-300">Lihat Laporan</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const submissionDate = ref('');
const reportFile = ref(null);
const uploadProgress = ref(0);
const reportStatus = ref('Belum Diterima'); // Initial status
const reportFileUrl = ref(null); // To store the uploaded report's URL for viewing

const triggerFileInput = () => {
  document.getElementById('file-upload').click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file.size <= 200 * 1024 * 1024) { // 200MB limit
    reportFile.value = file;
  } else {
    alert('File terlalu besar. Maksimal ukuran file adalah 200MB.');
    reportFile.value = null;
  }
};

const handleFileDrop = (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  if (file.size <= 200 * 1024 * 1024) {
    reportFile.value = file;
  } else {
    alert('File terlalu besar. Maksimal ukuran file adalah 200MB.');
    reportFile.value = null;
  }
};

const uploadReport = () => {
  if (!reportFile.value) {
    alert('Silakan pilih file untuk diunggah.');
    return;
  }

  uploadProgress.value = 0;
  const interval = setInterval(() => {
    if (uploadProgress.value < 100) {
      uploadProgress.value += 10;
    } else {
      clearInterval(interval);
      alert('Laporan berhasil diunggah.');
      reportStatus.value = 'Diterima';
      reportFileUrl.value = URL.createObjectURL(reportFile.value); // Store the file URL for viewing
      reportFile.value = null;
      uploadProgress.value = 0;
    }
  }, 200);
};

const viewReport = () => {
  if (reportFileUrl.value) {
    window.open(reportFileUrl.value);
  }
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
