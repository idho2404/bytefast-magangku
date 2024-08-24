<template>
  <div class="flex flex-col min-h-[calc(100vh-4rem)] p-5">
    <!-- Header Section -->
    <!-- <div class="text-center mb-4">
      <h2 class="text-xl font-bold text-black">Administrasi Magang</h2>
    </div> -->

    <!-- Main Content with Sidebar -->
    <div class="flex flex-1 flex-col md:flex-row mt-1">
      <!-- Sidebar -->
      <aside class="w-full md:w-1/5 bg-indigo-900 text-white p-6 rounded-lg md:mr-6 mb-4 md:mb-0">
        <div>
          <h1 class="text-2xl font-bold mb-10">MagangKu</h1>
          <nav>
            <ul>
              <!-- Presensi -->
              <li class="mb-4">
                <a
                  href="#"
                  @click.prevent="currentView = 'Presensi'"
                  :class="['flex items-center', currentView === 'Presensi' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M3 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H3zM9 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H9zM3 9a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H3zM9 9a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H9z"
                    />
                  </svg>
                  Presensi
                </a>
              </li>

              <!-- Logbook -->
              <li class="mb-4">
                <div
                  @click="toggleDropdown('logbook')"
                  class="flex items-center justify-between cursor-pointer hover:text-purple-300"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M7 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H7z"
                      />
                    </svg>
                    Logbook
                  </div>
                  <svg
                    :class="{'transform rotate-180': dropdowns.logbook}"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <ul v-show="dropdowns.logbook" class="ml-6 mt-2">
                  <li class="mb-2">
                    <a
                      href="#"
                      @click.prevent="currentView = 'LogbookHarian'"
                      :class="['flex items-center', currentView === 'LogbookHarian' ? 'text-purple-300' : 'hover:text-purple-300']"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M2.5 4A1.5 1.5 0 014 2.5h12A1.5 1.5 0 0117.5 4v12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 16V4zM4 4v12h12V4H4z"
                        />
                      </svg>
                      Logbook Harian
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      @click.prevent="currentView = 'LogbookBulanan'"
                      :class="['flex items-center', currentView === 'LogbookBulanan' ? 'text-purple-300' : 'hover:text-purple-300']"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M3.25 5A2.25 2.25 0 015.5 2.75h9A2.25 2.25 0 0116.75 5v10A2.25 2.25 0 0114.5 17.25h-9A2.25 2.25 0 013.25 15V5zM5.5 3.5A1.25 1.25 0 004.25 4.75v10a1.25 1.25 0 001.25 1.25h9a1.25 1.25 0 001.25-1.25v-10a1.25 1.25 0 00-1.25-1.25h-9z"
                        />
                      </svg>
                      Logbook Bulanan
                    </a>
                  </li>
                </ul>
              </li>

              <!-- Laporan Magang -->
              <li class="mb-4">
                <a
                  href="#"
                  @click.prevent="currentView = 'LaporanMagang'"
                  :class="['flex items-center', currentView === 'LaporanMagang' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z"
                    />
                  </svg>
                  Laporan Magang
                </a>
              </li>

              <!-- Bimbingan Magang -->
              <li class="mb-4">
                <div
                  @click="toggleDropdown('bimbinganMagang')"
                  class="flex items-center justify-between cursor-pointer hover:text-purple-300"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M5 3a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H5z"
                      />
                    </svg>
                    Bimbingan Magang
                  </div>
                  <svg
                    :class="{'transform rotate-180': dropdowns.bimbinganMagang}"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <ul v-show="dropdowns.bimbinganMagang" class="ml-6 mt-2">
                  <li class="mb-2">
                    <a
                      href="#"
                      @click.prevent="currentView = 'BimbinganMagang'"
                      :class="['flex items-center', currentView === 'BimbinganMagang' ? 'text-purple-300' : 'hover:text-purple-300']"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M4 2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H4zm1 2h10v10H5V4z"
                        />
                      </svg>
                      Bimbingan
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      @click.prevent="currentView = 'PerizinanKampus'"
                      :class="['flex items-center', currentView === 'PerizinanKampus' ? 'text-purple-300' : 'hover:text-purple-300']"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M8 2a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V3a1 1 0 00-1-1H8z"
                        />
                      </svg>
                      Perizinan Kampus
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="w-full md:w-4/5 bg-none border p-6 rounded-lg">
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
import LogbookBulanan from '../administrasi/LogbookBulanan.vue';
import LaporanMagang from '../administrasi/LaporanMagang.vue';
import BimbinganMagang from '../administrasi/BimbinganMagang.vue';
import PerizinanKampus from '../administrasi/PerizinanKampus.vue';

// Mapping view names to components
const componentMap = {
  Presensi,
  LogbookHarian,
  LogbookBulanan,
  LaporanMagang,
  BimbinganMagang,
  PerizinanKampus,
};

// Reactive state
const currentView = ref('Presensi');

const dropdowns = ref({
  logbook: false,
  bimbinganMagang: false,
});

// Methods
function toggleDropdown(menu) {
  dropdowns.value[menu] = !dropdowns.value[menu];
}
</script>

<style scoped>
/* Optional: Add transitions for dropdown menus */
ul[v-show] {
  transition: all 0.3s ease;
  overflow: hidden;
}
</style>
