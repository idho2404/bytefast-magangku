<template>
  <div class="px-4 md:px-20 py-10">
    <!-- Header -->
    <h2 class="text-center text-3xl font-semibold text-black mb-8">BERITA <span class="text-purple-600">TERBARU</span></h2>

    <!-- Search Feature -->
    <div class="flex justify-center mb-8">
      <div class="relative w-full sm:w-1/2 md:w-1/3">
        <input 
          v-model="searchQuery"
          @input="search"
          type="text" 
          placeholder="Cari berita..." 
          class="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full"
        />
        <!-- <svg class="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 14a7 7 0 010-14 7 7 0 010 14zm-3-7h6"></path>
        </svg> -->
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Left Column (Main News) -->
      <div class="md:col-span-2">
        <!-- Tabs -->
        <div class="flex space-x-4 border-b-2 border-purple-600 mb-6">
          <button @click="filterCategory('Semua')" class="pb-2 px-4" :class="{ 'bg-purple-600 text-white font-semibold rounded-none': activeCategory === 'Semua', 'text-gray-500 hover:text-purple-600 focus:outline-none border-none': activeCategory !== 'Semua' }">
              Semua
          </button>
          <button @click="filterCategory('Terbaru')" class="pb-2 px-4" :class="{ 'bg-purple-600 text-white font-semibold rounded-none': activeCategory === 'Terbaru', 'text-gray-500 hover:text-purple-600 focus:outline-none border-none': activeCategory !== 'Terbaru' }">
              Terbaru
          </button>
        </div>

        <!-- News List -->
        <div class="space-y-6">
          <div class="flex space-x-4 border-b-2 border-purple-600 py-2" v-for="news in paginatedNews" :key="news.id">
            <img :src="news.imageSrc" alt="News Image" class="w-40 h-25 object-cover rounded-md">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-800">{{ news.title }}</h3>
              <p class="text-sm text-purple-200 mt-1">{{ news.date }}</p>
              <div class="flex items-center space-x-2 mt-2">
                <span class="text-sm text-red-500">{{ news.views }} kali</span>
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{{ news.category }}</span>
                <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{{ news.author }}</span>
              </div>
              <p class="mt-2 text-gray-700">{{ news.description }}</p>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-6">
          <nav class="inline-flex rounded-md shadow">
            <!-- <a href="#" @click.prevent="changePage(1)" :class="paginationButtonClass(1)">First</a> -->
            <a href="#" @click.prevent="changePage(currentPage - 1)" :class="paginationButtonClass('prev')">&laquo;</a>
            <a href="#" v-for="page in totalPages" :key="page" @click.prevent="changePage(page)" :class="paginationButtonClass(page)">
              {{ page }}
            </a>
            <a href="#" @click.prevent="changePage(currentPage + 1)" :class="paginationButtonClass('next')">&raquo;</a>
            <!-- <a href="#" @click.prevent="changePage(totalPages)" :class="paginationButtonClass(totalPages)">Last</a> -->
          </nav>
        </div>
      </div>

      <!-- Right Column (Popular News) -->
      <div class="bg-purple-600 p-6 rounded-lg shadow-lg h-max">
        <h3 class="text-2xl font-semibold text-white mb-6">Berita Populer</h3>
        <div class="space-y-4">
          <div class="flex space-x-4 border-b pb-2" v-for="news in popularNews" :key="news.id">
            <img :src="news.imageSrc" alt="Popular News Image" class="w-20 h-20 object-cover rounded-md">
            <div class="flex-1">
              <h4 class="text-md font-semibold text-white">{{ news.title }}</h4>
              <div class="flex justify-between mt-1">
                <p class="text-sm text-purple-200">{{ news.date }}</p>
                <span class="text-sm text-white ml-4">{{ news.views }} kali</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Dummy data for news
