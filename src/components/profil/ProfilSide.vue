<template>
  <div class="flex flex-col min-h-[calc(100vh-4rem)] p-5 dark:bg-black">
    <!-- Header Section -->
    <!-- <div class="text-center mb-4">
      <h2 class="text-xl font-bold text-black">Administrasi Magang</h2>
    </div> -->

    <!-- Main Content with Sidebar -->
    <div class="flex flex-1 flex-col md:flex-row mt-1">
      <!-- Sidebar -->
      <aside class="w-full md:w-1/5 bg-purple-800 text-white p-6 rounded-lg md:mr-6 mb-4 md:mb-0">
        <div>
          <h1 class="text-2xl font-bold mb-10">LINK</h1>
          <nav>
            <ul>
              <!-- Edit Profil -->
              <li class="mb-4">
                <a
                  href="#"
                  @click.prevent="currentView = 'EditProfil'"
                  :class="['flex items-center', currentView === 'EditProfil' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-5 h-5 mr-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                  Edit Profil
                </a>
              </li>
              <!-- Laporan Magang -->
              <li class="mb-4">
                <a
                  href="#"
                  @click.prevent="currentView = 'ResetPassword'"
                  :class="['flex items-center', currentView === 'ResetPassword' ? 'text-purple-300' : 'hover:text-purple-300']"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-5 h-5 mr-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>

                  Reset Password
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="w-full md:w-4/5 bg-none border p-6 rounded-lg dark:bg-purple-800 dark:border-none">
        <component :is="componentMap[currentView]" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Importing components
import EditProfil from "../profil/EditProfil.vue"
import ResetPassword from "../profil/ResetPassword.vue"

// Mapping view names to components
const componentMap = {
  EditProfil,
  ResetPassword
};

// Reactive state
const currentView = ref('EditProfil');
</script>

<style scoped>
</style>
