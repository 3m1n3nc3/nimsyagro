<template>
  <Splide :has-track="false" :options="options">
    <SplideTrack>
      <SplideSlide :key="slide.id" v-for="slide in slides">
        <div class="gap-12 lg:flex lg:items-center">
          <div class="mx-6 text-center md:mx-0 sm:px-12 md:w-full lg:px-0 md:text-left lg:w-1/2">
            <h1
              class="text-5xl font-black md:text-6xl xl:text-7xl wow fadeInDown"
              data-wow-duration=".8s"
              data-wow-delay=".5s"
            >
              {{ slide.title }}
            </h1>
            <div class="">
              <p
                class="mt-5 text-xl text-gray-700 md:mt-8 wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
              >
                <span class="hidden md:inline-block">{{ limitWords(slide.info, 200) }}</span>
                <span class="inline-block md:hidden">{{ limitWords(slide.info, 100) }}</span>
              </p>
              <div class="flex justify-center gap-4 mt-5 md:mt-12 sm:gap-6 lg:justify-start">
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
                >
                  <span class="relative w-max text-primary"> Learn more </span>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="relative px-5 py-2 mt-3 mb-14 lg:mb-24 lg:mt-0 lg:w-2/5 xl:w-3/5">
            <div class="flex justify-center shadow-2xl rounded-3xl bg-gray-50 lg:mr-8">
              <img
                class="object-contain object-left h-64 p-5 md:p-10 lg:h-96"
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
  autoplay: false,
  arrows: false,
  type: 'loop'
}

const limitWords = (text: string, numWords: number): string => {
  if (numWords >= text.length) {
    return text
  }
  const words = text.substring(0, numWords)

  let o = words.substring(0, Math.min(words.length, words.lastIndexOf(' ')))

  if (text.length > o.length) {
    o += '...'
  }
  return o
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
