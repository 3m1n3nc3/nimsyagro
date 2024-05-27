<template>
  <header>
    <nav
      class="fixed top-0 z-10 w-full bg-white border-b border-black/5 dark:border-white/5 lg:border-transparent"
    >
      <div class="px-6 mx-auto shadow-md md:px-12 lg:px-6 xl:px-0">
        <div
          class="relative flex flex-wrap items-center justify-between gap-6 py-2 mx-6 md:gap-0 md:py-4"
        >
          <div class="relative z-20 flex justify-between w-full md:px-0 lg:w-max">
            <RouterLink
              :to="{ name: 'home' }"
              aria-label="logo"
              class="flex items-center px-0 space-x-2"
            >
              <div aria-hidden="true" class="flex space-x-1">
                <img
                  src="@/assets/logo.png"
                  class="w-12 h-12 overflow-hidden bg-gray-900 rounded-lg dark:bg-white"
                />
              </div>
              <span class="text-2xl font-bold text-primary dark:text-white">NimsyAgro</span>
            </RouterLink>

            <div class="relative flex items-center max-h-10 lg:hidden">
              <button
                type="button"
                aria-label="humburger"
                id="hamburger"
                class="relative p-6 -mr-6"
                :class="{ toggled: toggleMobileMenu }"
                @click="toggleMobileMenu = !toggleMobileMenu"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  :class="{ '-rotate-45 translate-y-2': toggleMobileMenu }"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  :class="{ 'rotate-45 -translate-y-1': toggleMobileMenu }"
                ></div>
              </button>
            </div>
          </div>
          <div
            id="navLayer"
            aria-hidden="true"
            :class="{
              'origin-bottom scale-y-0': !toggleMobileMenu,
              'origin-top scale-y-100': toggleMobileMenu
            }"
            class="fixed inset-0 z-10 w-screen h-screen transition duration-500 bg-white/70 backdrop-blur-2xl dark:bg-gray-900/70 lg:hidden"
          ></div>
          <div
            id="navlinks"
            class="absolute left-0 z-20 flex-col flex-wrap justify-end w-full gap-6 p-8 transition-all duration-300 origin-top-right translate-y-1 bg-white border border-gray-100 shadow-2xl top-full rounded-3xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
            :class="{ 'opacity-0 invisible': !toggleMobileMenu }"
          >
            <div class="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
              <ul
                class="flex flex-col gap-6 tracking-wide lg:flex-row lg:justify-center lg:gap-0 lg:text-sm"
              >
                <li>
                  <RouterLink
                    class="flex items-center transition hover:text-primary dark:hover:text-white md:px-4"
                    exact-active-class="font-bold text-primary"
                    :to="{ name: 'home' }"
                  >
                    <span class="text-base lg:text-sm lg:font-thin">Home</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    exact-active-class="font-bold text-primary"
                    class="flex items-center transition hover:text-primary dark:hover:text-white md:px-4"
                    :to="{ name: 'products' }"
                  >
                    <span class="text-base lg:text-sm lg:font-thin">Products</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    exact-active-class="font-bold text-primary"
                    class="flex items-center transition hover:text-primary dark:hover:text-white md:px-4"
                    :to="{ name: 'gallery' }"
                  >
                    <span class="text-base lg:text-sm lg:font-thin">Gallery</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    exact-active-class="font-bold text-primary"
                    class="flex items-center transition hover:text-primary dark:hover:text-white md:px-4"
                    :to="{ name: 'contact' }"
                  >
                    <span class="text-base lg:text-sm lg:font-thin">Contact Us</span>
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div class="mt-12 lg:mt-0">
              <RouterLink
                :to="{ name: 'request' }"
                class="relative flex items-center justify-center w-full px-4 h-9 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-sm font-semibold text-white"> Request Service</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import WOW from 'wow.js'

const route = useRoute()
const toggleMobileMenu = ref(false)

watch(
  () => route.name,
  () => {
    toggleMobileMenu.value = false
  }
)

onMounted(() => {
  nextTick(() => {
    new WOW().init()
  })
})
</script>
