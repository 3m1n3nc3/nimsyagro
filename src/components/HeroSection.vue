<template>
  <Splide :has-track="false" :options="options">
    <SplideTrack>
      <SplideSlide :key="slide.id" v-for="slide in slides">
        <div class="gap-12 md:flex md:items-center">
          <div class="mx-6 text-center md:mx-0 sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
            <h1
              class="text-5xl font-black md:text-6xl xl:text-7xl wow fadeInDown"
              data-wow-duration=".8s"
              data-wow-delay=".5s"
            >
              {{ slide.title }}
            </h1>
            <div class="">
              <p
                class="mt-8 text-xl text-gray-700 wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
              >
                {{ slide.info }}
              </p>
              <div class="flex justify-center gap-4 mt-12 sm:gap-6 md:justify-start">
                <a
                  class="relative flex items-center justify-center px-5 h-11 w-max before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 wow fadeInLeft"
                  data-wow-duration=".8s"
                  data-wow-delay=".5s"
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
                  class="relative flex items-center justify-center px-5 h-11 w-max before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 wow fadeInRight"
                  data-wow-duration=".8s"
                  data-wow-delay=".5s"
                  type="{type}"
                >
                  <span class="relative w-max text-primary"> Learn more </span>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="relative px-5 py-5 mt-10 md:mt-0 md:w-2/5 lg:w-3/5">
            <div
              class="flex justify-center shadow-2xl md:-ml-6 rounded-3xl bg-gray-50 md:-mr-72 lg:mr-8"
            >
              <img
                class="object-contain object-left p-10 h-96"
                :src="slide.image_o"
                width="auto"
                height="400"
              />
            </div>
          </div>
        </div>
      </SplideSlide>
    </SplideTrack>
  </Splide>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Pagination, Autoplay } from 'swiper/modules'
import '@splidejs/vue-splide/css/sea-green'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import { slides } from '@/utils/content'

defineOptions({
  name: 'HeroSection'
})

// const modules = [Pagination, Autoplay]
const options = {
  rewind: true,
  autoplay: true,
  arrows: false,
  type: 'loop'
}
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
