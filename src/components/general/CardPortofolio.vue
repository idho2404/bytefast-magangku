<template>
  <div class="w-[298px] h-[300px] rounded-lg overflow-hidden relative">
    <img class="w-full h-full object-cover" :src="imageSrc" alt="Portofolio Image" />
    <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-500 to-transparent dark:bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-center items-center">
      <div class="text-center">
        <div class="font-bold text-xl text-white mt-10">{{ title }}</div>
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
