<template>
  <div class="flex flex-col min-h-screen p-5 border-r-2 ">
    <!-- Main Content with Sidebar -->
    <div class="flex flex-col md:flex-row">
      <!-- Sidebar -->
      <aside
        class="w-full md:w-64 bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-6 rounded-lg md:fixed md:top-16 md:left-5 md:ml-5 md:mt-5 md:mb-5 shadow-lg flex flex-col justify-between"
      >
        <div class="p-4">
          <div class="border-b-2 mb-10">
            <h1 class="text-2xl text-center font-bold mb-2">LINK</h1>
          </div>
          <nav>
            <ul>
              <!-- Presensi -->
              <li class="mb-8">
                <a
                  href="#"
                  @click.prevent="currentView = 'Presensi'"
                  :class="['flex items-center', currentView === 'Presensi' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg class="w-5 h-5 mr-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"/>
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"/>
                  </svg>
                  Presensi
                </a>
              </li>

              <!-- Logbook (directly calls Logbook Harian) -->
              <li class="mb-8">
                <a
                  href="#"
                  @click.prevent="currentView = 'LogbookHarian'"
                  :class="['flex items-center', currentView === 'LogbookHarian' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg class="w-5 h-5 mr-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
                  </svg>

                  Logbook
                </a>
              </li>

              <!-- Laporan Magang -->
              <li class="mb-8">
                <a
                  href="#"
                  @click.prevent="currentView = 'LaporanMagang'"
                  :class="['flex items-center', currentView === 'LaporanMagang' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg class="w-5 h-5 mr-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
                  </svg>
                  Laporan
                </a>
              </li>

              <!-- Bimbingan (without dropdown) -->
              <li class="mb-8">
                <a
                  href="#"
                  @click.prevent="currentView = 'BimbinganMagang'"
                  :class="['flex items-center', currentView === 'BimbinganMagang' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg class="w-5 h-5 mr-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z"/>
                  </svg>

                  Bimbingan
                </a>
              </li>

              <!-- Perizinan Kampus -->
              <li class="mb-8">
                <a
                  href="#"
                  @click.prevent="currentView = 'PerizinanKampus'"
                  :class="['flex items-center', currentView === 'PerizinanKampus' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg class="w-5 h-5 mr-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
                  </svg>

                  Perizinan
                </a>
              </li>

              <!-- Template Dokumen -->
              <li class="mb-8">
                <a
                  href="#"
                  @click.prevent="currentView = 'Template'"
                  :class="['flex items-center', currentView === 'Template' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg class="w-5 h-5 mr-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                  <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z"/>
                </svg>

                  Template
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Footer Element for Equal Spacing -->
        <div class="text-xs text-center mt-auto text-gray-400">
          &copy; 2024 MagangKu. All rights reserved.
        </div>
      </aside>

      <!-- Main Content -->
      <main class="w-full md:w-4/5 bg-none md:ml-72 md:pl-10">
        <!-- Component Content -->
        <component :is="componentMap[currentView]" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Importing components
import Presensi from '../administrasi/Presensi.vue';
import LogbookHarian from '../administrasi/LogbookHarian.vue';
import LaporanMagang from '../administrasi/LaporanMagang.vue';
import BimbinganMagang from '../administrasi/BimbinganMagang.vue';
import PerizinanKampus from '../administrasi/PerizinanKampus.vue';
import Template from '../administrasi/Template.vue';

// Mapping view names to components
const componentMap = {
  Presensi,
  LogbookHarian,
  LaporanMagang,
  BimbinganMagang,
  PerizinanKampus,
  Template,
};

// Reactive state
const currentView = ref('Presensi');
</script>

<style scoped>
/* Optional: Add transitions for hover effects */
ul[v-show] {
  transition: all 0.3s ease;
  overflow: hidden;
}

aside {
  transition: all 0.3s ease-in-out;
}
aside ul {
  list-style-type: none;
}
aside ul li {
  transition: all 0.3s ease-in-out;
}
aside ul li:hover {
  transform: translateX(5px);
}
</style>
