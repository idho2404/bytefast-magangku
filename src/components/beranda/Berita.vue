<template>
  <!-- Section Berita -->
  <div class="bg-white py-16">
    <div class="container mx-auto">
      <!-- Judul Utama -->
      <h2 class="text-center text-3xl font-bold text-purple-600 mb-8">BERITA TERBARU</h2>

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

      <!-- Carousel Berita -->
      <div class="relative">
        <div class="overflow-hidden">
          <div ref="carousel" class="flex transition-transform duration-300">
            <div
              v-for="i in 7"
              :key="i"
              class="flex-shrink-0 px-2"
              :class="carouselItemClass"
            >
              <CardBeritaLandscape
                :title="'Judul Berita ' + i"
                :description="truncateDescription('Sedikit agak panjang lebar kali tinggi dan dibantu dengan ini itu dan anu sehingga lebih iya ini itu dan anu ya gais ya ' + i, 10)"
                imageSrc="/src/assets/image/news.jpg"
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import CardBeritaLandscape from '../general/CardBeritaLandscape.vue';

const currentIndex = ref(0);
const slidesToShow = ref(3); // Default for larger screens (3 slides)

const carousel = ref(null);

// Dynamically compute the class for each carousel item based on screen size
const carouselItemClass = computed(() => {
  if (slidesToShow.value === 1) {
    return 'w-full'; // 1 slide per view for mobile
  } else if (slidesToShow.value === 2) {
    return 'w-1/2'; // 2 slides per view for tablets
  } else {
    return 'w-1/3'; // 3 slides per view for desktops
  }
});

// Function to truncate the description text to a certain number of words
const truncateDescription = (description, wordLimit) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};

const updateSlideToShow = () => {
  const width = window.innerWidth;

  if (width < 640) {
    slidesToShow.value = 1; // Mobile screens, show 1 slide
  } else if (width >= 640 && width < 1024) {
    slidesToShow.value = 2; // Tablets, show 2 slides
  } else {
    slidesToShow.value = 3; // Desktops, show 3 slides
  }

  updateSlide(); // Ensure carousel position is updated when screen size changes
};

const totalSlides = ref(7);

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
