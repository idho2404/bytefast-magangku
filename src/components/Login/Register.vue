<template>
  <div class="auth-container">
    <div class="auth-left">
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
          <button type="submit" class="btn-register">Daftar</button>
        </form>
        <p class="text-center text-purple-600 py-3 mb-6">
          Sudah punya akun? <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
    <div class="auth-right">
      <img src="/src/assets/image/signup.png" alt="Signup Image" />
    </div>

    <!-- Modal Pop-up -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <p class="modal-message">Pendaftaran berhasil! Silakan login.</p>
        <button @click="redirectToLogin" class="btn-modal">OK</button>
      </div>
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
      showModal: false,
    };
  },
  methods: {
    handleRegister() {
      this.showModal = true;
    },
    redirectToLogin() {
      this.showModal = false;
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
}

.auth-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.auth-right img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
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

.btn-register {
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

.btn-register:hover {
  background-color: #6d28d9;
}

/* Modal Pop-up Style */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.modal-message {
  font-size: 1.5rem;
  font-weight: bold;
  color: grey; /* Warna ungu (purple-500) */
  margin-bottom: 1.5rem;
}

.btn-modal {
  padding: 0.8rem 1.6rem;
  background-color: #6F42C1;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
}

.btn-modal:hover {
  background-color: #6d28d9;
}

/* Responsive styling */
@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
  }

  .auth-right {
    display: none; /* Menyembunyikan gambar di layar kecil */
  }

  .auth-left {
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
