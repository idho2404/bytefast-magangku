<template>
  <div class="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4">
    <div class="flex-shrink-0">
      <slot name="icon"></slot>
    </div>
    <div>
      <h3 class="text-lg font-semibold text-black">{{ title }}</h3>
      <p class="mt-2 text-gray-500">{{ description }}</p>
      <a href="#" class="mt-4 text-blue-500 hover:underline">Visit</a>
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
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Add any additional custom styling here */
</style>
