<template>
  <div class="p-6 flex flex-col">
    <!-- Header -->
    <h3 class="text-2xl text-black font-bold text-purple-700 mb-6 text-center">DOKUMEN MAGANG</h3>

    <!-- Search Bar -->
    <div class="relative mb-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Cari dokumen..."
        class="w-full pl-10 pr-4 py-2 text-white bg-purple-600 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="absolute left-3 top-2.5 w-5 h-5 text-white"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16s4-4 6-4 6 4 6 4M9 10a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    </div>

    <!-- Documents Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(doc, index) in documents"
        :key="index"
        class="bg-gradient-to-r from-purple-500 to-indigo-500 p-5 rounded-lg shadow-lg flex flex-col items-center text-white transform hover:scale-105 transition-transform"
      >
        <div class="mb-4 w-12 h-12 bg-white bg-opacity-20 flex items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h8m4-2a2 2 0 002-2v-5m-7 4h-5l1.586-1.586a1 1 0 00.293-.707V6a1 1 0 00-1-1H7a1 1 0 00-1 1v6a1 1 0 00.293.707L8.586 14H4m8 0v1m4 1h-1a1 1 0 100 2h1a1 1 0 100-2z" />
          </svg>
        </div>
        <p class="text-lg text-center font-semibold">{{ doc.title }}</p>
        <p class="text-sm text-center mb-4">{{ doc.description }}</p>
        <a
          href="#"
          class="mt-auto bg-white text-purple-600 font-bold px-4 py-2 rounded-full shadow hover:bg-purple-200 transition-colors"
        >
          Unduh
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const documents = [
  {
    title: 'Proposal Magang',
    description: 'Dokumen proposal magang untuk mahasiswa.',
  },
  {
    title: 'Format Logbook',
    description: 'Template logbook harian untuk mahasiswa.',
  },
  {
    title: 'Format Laporan',
    description: 'Format laporan magang resmi.',
  },
  {
    title: 'Pembekalan PPT',
    description: 'Template PPT untuk pembekalan magang.',
  },
  {
    title: 'Daftar Mahasiswa & Tempat Magang',
    description: 'Daftar lengkap mahasiswa dan tempat magang (XLSX).',
  },
  {
    title: 'Surat Perizinan',
    description: 'Surat perizinan untuk kegiatan magang.',
  },
  {
    title: 'Surat Pengantar',
    description: 'Surat pengantar resmi untuk magang.',
  },
];
</script>

<style scoped>
/* Additional styling if necessary */
</style>
