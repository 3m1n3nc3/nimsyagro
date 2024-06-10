<template>
  <footer
    class="py-12 bg-gradient-to-tl from-gray-700 to-black wow fadeInUp"
    data-wow-duration="1s"
    data-wow-delay=".6s"
  >
    <div class="flex flex-col items-center max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
      <a href="#home" aria-label="logo" class="flex items-center justify-center space-x-2">
        <div aria-hidden="true" class="flex flex-col space-y-0.5">
          <img src="@/assets/logo.png" class="w-12 overflow-hidden bg-gray-900 rounded-lg" />
        </div>
        <span class="text-2xl font-bold text-white">NimsyAgro</span>
      </a>

      <ul
        role="list"
        class="flex flex-wrap items-center justify-center gap-4 py-4 mt-8 text-white sm:gap-8"
      >
        <li role="listitem">
          <RouterLink :to="{ name: 'home' }" class="px-0 text-lg duration-300 hover:text-primary"
            >Home</RouterLink
          >
        </li>
        <li role="listitem">
          <RouterLink
            :to="{ name: 'products' }"
            class="px-0 text-lg duration-300 hover:text-primary"
            >Products</RouterLink
          >
        </li>
        <li role="listitem">
          <RouterLink :to="{ name: 'gallery' }" class="px-0 text-lg duration-300 hover:text-primary"
            >Gallery</RouterLink
          >
        </li>
        <li role="listitem">
          <RouterLink :to="{ name: 'contact' }" class="px-0 text-lg duration-300 hover:text-primary"
            >Contact Us</RouterLink
          >
        </li>
        <!-- <li role="listitem">
          <RouterLink
            :to="{ name: 'request' }"
            class="px-0 duration-300 hover:text-primary "
            >Request Service</RouterLink
          >
        </li> -->
      </ul>

      <div class="flex items-center justify-between gap-0 m-auto space-x-4 text-white w-max">
        <a
          class="px-0 duration-300 hover:text-gray-200"
          target="blank"
          :href="social.link"
          :title="social.name"
          :aria-label="social.name"
          :key="social.name"
          v-for="social in socials"
        >
          <i class="w-8 h-8 m-auto" :class="social.icon"> </i>
        </a>
      </div>

      <div class="mt-8 text-center">
        <span class="tracking-wide text-white text-md"
          >Copyright © NimsyAgro {{ new Date().getFullYear() }} - Present | All rights
          reserved</span
        >
      </div>
      <div class="mt-2 text-center text-gray-200">
        Developed and maintained by <a href="https://hoolicontech.com/">Hoolicontech</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { socials } from '@/utils/content'
</script>
