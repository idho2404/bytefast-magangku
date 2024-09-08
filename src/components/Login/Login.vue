<template>
    <div class="auth-container">
      <div class="auth-card">
        <h2 class="text-center text-3xl font-bold text-purple-600 mb-6">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit" class="mt-8 w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg">Login</button>
        </form>
        <p class="text-center text-purple-600 py-3 mb-6">
          Belum punya akun? <router-link to="/register">Daftar</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // Proses login
        console.log("Login dengan:", this.email, this.password);
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
  
  .btn-primary {
    width: 100%;
    padding: 0.8rem;
    background-color: #4f46e5;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .btn-primary:hover {
    background-color: #4338ca;
  }
  
  .auth-link {
    margin-top: 1rem;
    text-align: center;
  }
  
  .auth-link a {
    color: #4f46e5;
    text-decoration: none;
  }
  </style>
  