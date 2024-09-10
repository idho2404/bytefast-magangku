<template>
  <div class="auth-container">
    <div class="auth-left">
      <img src="/src/assets/image/login.png" alt="Login Image" />
    </div>
    <div class="auth-right">
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
          <button type="submit" class="btn-login">Login</button>
        </form>
        <p class="text-center text-purple-600 py-3 mb-6">
          Belum punya akun? <router-link to="/register">Daftar</router-link>
        </p>
      </div>
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
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
}

.auth-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.auth-left img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.auth-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: gray;
}

.input-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 1rem;
}

.btn-login {
  width: 100%;
  padding: 0.8rem;
  background-color: #6F42C1;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.btn-login:hover {
  background-color: #6d28d9;
}

/* Responsive styling */
@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
  }

  .auth-left {
    display: none; /* Menyembunyikan gambar di layar kecil */
  }

  .auth-right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem; /* Padding atas untuk posisi form */
  }

  .auth-card {
    padding: 1.5rem; /* Kurangi padding di layar kecil */
    margin: 0 1rem; /* Margin samping */
  }
}

@media (max-width: 480px) {
  .auth-card {
    padding: 1rem; /* Kurangi padding lebih jauh */
  }

  .input-group label {
    font-size: 1.1rem;
  }

  .btn-login {
    font-size: 1.1rem;
  }
}
</style>
