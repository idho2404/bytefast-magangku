<template>
  <!-- Section Portofolio -->
  <div class="bg-gradient-to-b from-white via-white to-purple-200 dark:bg-gradient-to-b from-black via-gray-700 to-gray-400 pt-0 pb-5 py-16">
    <div class="container mx-auto px-12 py-20 lg:py-10 relative">
      <!-- Judul Utama -->
      <h2 class="text-center text-3xl font-bold text-purple-600 mb-8">PORTOFOLIO</h2>

      <!-- Container for navigation buttons -->
      <div class="absolute inset-y-0 left-0 flex items-center pl-4 z-10">
        <button @click="prevSlide" class="bg-grey-600 text-white rounded-full shadow p-1.5 opacity-75 hover:opacity-100 transition-opacity duration-200">
          <svg class="h-5 w-5" viewBox="0 0 12 18" fill="grey" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.43741 8.99998L11.0374 15.6L9.15208 17.4866L0.666748 8.99998L9.15208 0.514648L11.0374 2.39998L4.43741 8.99998Z" />
          </svg>
        </button>
      </div>

      <div class="absolute inset-y-0 right-0 flex items-center pr-4 z-10">
        <button @click="nextSlide" class="bg-grey-600 text-white rounded-full shadow p-1.5 opacity-75 hover:opacity-100 transition-opacity duration-200">
          <svg class="h-5 w-5" viewBox="0 0 12 18" fill="grey" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.56265 9.00011L0.962646 2.40011L2.84798 0.516113L11.3333 9.00011L2.84798 17.4854L0.962646 15.5988L7.56265 9.00011Z" />
          </svg>
        </button>
      </div>

      <!-- Carousel Portofolio -->
      <div class="relative overflow-hidden">
        <div ref="carousel" class="flex transition-transform duration-300">
          <div
            v-for="i in 10"
            :key="i"
            class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2"
          >
            <CardPortofolio
              :title="'Portofolio ' + i"
              imageSrc="/src/assets/image/portofolio.png"
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CardPortofolio from '../general/CardPortofolio.vue';

const currentIndex = ref(0);
const slidesToShow = ref(4); // Default for large screens

const carousel = ref(null);
const autoSlideInterval = ref(null);

const updateSlideToShow = () => {
  const width = window.innerWidth;

  if (width < 640) {
    slidesToShow.value = 1; // Mobile screens
  } else if (width >= 640 && width < 768) {
    slidesToShow.value = 2; // Small tablets
  } else if (width >= 768 && width < 1024) {
    slidesToShow.value = 3; // Tablets
  } else {
    slidesToShow.value = 4; // Desktops
  }

  updateSlide(); // Ensure carousel position is updated when screen size changes
};

const totalSlides = ref(6);

const maxIndex = () => totalSlides.value - slidesToShow.value;

const nextSlide = () => {
  if (currentIndex.value < maxIndex()) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Loop back to the start
  }
  updateSlide();
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = maxIndex(); // Loop to the end
  }
  updateSlide();
};

const updateSlide = () => {
  const slideWidth = carousel.value.children[0].clientWidth;
  const offset = -(currentIndex.value * slideWidth);
  carousel.value.style.transform = `translateX(${offset}px)`;
};

const startAutoSlide = () => {
  autoSlideInterval.value = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval.value);
};

onMounted(() => {
  updateSlideToShow();
  window.addEventListener('resize', updateSlideToShow);
  startAutoSlide();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlideToShow);
  stopAutoSlide();
});
</script>

<style scoped>
/* Style for CardPortofolio */
.card {
  background: linear-gradient(to bottom, rgba(128, 0, 128, 0.7), rgba(128, 0, 128, 0.5));
  border-radius: 8px;
  overflow: hidden;
}
</style>
