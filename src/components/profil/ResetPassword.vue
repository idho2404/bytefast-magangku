<template>
  <div class="bg-white rounded-lg shadow-lg p-6">
    <!-- Profile Info -->
    <div class="flex flex-col md:flex-row items-center mb-8 justify-center mt-12">
      <div class="w-24 h-24 md:w-36 md:h-36 bg-gray-200 rounded-full mb-4 md:mb-0 md:mr-6"></div>
      <div class="text-center md:text-left">
        <h3 class="text-lg md:text-xl font-semibold text-black">Akma Batrisyia Jazima</h3>
        <p class="text-gray-700">222111871</p>
        <p class="text-gray-500">D4 Komputasi Statistik</p>
      </div>
    </div>

    <!-- Password Reset Form -->
    <form @submit.prevent="handleSubmit" class="w-full md:w-1/2 mx-auto mt-10 md:mt-20">
      <div class="mb-4">
        <label class="block text-gray-700">Password lama</label>
        <input 
          type="password"
          v-model="oldPassword" 
          placeholder="Masukkan password lama" 
          class="w-full border border-gray-300 rounded-md p-2 mt-1" 
          required
        />
      </div>
      
      <div class="mb-4">
        <label class="block text-gray-700">Password baru</label>
        <input 
          type="password"
          v-model="newPassword" 
          placeholder="Masukkan password baru" 
          class="w-full border border-gray-300 rounded-md p-2 mt-1" 
          required
        />
      </div>
      
      <div class="mb-4">
        <label class="block text-gray-700">Konfirmasi password baru</label>
        <input 
          type="password"
          v-model="confirmPassword" 
          placeholder="Konfirmasi password baru" 
          class="w-full border border-gray-300 rounded-md p-2 mt-1" 
          required
        />
      </div>
      
      <div class="flex justify-center mt-6">
        <button type="submit" class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">Simpan</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const handleSubmit = () => {
  if (newPassword.value !== confirmPassword.value) {
    alert('Password baru dan konfirmasi password tidak cocok!');
    return;
  }

  // Proses penggantian password dapat ditambahkan di sini

  alert('Password berhasil diubah!');
};
</script>

<style scoped>
/* Additional styles for the form */
input::placeholder {
  color: #9CA3AF; /* Tailwind's gray-400 color */
  opacity: 1; /* Show placeholder text */
}
button {
  font-size: 0.875rem; /* Adjust button font size for better fit */
}
</style>
