<template>
  <nav class="bg-white dark:bg-black dark:text-white border-b border-purple-800 fixed top-0 left-0 w-full z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo dan Nama -->
        <div class="flex items-center">
          <img class="h-12 w-auto" src="../assets/image/image.png" alt="Logo" />
        </div>

        <!-- Menu Navigasi Desktop -->
        <div class="hidden sm:flex sm:space-x-8">
          <router-link to="/" class="border-transparent text-gray-500 dark:text-gray-200 hover:border-gray-300 hover:text-purple-700 dark:hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
            Beranda
          </router-link>
          <router-link to="/administrasi" class="border-transparent text-gray-500 dark:text-gray-200 hover:border-gray-300 hover:text-purple-700 dark:hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
            Administrasi
          </router-link>
          <router-link to="/berita" class="border-transparent text-gray-500 dark:text-gray-200 hover:border-gray-300 hover:text-purple-700 dark:hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
            Berita
          </router-link>
          <router-link to="/profil" class="border-transparent text-gray-500 dark:text-gray-200 hover:border-gray-300 hover:text-purple-700 dark:hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
            Profil
          </router-link>
        </div>

        <!-- Tombol Aksi dan Toggle Dark Mode Desktop -->
        <div class="hidden sm:flex sm:items-center sm:space-x-4">
          <!-- Toggle Dark Mode -->
          <button @click="toggleDarkMode" class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 hover:border-purple-800 focus:outline-none">
            <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>
          <!-- Profile Image -->
          <router-link to="/profil">
            <img class="h-10 w-10 rounded-full object-cover border border-gray-300 hover:border-purple-800" src="../assets/image/foto.png" alt="Profile" />
          </router-link>
          <!-- Logout Button as Icon -->
          <button class="flex items-center justify-center w-10 h-10 rounded-full text-white bg-red-800 hover:bg-red-500 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-100 hover:text-purple-700 dark:hover:bg-gray-800">
          Beranda
        </router-link>
        <router-link to="/administrasi" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-100 hover:text-purple-700 dark:hover:bg-gray-800">
          Administrasi
        </router-link>
        <router-link to="/berita" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-100 hover:text-purple-700 dark:hover:bg-gray-800">
          Berita
        </router-link>
        <router-link to="/profil" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-100 hover:text-purple-700 dark:hover:bg-gray-800">
          Profil
        </router-link>
      </div>

      <!-- Mobile Action Buttons -->
<div class="px-2 pt-4 pb-3 space-y-1">
  <!-- Toggle Dark Mode Button with Icon -->
  <button @click="toggleDarkMode" class="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-100 hover:text-purple-700 dark:hover:bg-gray-800">
    <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
    Dark Mode
  </button>

  <!-- Profile Link with Image -->
  <router-link to="/profil" class="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-100 hover:text-purple-700 dark:hover:bg-gray-800">
    <img class="w-6 h-6 rounded-full object-cover mr-2 border border-gray-300" src="../assets/image/foto.png" alt="Profile" />
    Profil
  </router-link>

  <!-- Logout Button with Icon -->
  <button class="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-white bg-red-800 hover:bg-red-500">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
      <path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd" />
    </svg>
    Logout
  </button>
</div>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false);
const isDarkMode = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<style scoped>
/* Optional: Add any additional custom styles here */
</style>
