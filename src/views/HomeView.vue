<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import { impactPotential } from '@/utils/content'
</script>

<template>
  <main class="mb-40">
    <div class="border-b dark:bg-darker lg:overflow-auto border-black/20" id="home">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="relative pt-24 ml-auto xl:pt-36">
          <HeroSection />
        </div>
      </div>
    </div>

    <div class="relative pt-12 md:pt-20" id="features">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="mx-auto md:w-3/5 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
          <h2
            class="text-3xl font-bold text-center text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
            The Problem we solve
          </h2>
          <p class="mt-4 text-center text-gray-600 dark:text-gray-300">
            We are making mechanization accessible to everyone.
          </p>
        </div>

        <div class="mt-16 md:mt-20 wow slideInUp" data-wow-duration=".6s" data-wow-delay=".2s">
          <div
            class="relative grid p-1 border border-gray-200 rounded-3xl dark:border-gray-800 lg:grid-cols-2"
          >
            <div class="absolute inset-0 hidden h-max dark:block lg:my-auto">
              <div
                aria-hidden="true"
                class="grid grid-cols-2 opacity-50 -space-x-52 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl"
              >
                <div
                  class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"
                ></div>
                <div
                  class="rounded-full h-72 bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"
                ></div>
              </div>
            </div>
            <div>
              <div
                class="relative flex flex-col items-center justify-center h-full gap-6 p-8 py-16 lg:py-8"
              >
                <img
                  class="w-32"
                  src="@/assets/images/business_chat.svg"
                  alt="field icon illustration"
                  width="512"
                  height="512"
                  loading="lazy"
                />
                <div class="mx-auto text-center sm:w-4/5">
                  <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Providing Access
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Low access to mechanized agro equipment for irrigation and processing by farmers
                    in rural communities is a big problem that leads poor productivity, poverty,
                    hunger and post-harvest losses in Nigeria. Available mechanized options are
                    powered by fossil fuel and they are very expensive to operate because of the
                    need to constantly buy petrol/diesel/gas to operate them and they emit tons of
                    carbon contributing to global climate change.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2"
            >
              <div
                class="flex flex-col gap-6 p-8 transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div class="flex w-10 h-10 border border-gray-200 rounded dark:border-gray-700">
                  <i class="m-auto text-gray-700 fa-solid fa-solar-panel dark:text-white"></i>
                </div>
                <div>
                  <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Solar-Powered Irrigation
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Reliable, cost-effective solar irrigation systems to boost your crop yields
                    sustainably.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 p-8 transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div class="flex w-10 h-10 border border-gray-200 rounded dark:border-gray-700">
                  <i class="m-auto text-gray-700 fa-brands fa-pagelines dark:text-white"></i>
                </div>
                <div>
                  <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Green Processing Units
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Renewable energy-powered processing units that cut costs and reduce your carbon
                    footprint.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 p-8 transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div class="flex w-10 h-10 border border-gray-200 rounded dark:border-gray-700">
                  <i class="m-auto text-gray-700 fa-solid fa-truck-ramp-box dark:text-white"></i>
                </div>
                <div>
                  <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Equipment Leasing
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Lease advanced agro equipment at low costs to enhance your farm’s productivity.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 p-8 transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div class="flex w-10 h-10 border border-gray-200 rounded dark:border-gray-700">
                  <i class="m-auto text-gray-700 fa-brands fa-leanpub dark:text-white"></i>
                </div>
                <div>
                  <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Farmer Training
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Training programs to empower farmers with knowledge on sustainable farming and
                    tech use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pt-12 md:pt-20 wow slideInLeft"
      data-wow-duration=".6s"
      data-wow-delay=".3s"
      id="solution"
    >
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div
          class="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0"
        >
          <div class="relative flex items-center justify-center h-full ml-auto md:w-1/2">
            <img
              class="overflow-hidden rounded-3xl"
              src="@/assets/images/farmers-using-smart-device-for-crop-monitoring.svg"
              alt="app milestone"
              width="1174"
              height="1134"
            />
          </div>

          <div class="md:w-1/2 lg:w-[47%]">
            <h2
              class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay=".3s"
            >
              Our Solution
            </h2>
            <p
              class="my-12 text-gray-600 dark:text-gray-300 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay=".3s"
            >
              We build solar powered agro equipment and provide farmers with affordable solar
              irrigation, grain threshing, milling and drying services on a pay-per-use model that
              can be easily accessible to them through our rural solar hubs.
            </p>
            <div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
              <div
                class="flex gap-4 mt-8 md:items-center wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".3s"
              >
                <div
                  class="flex w-12 h-12 gap-4 border border-gray-200 rounded dark:border-gray-900"
                >
                  <i class="m-auto text-gray-700 fa-solid fa-water dark:text-gray-300"></i>
                </div>
                <div class="w-5/6">
                  <h3 class="text-lg font-semibold text-gray-700 dark:text-white">
                    Efficient, Affordable Watering
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Precision irrigation on a pay-per-use model, making sustainable farming
                    cost-effective.
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 pt-4 md:items-center wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".4s"
              >
                <div
                  class="flex w-12 h-12 gap-4 border border-gray-200 rounded dark:border-gray-900"
                >
                  <i
                    class="m-auto text-gray-700 fa-solid fa-money-bill-wheat dark:text-gray-300"
                  ></i>
                </div>
                <div class="w-5/6">
                  <h3 class="text-lg font-semibold text-gray-700 dark:text-white">
                    Transform Your Harvest
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Quick and efficient crop processing, accessible and affordable through our solar
                    hubs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-20 md:my-32">
          <h3
            class="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl lg:text-4xl wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            Our Impact Potential
          </h3>
          <div
            class="inline-flex items-center justify-center mt-5 max-w-prose wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay=".6s"
          >
            <img src="@/assets/images/sdg.png" alt="SDG Banner" class="h-8 max-w-sm" />
          </div>
          <div class="relative grid justify-center grid-cols-1 gap-6 mt-12 md:grid-cols-4">
            <div
              class="col-span-2 px-1 m-auto text-gray-600 xl:container wow"
              data-wow-duration="1s"
              :class="{ fadeInRight: !(i % 2), fadeInLeft: !!(i % 2) }"
              :data-wow-delay="`.${1 + i}s`"
              :key="potential.title"
              v-for="(potential, i) in impactPotential"
            >
              <div
                class="lg:bg-gray-50 dark:lg:bg-darker relative overflow-hidden lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center"
              >
                <img
                  class="m max-w-[80%] absolute top-0 left-0 opacity-20"
                  alt="image"
                  loading="lazy"
                  :src="potential.image"
                />
                <div class="flex justify-center md:5/12 lg:w-2/5" v-if="i % 2">
                  <img class="max-w-[80%]" alt="image" loading="lazy" :src="potential.image2" />
                </div>
                <div class="md:7/12 lg:w-3/5">
                  <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                    {{ potential.title }}
                  </h2>
                  <p class="my-8 text-gray-600 dark:text-gray-300">
                    {{ potential.info }}
                  </p>
                </div>
                <div class="flex justify-center md:5/12 lg:w-2/5" v-if="!(i % 2)">
                  <img class="max-w-[80%]" alt="image" loading="lazy" :src="potential.image2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
