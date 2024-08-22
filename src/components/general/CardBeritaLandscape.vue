<template>
  <div class="rounded-lg shadow-md mb-2">
    <img :src="imageSrc" alt="News Image" class="w-full h-48 object-cover">
    <div class="p-4 relative z-10">
      <h3 class="text-lg text-black font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
    <div class="shadow-bottom"></div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.shadow-bottom {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  z-index: 0;
}
</style>
