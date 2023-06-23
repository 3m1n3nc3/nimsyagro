<template>
  <a class="block" href="#">
    <span class="sr-only">{{ text }}</span>
    <div class="w-full h-full font-extrabold" v-if="type === 'text'">{{ text }}</div>
    <img class="w-full h-full" :src="`/assets/img/${type}.png`" alt="Logo" v-else />
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'logo',
    validator: (value) => ['logo', 'icon', 'text'].includes(value)
  },
  text: {
    type: String,
    default: 'Nimsy Agro Solar Concept'
  }
})
</script>
