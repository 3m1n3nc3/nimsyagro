<script setup lang="ts">
import { ref } from 'vue'
import TDialog from 'components/TDialog.vue'
import { register } from 'swiper/element/bundle'
register()

const loadImg = (index: number) => {
  return `/gallery/gallery_${index}.jpg`
}
const viewing = ref('')
const dialog = ref(false)
const groups = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
]
</script>

<template>
  <main class="mb-40">
    <div id="home">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="relative pt-40 ml-auto xl:pt-36">
          <h1 class="text-5xl font-black md:text-6xl xl:text-7xl">Gallery</h1>
        </div>
      </div>
    </div>

    <div class="pt-5 text-gray-600 md:pt-5" id="reviews">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="grid grid-cols-2 gap-2 mt-12 md:mt-20 lg:grid-cols-3">
          <div class="hidden col-span-3 md:block">
            <swiper-container
              style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
              class="w-full sm:w-2/3 mySwiper"
              thumbs-swiper=".mySwiper2"
              space-between="10"
              navigation="true"
            >
              <swiper-slide lazy="true" :key="index" v-for="index in 34">
                <div class="overflow-hidden rounded-lg bg-primary">
                  <img
                    class="object-contain object-center w-full h-96"
                    :src="loadImg(index)"
                    alt=""
                  />
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
          <div class="justify-center hidden col-span-3 md:flex">
            <swiper-container
              class="w-full h-[5em] sm:w-2/3 mySwiper2 sm:h-[9em]"
              space-between="10"
              slides-per-view="6"
              free-mode="true"
              watch-slides-progress="true"
            >
              <swiper-slide lazy="true" :key="index" v-for="index in 214">
                <img
                  class="object-cover object-center w-full h-full"
                  :src="loadImg(index)"
                  alt=""
                />
              </swiper-slide>
            </swiper-container>
          </div>
          <div
            class="grid grid-cols-2 col-span-3 gap-2 md:hidden"
            :key="i"
            v-for="(grp, i) in groups"
          >
            <div
              class="relative p-px mb-6 overflow-hidden rounded-2xl wow-"
              :class="`fadeIn${['Left', 'Up', 'Right'][i]}`"
              data-wow-duration="1s"
              data-wow-delay=".5s"
              :key="index"
              v-for="index in grp"
            >
              <div
                class="relative flex flex-col h-full gap-2 p-2 space-y-6 bg-gray-100 rounded-2xl"
              >
                <img
                  class="object-cover w-full min-h-[10rem] h-full rounded-2xl max-h-44"
                  alt="user avatar"
                  width="400"
                  height="600"
                  loading="lazy"
                  :src="loadImg(index)"
                  @click="(viewing = loadImg(index)), (dialog = !dialog)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <TDialog v-model="dialog">
    <div
      class="relative inline-block w-full p-2 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl opacity-100 rtl:text-right sm:my-8 sm:align-middle"
    >
      <button
        class="absolute top-0 right-0 justify-center w-6 h-6 m-2 text-center text-white bg-red-500 rounded-full hover:opacity-80"
        @click="dialog = !dialog"
      >
        <i class="fas fa-times"></i>
      </button>
      <div>
        <img
          class="object-cover w-full min-h-[24rem] h-full rounded-2xl max-h-64"
          width="400"
          height="600"
          loading="lazy"
          :src="viewing"
        />
      </div>
    </div>
  </TDialog>
</template>

<style>
.mySwiper2 {
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper2 swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
