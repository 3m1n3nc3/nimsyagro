<script setup lang="ts">
import { ref } from 'vue'
import TDialog from 'components/TDialog.vue'

const dialog = ref(false)
const viewing = ref('')
const loadImg = (index) => {
  return `/gallery/gallery_${index}.jpg`
}
const groups = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
]
</script>

<template>
  <main class="mb-40">
    <div class="dark:bg-darker" id="home">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="relative pt-40 ml-auto xl:pt-36">
          <h1 class="text-5xl font-black dark:text-white md:text-6xl xl:text-7xl">Gallery</h1>
        </div>
      </div>
    </div>

    <div class="pt-5 text-gray-600 dark:text-gray-300 md:pt-5" id="reviews">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="grid gap-6 mt-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          <div :key="i" v-for="(grp, i) in groups">
            <div
              class="relative p-px mb-6 overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker wow"
              :class="`fadeIn${['Left', 'Up', 'Right'][i]}`"
              data-wow-duration="1s"
              data-wow-delay=".5s"
              :key="index"
              v-for="index in grp"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-2 space-y-6 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <img
                  class="object-cover w-full min-h-[24rem] h-full rounded-2xl max-h-64"
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
      class="relative inline-block p-2 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl opacity-100 rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle"
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
          alt="user avatar"
          width="400"
          height="600"
          loading="lazy"
          :src="viewing"
        />
      </div>
    </div>
  </TDialog>
</template>
