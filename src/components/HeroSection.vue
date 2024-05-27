<template>
  <Swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true
    }"
    class="wow fadeInDown"
    data-wow-duration="1s"
    data-wow-delay=".1s"
  >
    <SwiperSlide class="w-full" :key="slide.id" v-for="slide in slides">
      <div class="gap-12 md:flex md:items-center">
        <div class="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
          <h1 class="text-5xl font-black dark:text-white md:text-6xl xl:text-7xl">
            {{ slide.title }}
          </h1>
          <div class="">
            <p class="mt-8 text-lg text-gray-700 dark:text-gray-100">
              {{ slide.info }}
            </p>
            <div class="flex justify-center gap-4 mt-12 sm:gap-6 md:justify-start">
              <a
                class="relative flex items-center justify-center px-5 h-11 w-max before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                target="_blank"
                :href="slide.demo"
                v-if="slide.demo"
              >
                <span class="relative text-white w-max">
                  <i class="text-white fa-solid fa-circle-play"></i>
                  Live Demo
                </span>
              </a>
              <RouterLink
                :to="{ name: 'products', hash: '#' + slide.id }"
                class="relative flex items-center justify-center px-5 h-11 w-max before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
                type="{type}"
              >
                <span class="relative w-max text-primary dark:text-white"> Learn more </span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="relative py-5 mt-10 bg-gray-50 md:mt-0 md:w-2/5 lg:w-3/5">
          <div class="flex justify-center md:-ml-6 rounded-3xl bg-gray-50 md:-mr-72 lg:mr-0">
            <img
              class="object-contain object-left p-10 h-96"
              :src="slide.image_o"
              width="auto"
              height="400"
            />
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { slides } from '@/utils/content'

defineOptions({
  name: 'HeroSection'
})

const modules = [Pagination, Autoplay]
</script>

<style scoped>
.splide {
  padding: 0em;
}
.swiper {
  padding: 0em;
  width: 100%;
  height: 100%;
}
</style>