const newsList = ref([
  { id: 1, title: 'Menggali Data di Pulau Dewata bersama PKL D-IV Angkatan 63', date: '04 Maret 2024', views: 114, category: 'Terbaru', author: 'Emily Azizaida', description: 'Mengiringi perayaan hari-hari besar umat Hindu...', imageSrc: '/src/assets/image/news.jpg' },
  { id: 2, title: 'Doa Bersama PKL Prodi D-IV Angkatan 63 T.A. 2023/2024', date: '23 Februari 2024', views: 1045, category: 'Terbaru',author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  { id: 3, title: 'Rapat Akbar I PKL Prodi D-IV Angkatan 63 T.A. 2023/2024', date: '10 November 2023', views: 376, category: 'Terbaru',author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam tortor, gravida accumsan odio a, ullamcorper porta velit. ', date: '10 November 2023', views: 376, author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam tortor, gravida accumsan odio a, ullamcorper porta velit. ', date: '10 November 2023', views: 376, author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam tortor, gravida accumsan odio a, ullamcorper porta velit. ', date: '10 November 2023', views: 376, author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  { id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam tortor, gravida accumsan odio a, ullamcorper porta velit. ', date: '10 November 2023', views: 376, author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  { id: 8, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam tortor, gravida accumsan odio a, ullamcorper porta velit. ', date: '10 November 2023', views: 376, author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  { id: 9, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam tortor, gravida accumsan odio a, ullamcorper porta velit. ', date: '10 November 2023', views: 376, author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  { id: 10, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam tortor, gravida accumsan odio a, ullamcorper porta velit. ', date: '10 November 2023', views: 376, author: 'Emily Azizaida', imageSrc: '/src/assets/image/news.jpg' },
  // Add more dummy news items here
]);

const popularNews = ref([
  { id: 1, title: 'Doa Bersama PKL Prodi D-IV Angkatan 63 T.A. 2023/2024', date: '23 Februari 2024', views: 1045, imageSrc: '/src/assets/image/news.jpg' },
  { id: 2, title: 'Rapat Akbar I PKL Prodi D-IV Angkatan 63 T.A. 2023/2024', date: '10 November 2023', views: 376, imageSrc: '/src/assets/image/news.jpg' },
  { id: 3, title: 'Menggali Data di Pulau Dewata bersama PKL D-IV...', date: '04 Maret 2024', views: 114, imageSrc: '/src/assets/image/news.jpg' },
  // Add more dummy popular news items here
]);

const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 5;
const activeCategory = ref('Semua');

const filteredNews = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return newsList.value.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(query);
    const matchesCategory = activeCategory.value === 'Semua' || news.category === activeCategory.value;
    return matchesSearch && matchesCategory;
  });
});

const totalPages = computed(() => {
  return Math.ceil(filteredNews.value.length / itemsPerPage);
});

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredNews.value.slice(start, end);
});

const paginationButtonClass = (page) => {
  if (page === 'prev') {
    return currentPage.value === 1 
      ? 'px-3 py-2 bg-gray-200 border border-gray-300 text-gray-500 rounded-md' 
      : 'px-3 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-purple-500 hover:text-white rounded-md';
  } else if (page === 'next') {
    return currentPage.value === totalPages.value 
      ? 'px-3 py-2 bg-gray-200 border border-gray-300 text-gray-500 rounded-md' 
      : 'px-3 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-purple-500 hover:text-white rounded-md';
  } else if (page === currentPage.value) {
    return 'px-3 py-2 bg-purple-500 border border-gray-300 text-white rounded-md';
  } else {
    return 'px-3 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-purple-500 hover:text-white rounded-md';
  }
};


const changePage = (page) => {
  if (page === 'prev' && currentPage.value > 1) {
    currentPage.value--;
  } else if (page === 'next' && currentPage.value < totalPages.value) {
    currentPage.value++;
  } else if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const filterCategory = (category) => {
  activeCategory.value = category;
  currentPage.value = 1; // Reset to the first page when changing the category
};

const search = () => {
  currentPage.value = 1; // Reset to the first page when searching
};
</script>

<style scoped>
/* Custom Styling */
.bg-purple-600 {
  background-color: #6b46c1;
}

.text-purple-600 {
  color: #6b46c1;
}

.border-purple-600 {
  border-color: #6b46c1;
}

.text-purple-200 {
  color: #e9d8fd;
}

.bg-purple-700 {
  background-color: #4a3c6d;
}

.text-purple-100 {
  color: #d6bcfa;
}

.bg-white {
  background-color: #ffffff;
}

.text-gray-500 {
  color: #6b7280;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.text-gray-800 {
  color: #1f2937;
}

.rounded-md {
  border-radius: 0.375rem;
}
</style>
