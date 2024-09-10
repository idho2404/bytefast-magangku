<template>
  <div class="flex flex-col min-h-[calc(100vh-4rem)] p-5">
    <!-- Header Section -->
    <!-- <div class="text-center mb-4">
      <h2 class="text-xl font-bold text-black">Administrasi Magang</h2>
    </div> -->

    <!-- Main Content with Sidebar -->
    <div class="flex flex-1 flex-col md:flex-row mt-1">
      <!-- Sidebar -->
      <aside class="w-full md:w-1/5 bg-[#512E91] text-white p-6 rounded-lg md:mr-6 mb-4 md:mb-0">
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
                  Reset Password
                </a>
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
