<template>
  <div class="flex flex-col min-h-full pt-16 pb-12 bg-white">
    <main
      class="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <div class="flex justify-center flex-shrink-0">
        <a href="/" class="inline-flex">
          <span class="sr-only">Workflow</span>
          <TLogo class="h-12" />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold tracking-wide uppercase text-primary">404 error</p>
          <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Page not found.
          </h1>
          <p class="mt-2 text-base text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-6">
            <RouterLink
              :to="{ name: 'home' }"
              class="text-base font-medium text-primary hover:text-green-500"
              >Go back home<span aria-hidden="true"> &rarr;</span></RouterLink
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import TLogo from '../components/TLogo.vue'

onMounted(() => {
  document.title = '404 | Nimsy Agro Solar Concept'
  const app = document.querySelector('#app')
  app.style.height = '100vh'
})

onUnmounted(() => {
  const app = document.querySelector('#app')
  app.style.height = 'auto'
  document.title = 'NimsyAgro'
})
</script>
