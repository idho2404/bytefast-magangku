<template>
  <!-- Section Portofolio -->
  <div class="bg-gradient-to-b from-white via-white to-purple-200 py-16">
    <div class="container mx-auto">
      <!-- Judul Utama -->
      <h2 class="text-center text-3xl font-bold text-purple-600 mb-8">PORTOFOLIO</h2>

      <!-- Container for navigation buttons -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex space-x-2">
          <button @click="prevSlide" class="bg-white rounded-full shadow p-2 opacity-50 hover:opacity-100 transition-opacity duration-200">
            <svg class="h-4 w-4" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.43741 8.99998L11.0374 15.6L9.15208 17.4866L0.666748 8.99998L9.15208 0.514648L11.0374 2.39998L4.43741 8.99998Z" fill="#000000"/>
            </svg>
          </button>
          <button @click="nextSlide" class="bg-white rounded-full shadow p-2 opacity-50 hover:opacity-100 transition-opacity duration-200">
            <svg class="h-4 w-4" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.56265 9.00011L0.962646 2.40011L2.84798 0.516113L11.3333 9.00011L2.84798 17.4854L0.962646 15.5988L7.56265 9.00011Z" fill="#000000"/>            
            </svg>
          </button>
        </div>
      </div>

      <!-- Carousel Portofolio -->
      <div class="relative">
        <div class="overflow-hidden">
          <div ref="carousel" class="flex transition-transform duration-300">
            <div
              v-for="i in 6"
              :key="i"
              class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2"
            >
              <CardPortofolio
                :title="'Portofolio ' + i"
                imageSrc="/src/assets/image/portofolio.png"
                class="w-full"
              />
            </div>
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

// Reference to the carousel element
const carousel = ref(null);

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

onMounted(() => {
  updateSlideToShow();
  window.addEventListener('resize', updateSlideToShow);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlideToShow);
});
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
