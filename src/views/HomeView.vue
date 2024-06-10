<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import { impactPotential } from '@/utils/content'
import { slides } from '@/utils/content'
</script>

<template>
  <main class="mb-40">
    <div class="pb-8 border-b lg:overflow-auto border-black/20" id="home">
      <div class="max-w-6xl px-0 mx-auto lg:px-6 xl:px-0">
        <div class="relative pt-24 ml-auto xl:pt-36">
          <HeroSection />
        </div>
      </div>
    </div>

    <div
      class="border-b bg-slate-50 border-black/20 lg:relative wow fadeInUp"
      data-wow-duration="2s"
      data-wow-delay=".2s"
    >
      <div class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1
            class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl wow slideInLeft"
            data-wow-duration="2s"
            data-wow-delay=".1s"
          >
            <span class="block xl:inline">POWERING AGRICULTURE</span>&nbsp;
            <span class="block text-primary xl:inline">WITH RENEWABLE ENERGY</span>
          </h1>
          <p
            class="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl wow slideInRight"
            data-wow-duration="2s"
            data-wow-delay=".1s"
          >
            At Nimsy Agro, we are powering the agricultural industry with renewable energy
            infrastructure to bring about environmental sustainability, curtail carbon emissions,
            improve farmers productivity, and promote long-term prosperity.
          </p>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
      >
        <img
          class="absolute inset-0 object-cover w-full h-full wow zoomIn"
          src="/src/assets/images/solar.jpg"
          data-wow-duration="2s"
          data-wow-delay=".2s"
          alt="Solar Panel"
        />
      </div>
    </div>

    <div class="relative pt-12 md:pt-20" id="features">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="mx-auto md:w-3/5 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
          <h2 class="text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
            The Problem we solve
          </h2>
          <p class="mt-4 text-center text-gray-600">
            We are making mechanization accessible to everyone.
          </p>
        </div>

        <div class="mt-16 md:mt-20 wow slideInUp" data-wow-duration=".6s" data-wow-delay=".2s">
          <div
            class="relative grid p-1 overflow-hidden border border-gray-200 rounded-3xl lg:grid-cols-2"
          >
            <div class="absolute inset-0 h-max lg:my-auto">
              <div
                aria-hidden="true"
                class="grid grid-cols-2 opacity-20 -space-x-52 2xl:mx-auto 2xl:max-w-6xl"
              >
                <div class="h-60 bg-gradient-to-br from-primary to-orange-400 blur-3xl"></div>
                <div
                  class="rounded-full h-72 bg-gradient-to-tr from-cyan-400 to-primary blur-3xl"
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
                  <h2 class="text-xl font-semibold text-gray-900">Providing Access</h2>
                  <p class="mt-3 text-lg text-gray-700">
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
              class="relative grid overflow-hidden rounded-[1.25rem] bg-green-800 p-1 sm:grid-cols-2"
            >
              <div
                class="flex flex-col gap-6 p-8 text-white transition duration-300 rounded-2xl hover:text-green-800 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10"
              >
                <div class="flex w-10 h-10 border border-gray-200 rounded">
                  <i class="m-auto fa-solid fa-solar-panel"></i>
                </div>
                <div>
                  <h2 class="text-xl font-semibold">Solar-Powered Irrigation</h2>
                  <p class="mt-3">
                    Reliable, cost-effective solar irrigation systems to boost your crop yields
                    sustainably.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 p-8 text-white transition duration-300 rounded-2xl hover:text-green-800 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10"
              >
                <div class="flex w-10 h-10 border border-gray-200 rounded">
                  <i class="m-auto fa-brands fa-pagelines"></i>
                </div>
                <div>
                  <h2 class="text-xl font-semibold">Green Processing Units</h2>
                  <p class="mt-3">
                    Renewable energy-powered processing units that cut costs and reduce your carbon
                    footprint.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 p-8 text-white transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 hover:text-green-800"
              >
                <div class="flex w-10 h-10 border border-gray-200 rounded">
                  <i class="m-auto fa-solid fa-truck-ramp-box"></i>
                </div>
                <div>
                  <h2 class="text-xl font-semibold">Equipment Leasing</h2>
                  <p class="mt-3">
                    Lease advanced agro equipment at low costs to enhance your farm’s productivity.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 p-8 text-white transition duration-300 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 hover:text-green-800"
              >
                <div class="flex w-10 h-10 border border-gray-200 rounded">
                  <i class="m-auto fa-brands fa-leanpub"></i>
                </div>
                <div>
                  <h2 class="text-xl font-semibold">Farmer Training</h2>
                  <p class="mt-3">
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
              class="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay=".3s"
            >
              Our Solution
            </h2>
            <p
              class="my-12 text-gray-600 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay=".3s"
            >
              We build solar powered agro equipment and provide farmers with affordable solar
              irrigation, grain threshing, milling and drying services on a pay-per-use model that
              can be easily accessible to them through our rural solar hubs.
            </p>
            <div class="space-y-4 divide-y divide-gray-100">
              <div
                class="flex gap-4 mt-8 md:items-center wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".3s"
                :key="slide.id"
                v-for="slide in slides.reverse().slice(1, 4)"
              >
                <div class="flex w-12 h-12 gap-4 border border-gray-200 rounded">
                  <i :class="`m-auto text-gray-700 ${slide.icon}`"></i>
                </div>
                <div class="w-5/6">
                  <h3 class="text-lg font-semibold text-gray-700">
                    {{ slide.title }}
                  </h3>
                  <p class="text-gray-500">
                    {{ slide.info }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center m-4">
              <RouterLink
                :to="{ name: 'products' }"
                class="relative flex items-center justify-center px-5 h-11 w-max before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 wow fadeInRight"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
              >
                <span class="relative w-max text-primary"> Learn more </span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="my-20 md:my-32">
          <h3
            class="text-2xl font-bold text-gray-900 md:w-2/3 md:text-3xl lg:text-4xl wow fadeInDown"
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
          <div class="relative grid justify-center grid-cols-1 gap-6 mt-12 lg:grid-cols-4">
            <div
              class="col-span-2 px-1 m-auto text-gray-600 xl:container wow"
              data-wow-duration="1s"
              :class="{ fadeInRight: !(i % 2), fadeInLeft: !!(i % 2) }"
              :data-wow-delay="`.${1 + i}s`"
              :key="potential.title"
              v-for="(potential, i) in impactPotential"
            >
              <div
                class="from-green-500 to-orange-100 bg-gradient-to-br relative overflow-hidden p-4 rounded-3xl lg:p-10 lg:rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center"
              >
                <!-- <img
                  class="max-w-[80%] absolute top-0 opacity-10"
                  alt="image"
                  loading="lazy"
                  :class="{ 'left-0': !(i % 2), 'right-0': !!(i % 2) }"
                  :src="potential.image"
                /> -->
                <div class="flex justify-center md:w-5/12 lg:w-2/6" v-if="i % 2">
                  <img class="max-w-[80%]" alt="image" loading="lazy" :src="potential.image2" />
                </div>
                <div class="md:w-7/12 lg:w-4/6">
                  <h2 class="text-3xl font-bold text-center text-gray-900 md:text-4xl md:text-left">
                    {{ potential.title }}
                  </h2>
                  <p class="my-8 text-xl text-center text-gray-800 md:text-left">
                    {{ potential.info }}
                  </p>
                </div>
                <div class="flex justify-center md:w-5/12 lg:w-2/5" v-if="!(i % 2)">
                  <img class="max-w-[80%]" alt="image" loading="lazy" :src="potential.image2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pt-1 md:pt-5 wow slideInLeft"
      data-wow-duration=".6s"
      data-wow-delay=".3s"
      id="solution"
    >
      <TestimonialSection />
    </div>
  </main>
</template>
