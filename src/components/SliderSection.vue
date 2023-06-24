<template>
  <div class="pb-8 bg-primary-3 lg:pb-14 lg:overflow-hidden">
    <Splide :has-track="false" :options="options">
      <SplideTrack>
        <SplideSlide :key="slide.id" v-for="slide in slides">
          <div class="lg:flex" v-if="slide.style == 2">
            <div
              class="w-full h-64 overflow-hidden lg:w-1/2 lg:h-auto rounded-tl-3xl rounded-br-3xl"
            >
              <div
                class="w-full h-full bg-white bg-center bg-no-repeat bg-contain"
                :style="{ backgroundImage: `url(${slide.image})` }"
              >
                <!-- <div class="w-full h-full bg-black opacity-25"></div> -->
              </div>
            </div>
            <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
              <main class="max-w-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="sm:text-center lg:text-left">
                  <h1
                    class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
                  >
                    <span
                      :class="{
                        'block xl:inline': i == 0,
                        'block text-sky-200 xl:inline': i == 1
                      }"
                      :key="title"
                      v-for="(title, i) in titler(slide.title)"
                    >
                      {{ title }}&nbsp;
                    </span>
                  </h1>
                  <p
                    class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  >
                    {{ slide.info }}
                  </p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                      <a
                        :href="$router.resolve({ name: 'services' }).href + '#' + slide.id"
                        class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                      >
                        Read More
                      </a>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        class="flex items-center justify-center object-cover w-full px-8 py-3 text-base font-medium text-green-700 bg-green-100 border border-transparent rounded-md hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>

          <div class="mx-auto max-w-7xl lg:px-8" v-else-if="slide.style == 1">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div
                class="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
              >
                <div class="lg:py-24">
                  <a
                    href="#"
                    class="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span
                      class="px-3 py-0.5 text-lime-800 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-primary to-secondary rounded-full"
                      >Now Available</span
                    >
                    <span class="ml-4 text-sm">Find out more</span>
                    <ChevronRightIcon class="w-5 h-5 ml-2 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1
                    class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                  >
                    <span
                      :class="{
                        block: i == 0,
                        'block pb-3 text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400 sm:pb-5':
                          i == 1
                      }"
                      :key="title"
                      v-for="(title, i) in titler(slide.title)"
                    >
                      {{ title }}&nbsp;
                    </span>
                  </h1>
                  <p class="text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                    {{ slide.info }}
                  </p>
                </div>
              </div>
              <div class="mt-12 -mb-16 overflow-hidden sm:-mb-48 lg:m-0 lg:relative rounded-3xl">
                <div
                  class="w-full max-w-md px-4 mx-auto bg-white bg-center bg-no-repeat bg-contain h-80 sm:h-full sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
                  :style="{ backgroundImage: `url(${slide.image})` }"
                >
                  <!-- <img
                    class="object-cover w-full sm:object-fill lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-full"
                    :src="slide.image"
                    alt=""
                  /> -->
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </SplideTrack>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">Prev</button>
        <button class="splide__arrow splide__arrow--next">Next</button>
      </div>
    </Splide>
  </div>
</template>

<script setup>
import '@splidejs/vue-splide/css/sea-green'
import { ChevronRightIcon } from '@heroicons/vue/solid'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import { ref } from 'vue'

const slides = ref([
  {
    id: 'np1-solar-irrigation-pump',
    image: '/assets/img/slide-1.jpg',
    style: 1,
    title: 'Nimsy Solar Pump (NP1)',
    info: 'Optimized for 1-2 acres of farm land, pumps up to 10,000 liters per hour, comes with a 300 watts foldable solar panel, battery back up and can be used to charge phones and lighten homes with led bulbs. '
  },
  {
    id: 'np2-solar-irrigation-pump',
    image: '/assets/img/slide-3.jpg',
    style: 2,
    title: 'Nimsy Solar Pump (NP 2)',
    info: 'Optimized for over 10 acres of farm land, pump up to 30,000 liters of water per hour, 900 watts retractable solar panel mounted on two-wheeled cart for easy mobility.'
  },
  {
    id: 'solar-thresher',
    image: '/assets/img/slide-4.jpg',
    style: 1,
    title: 'Nimsy Solar Thresher',
    info: 'Threshes 300kg of grains per hour particularly maize and rice, 1,200 watts retractable solar panel mounted on a four-wheeled cart for mobility, produces 2.5KVA of power and the excess are stored in batteries that can lighten 7 homes in off-grid rural communities. Waste products of maize cob and rice stalk are recycled into clean charcoal briquettes for cooking.'
  },
  {
    id: 'solar-dryer',
    image: '/assets/img/slide-2.jpg',
    style: 2,
    title: 'Nimsy Solar Dryer',
    info: 'Dries grains and vegetables faster and hygienically, equipped with 300 watts solar panel, air blower and drying compartment mounted on a four-wheeled cart for easy mobility.'
  }
])

const titler = (title) => {
  // Split the title into after the first two words
  const words = title.split(' ')
  const first = words.slice(0, 2).join(' ')
  const second = words.slice(2).join(' ')

  return [first, second]
}

const options = {
  rewind: true,
  autoplay: false,
  arrows: false,
  type: 'loop'
}
</script>

<style>
.splide__pagination__page:hover {
  background: #ffe3ab;
}
.splide__pagination__page.is-active {
  background: #f0af2c;
}
.splide__pagination__page {
  background: #ffffff;
}
.splide {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
