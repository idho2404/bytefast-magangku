<template>
  <div class="w-[298px] h-[450px] rounded-lg overflow-hidden relative">
    <img class="w-full h-full object-cover" :src="imageSrc" alt="Portofolio Image" />
    <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cards to-transparent flex flex-col justify-center items-center">
      <div class="text-center">
        <div class="font-bold text-2xl text-white mt-20">{{ title }}</div>
        <button class="bg-cards w-full text-white border-white mt-1 py-2 px-20 rounded-lg">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Additional styling if necessary */
</style>
