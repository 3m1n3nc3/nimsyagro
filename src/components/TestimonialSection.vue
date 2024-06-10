<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Pagination, Autoplay } from 'swiper/modules'
import '@splidejs/vue-splide/css/sea-green'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import { ref, watch } from 'vue'

const video = ref(null)
// const paused = ref(true)
// const play = () => {
// paused.value ? video.value.play() : video.value.pause()
// }

watch(video, (val) => {
  if (val) {
    // val.addEventListener('play', () => {
    //   paused.value = false
    // })
    // val.addEventListener('pause', () => {
    //   paused.value = true
    // })
  }
})

const slides = [
  'https://www.youtube.com/embed/vgC2rHEKXzw?si=61xsOz1fGANAHxdC',
  'https://www.youtube.com/embed/SVVETPZj1lE?si=ZE0IuTaFlWxXJB9M',
  'https://www.youtube.com/embed/jdXnEal7udU?si=THqQF2MhpQbwDOcB'
]
const options = {
  rewind: true,
  autoplay: false,
  arrows: true,
  type: 'loop',
  gap: 10
}
</script>

<template>
  <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
    <div class="row">
      <div class="w-full lg:w-1/2">
        <div
          class="relative flex justify-center pb-8 mt-12 video-content wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <img
            class="absolute bottom-0 left-0 -ml-8 dots"
            src="/src/assets/images/dots.svg"
            alt="dots"
          />
          <Splide :has-track="false" :options="options" class="sm:mr-6">
            <SplideTrack>
              <SplideSlide :key="slide" v-for="slide in slides">
                <div class="relative mr-0 rounded-lg shadow-md video-wrapper">
                  <div class="video-image">
                    <!-- <video
                      ref="video"
                      class="min-h-[25em] object-cover object-center bg-theme-color-2"
                    >
                      <source :src="slide" type="video/mp4" />
                    </video> -->
                    <iframe
                      ref="video"
                      width="100%"
                      height="315"
                      class="min-h-[25em] object-cover object-center bg-theme-color-2"
                      :src="slide"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    <!-- <img src="/src/assets/images/video.png" alt="video" /> -->
                  </div>
                  <!-- <div
                    class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-900 bg-opacity-25 rounded-lg video-icon"
                  >
                    <button class="video-popup" @click="play">
                      <i :class="`fa fas-${paused ? 'play' : 'pause'}`"></i>
                    </button>
                  </div> -->
                </div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
          <!-- video wrapper -->
        </div>
        <!-- video content -->
      </div>
      <div class="flex items-center w-full lg:w-1/2">
        <div
          class="pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.8s"
        >
          <div class="counter-content">
            <div class="mb-8 section-title">
              <div class="line"></div>
              <h3 class="title">Meet our <span> happy partners</span></h3>
            </div>
            <!-- section title -->
            <p class="text-xl">
              Hear what recent beneficiaries of our services have to say about us, maybe you can be
              the next.
            </p>
          </div>
        </div>
        <!-- counter wrapper -->
      </div>
    </div>
    <!-- row -->
  </div>
</template>

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
