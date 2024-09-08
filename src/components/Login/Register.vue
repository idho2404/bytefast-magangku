<template>
    <div class="auth-container">
      <div class="auth-card">
        <h2 class="text-center text-3xl font-bold text-purple-600 mb-6">Daftar</h2>
        <form @submit.prevent="handleRegister">
          <div class="input-group">
            <label for="name">Nama Lengkap</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit" class="mt-8 w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg">Daftar</button>
        </form>
        <p class="text-center text-purple-600 py-3 mb-6">
          Sudah punya akun? <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      handleRegister() {
        // Proses pendaftaran
        console.log("Daftar dengan:", this.name, this.email, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f3f4f6;
  }
  
  .auth-card {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .auth-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #4f46e5;
    margin-bottom: 1.5rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .input-group input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  
  
  </style>
  