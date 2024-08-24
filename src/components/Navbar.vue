<template>
  <nav class="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo dan Nama -->
        <div class="flex items-center">
          <img class="h-12 w-auto" src="../assets/image/image.png" alt="Logo" />
        </div>

        <!-- Menu Navigasi -->
        <div class="hidden sm:flex sm:space-x-8">
          <router-link to="/" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
            Beranda
          </router-link>
          <router-link to="/administrasi" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
            Administrasi
          </router-link>
          <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
            Profil
          </a>
          <div class="relative" @mouseleave="closeDropdown">
            <button @click="toggleDropdown" @mouseenter="openDropdown" type="button" class="text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-gray-700 focus:outline-none">
              Resources
              <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div v-if="isDropdownOpen" class="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 1</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 2</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 3</a>
            </div>
          </div>
        </div>

        <!-- Tombol Aksi dan Toggle Dark Mode -->
        <div class="hidden sm:flex sm:items-center sm:space-x-4">
          <!-- Toggle Dark Mode -->
          <button @click="toggleDarkMode" class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 focus:outline-none">
            <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>

          </button>
          <button class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md">Get Started</button>
          <button class="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold py-2 px-4 rounded-md">Login</button>
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

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-purple-500 text-base font-medium text-purple-700 bg-purple-50 focus:outline-none focus:bg-purple-100 focus:border-purple-700">Beranda</a>
        <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300">Administrasi</a>
        <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300">Profil</a>
        <a @click="toggleDropdown" href="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 flex justify-center items-center">
          Resources
          <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <div v-if="isDropdownOpen" class="bg-purple-50">
          <a href="#" class="block pl-10 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-100 hover:border-gray-300">Link 1</a>
          <a href="#" class="block pl-10 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-100 hover:border-gray-300">Link 2</a>
          <a href="#" class="block pl-10 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-100 hover:border-gray-300">Link 3</a>
        </div>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <button class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md w-full">Get Started</button>
          <button class="ml-4 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold py-2 px-4 rounded-md w-full">Login</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);
const isDarkMode = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function openDropdown() {
  isDropdownOpen.value = true;
}

function closeDropdown() {
  isDropdownOpen.value = false;
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
