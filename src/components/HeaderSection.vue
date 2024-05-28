<template>
  <header>
    <div
      class="mt-8 shapedividers_com-8788 h-[25.3rem] md:h-[30rem] md:mt-4 z-[-1]"
      v-if="$route.name === 'home'"
    ></div>
    <nav class="fixed top-0 z-10 w-full border-b- bg-deeper border-black/20">
      <div class="px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
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
                  class="w-12 h-12 overflow-hidden bg-gray-900 rounded-lg"
                />
              </div>
              <span class="text-2xl font-bold text-white">NimsyAgro</span>
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
                  class="m-auto h-0.5 w-5 rounded bg-white transition duration-300"
                  :class="{ '-rotate-45 translate-y-2': toggleMobileMenu }"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="m-auto mt-2 h-0.5 w-5 rounded bg-white transition duration-300"
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
            class="fixed inset-0 z-10 w-screen h-screen transition duration-500 bg-white/70 backdrop-blur-2xl lg:hidden"
          ></div>
          <div
            id="navlinks"
            class="absolute left-0 z-20 flex-col flex-wrap justify-end w-full gap-6 p-8 transition-all duration-300 origin-top-right translate-y-1 bg-white border border-gray-100 shadow-2xl top-full rounded-3xl shadow-gray-600/10 lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
            :class="{ 'opacity-0 invisible': !toggleMobileMenu }"
          >
            <div class="w-full text-primary md:text-white lg:w-auto lg:pr-4 lg:pt-0">
              <ul
                class="flex flex-col gap-6 tracking-wide lg:flex-row lg:justify-center lg:gap-0 lg:text-sm"
              >
                <li>
                  <RouterLink
                    class="flex items-center transition hover:opacity-80 md:px-4"
                    exact-active-class="font-bold text-green-800 md:text-green-100"
                    :to="{ name: 'home' }"
                  >
                    <span class="text-base lg:font-sm">Home</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    exact-active-class="font-bold text-green-800 md:text-green-100"
                    class="flex items-center transition hover:opacity-80 md:px-4"
                    :to="{ name: 'products' }"
                  >
                    <span class="text-base lg:font-sm">Services</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    exact-active-class="font-bold text-green-800 md:text-green-100"
                    class="flex items-center transition hover:opacity-80 md:px-4"
                    :to="{ name: 'gallery' }"
                  >
                    <span class="text-base lg:font-sm">Gallery</span>
                  </RouterLink>
                </li>
                <!-- <li>
                  <RouterLink
                    exact-active-class="font-bold text-primary"
                    class="flex items-center transition hover:text-primary md:px-4"
                    :to="{ name: 'request' }"
                  >
                    <span class="text-base lg:font-thin">Request Service</span>
                  </RouterLink>
                </li> -->
              </ul>
            </div>

            <div class="mt-12 lg:mt-0">
              <RouterLink
                :to="{ name: 'contact' }"
                class="relative flex items-center justify-center w-full px-4 h-9 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-sm font-semibold text-white"> Contact Us</span>
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
<style>
.shapedividers_com-8788 {
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.shapedividers_com-8788::before {
  content: '';
  font-family: 'shape divider from ShapeDividers.com';
  position: absolute;
  bottom: -1px;
  left: -1px;
  right: -1px;
  top: -1px;
  z-index: 3;
  pointer-events: none;
  background-repeat: no-repeat;
  background-size: 186% 182px;
  background-position: 50% 0%;
  background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%2300521d"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%2300521d"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%2300521d"/></svg>');
}

@media (min-width: 768px) {
  .shapedividers_com-8788::before {
    background-size: 100% 286px;
    background-position: 50% 0%;
  }
}

@media (min-width: 1025px) {
  .shapedividers_com-8788::before {
    bottom: -0.1vw;
    left: -0.1vw;
    right: -0.1vw;
    top: -0.1vw;
    background-size: 134% 400px;
    background-position: 50% 0%;
  }
}
@media (min-width: 2100px) {
  .shapedividers_com-8788::before {
    background-size: 134% calc(2vw + 400px);
  }
}
</style>
