<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import { impactPotential } from '@/utils/content'
</script>

<template>
  <main class="mb-40">
    <div class="dark:bg-darker lg:overflow-auto" id="home">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="relative pt-40 ml-auto xl:pt-36">
          <HeroSection />
        </div>
      </div>
    </div>

    <div class="relative pt-12 md:pt-20" id="features">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="mx-auto md:w-3/5">
          <h2
            class="text-3xl font-bold text-center text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
            The Problem we solve
          </h2>
          <p class="mt-4 text-center text-gray-600 dark:text-gray-300">
            We are making mechanization accessible to everyone.
          </p>
        </div>

        <div class="mt-16 md:mt-20 wow slideInUp" data-wow-duration=".5s" data-wow-delay=".2s">
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
                  class="w-16"
                  src="@/assets/icons/field.png"
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
      data-wow-duration=".5s"
      data-wow-delay=".2s"
      id="solution"
    >
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div
          class="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0"
        >
          <div class="relative h-full ml-auto md:w-1/2">
            <img
              class="overflow-hidden rounded-3xl"
              src="@/assets/images/panels.jpg"
              alt="app milestone"
              width="1174"
              height="1134"
            />
          </div>

          <div class="md:w-1/2 lg:w-[47%]">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              Our Solution
            </h2>
            <p class="my-12 text-gray-600 dark:text-gray-300">
              We build solar powered agro equipment and provide farmers with affordable solar
              irrigation, grain threshing, milling and drying services on a pay-per-use model that
              can be easily accessible to them through our rural solar hubs.
            </p>
            <div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
              <div class="flex gap-4 mt-8 md:items-center">
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
              <div class="flex gap-4 pt-4 md:items-center">
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
            class="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl lg:text-4xl"
          >
            Our Impact Potential
          </h3>
          <div class="inline-flex items-center justify-center mt-5 max-w-prose">
            <img src="@/assets/images/sdg.png" alt="SDG Banner" class="h-8 max-w-sm" />
          </div>
          <div class="relative grid justify-center grid-cols-1 gap-6 mt-12 md:grid-cols-3">
            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker wow fadeInRight"
              data-wow-duration=".4s"
              :data-wow-delay="`.${2 + i}s`"
              :class="{
                'col-span-3 self-center': i === impactPotential.length - 1,
                'col-span-3 md:col-span-1': i !== impactPotential.length - 1
              }"
              :key="potential.title"
              v-for="(potential, i) in impactPotential"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <img
                  class="w-10 overflow-hidden rounded-md"
                  alt="safety icon illustration"
                  height="512"
                  width="512"
                  :src="potential.image"
                />
                <div>
                  <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
                    {{ potential.title }}
                  </h4>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    {{ potential.info }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col items-center gap-6 mx-auto sm:w-4/5 md:w-full md:flex-row lg:gap-12"
        >
          <div class="relative md:w-1/2">
            <div
              aria-hidden="true"
              class="absolute inset-0 grid w-3/5 grid-cols-2 m-auto h-3/5 -space-x-52 opacity-40 dark:opacity-60"
            >
              <div
                class="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
              ></div>
              <div
                class="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600"
              ></div>
            </div>
            <img
              class="relative dark:hidden"
              src="/images/illus.webp"
              alt="stats illustration"
              width="1746"
              height="1746"
            />
            <img
              class="relative hidden dark:block"
              src="/images/illus-dark.webp"
              alt="stats illustration"
              width="1746"
              height="1746"
            />
          </div>
          <div class="h-full ml-auto md:w-1/2">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
              Go beyond with our top products
            </h3>
            <p class="my-12 text-gray-600 dark:text-gray-300">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat ? Asperiores nemo
              possimus nesciunt dicta veniam aspernatur quam mollitia. <br />
              <br />
              Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at
              reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
            </p>
            <a
              href="/pages/register.html"
              class="relative flex items-center justify-center px-5 h-11 w-max before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              type="{type}"
            >
              <span class="relative text-white w-max">Get started</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-32 text-gray-600 dark:text-gray-300 md:pt-20" id="reviews">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="mx-auto md:w-3/5">
          <h2
            class="text-3xl font-bold text-center text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
            Trusted by thousands
          </h2>
          <p class="mt-4 text-center text-gray-600 dark:text-gray-300">
            Repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.
          </p>
        </div>
        <div class="grid gap-6 mt-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          <div class="space-y-6">
            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum
                  quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a
                  suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                  quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis
                  harum et rerum.
                </p>
              </div>
            </div>

            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/images/avatars/avatar-1.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint
                  non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/images/avatars/avatar-1.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                  </div>
                </div>
                <p>
                  Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non
                  cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>

            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/images/avatars/avatar-3.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                  </div>
                </div>
                <p>
                  Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non
                  cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>

            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/images/avatars/avatar-2.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint
                  non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-6 sm:hidden lg:block">
            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                  </div>
                </div>
                <p>
                  Architecto laboriosam. Sint libero voluptas veniam at reprehenderit, veritatis
                  harum et rerum.
                </p>
              </div>
            </div>

            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/images/avatars/avatar-4.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo deleniti aperiam ab veniam sint non cumque quis tempore
                  cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et
                  rerum.
                </p>
              </div>
            </div>

            <div
              class="relative p-px overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex flex-col h-full gap-6 p-8 bg-gray-100 rounded-2xl dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="/images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo deleniti aperiam ab veniam Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative pt-12 md:pt-20" id="pricing">
      <div
        aria-hidden="true"
        class="absolute inset-0 grid w-full grid-cols-2 m-auto h-max -space-x-52 opacity-40 dark:opacity-80"
      >
        <div
          class="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
        ></div>
        <div
          class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"
        ></div>
      </div>
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Start managing your company smarter today
          </h2>
        </div>
        <div class="mt-12 md:mt-20">
          <div
            class="relative transition duration-500 bg-white border border-gray-100 shadow-2xl rounded-3xl shadow-gray-600/20 dark:border-white/10 dark:bg-gray-900 dark:shadow-none"
          >
            <div
              class="flex flex-col gap-12 p-12 divide-y dark:divide-gray-800 md:flex-row md:divide-y-0 md:divide-x"
            >
              <div class="text-center md:w-5/12">
                <h3 class="text-3xl font-bold text-gray-900 dark:text-white">Suite Enterprise</h3>
                <p class="text-lg text-gray-600 dark:text-gray-300">For your company of any size</p>
                <span
                  class="inline-block mt-12 mb-6 text-6xl font-bold text-gray-900 dark:text-white"
                  ><span class="text-4xl text-primary dark:text-gray-200">$</span>234</span
                >

                <div class="flex justify-center">
                  <a
                    href="/pages/register.html"
                    class="relative flex items-center justify-center px-5 h-11 w-max before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span class="relative text-white w-max"> Get started </span>
                  </a>
                </div>

                <p class="mt-12 text-sm text-gray-500 dark:text-gray-400">
                  Includes : Security, Unlimited Storage, Payment, Search engine, and all features
                </p>
              </div>
              <div class="relative md:w-7/12 md:pl-12">
                <ul role="list" class="py-6 space-y-4 text-gray-600 dark:text-gray-300">
                  <li class="space-x-2">
                    <span class="font-semibold text-primary dark:text-gray-300">✓</span>
                    <span>First premium advantage</span>
                  </li>
                  <li class="space-x-2">
                    <span class="font-semibold text-primary dark:text-gray-300">✓</span>
                    <span>Second advantage weekly</span>
                  </li>
                  <li class="space-x-2">
                    <span class="font-semibold text-primary dark:text-gray-300">✓</span>
                    <span>Third advantage donate to project</span>
                  </li>
                  <li class="space-x-2">
                    <span class="font-semibold text-primary dark:text-gray-300">✓</span>
                    <span>Fourth, access to all components weekly</span>
                  </li>
                </ul>
                <p class="text-gray-700 dark:text-white">
                  Team can be any size, and you can add or switch members as needed. Companies using
                  our platform include:
                </p>
                <div class="flex flex-wrap items-center justify-between gap-6 mt-12 grayscale">
                  <img
                    class="w-auto h-8 lg:h-12"
                    src="/images/clients/airbnb.svg"
                    width="100"
                    alt="airbnb"
                  />
                  <img
                    class="w-auto h-6 lg:h-8"
                    src="/images/clients/netflix.svg"
                    width="100"
                    alt="bissell"
                  />
                  <img
                    class="w-auto h-8 lg:h-10"
                    src="/images/clients/ge.svg"
                    width="100"
                    height="100"
                    alt="ge"
                  />
                  <img
                    class="h-8 ww-auto lg:h-12"
                    src="/images/clients/microsoft.svg"
                    width="100"
                    alt="microsoft"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-12 mt-20 md:mt-32 lg:flex-row">
          <div class="text-center lg:w-5/12 lg:pl-12 lg:text-left">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl">
              Frequently Asqued Questions
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              piente optio repellendus atque illum odio! Fugiat at expedita deserunt dolorum
              molestias.
            </p>
          </div>

          <div
            class="border-gray-200 divide-y divide-gray-200 border-y dark:divide-gray-800 dark:border-gray-800 lg:w-7/12"
          >
            <div>
              <dl class="max-w-2xl mx-auto faq">
                <dt class="text-lg sm:mb-0">
                  <button
                    type="button"
                    class="flex items-start justify-between w-full py-6 text-left text-gray-400"
                    aria-controls="faq-1"
                    data-active="false"
                  >
                    <span class="text-lg font-normal text-gray-900 dark:text-white"
                      >How to customize the template</span
                    >
                    <span class="flex items-center ml-6 h-7">
                      <svg
                        class="w-6 h-6 duration-300 transform rotate-0 arrow-down"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="block pr-12 overflow-hidden duration-300 ease-in-out faq-answer max-h-0"
                  id="faq-1"
                >
                  <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur
                    possimus at fugit natus aspernatur molestiae. Velit, odio modi provident
                    necessitatibus molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                </dd>
              </dl>
            </div>

            <div>
              <dl class="max-w-2xl mx-auto faq">
                <dt class="text-lg sm:mb-0">
                  <button
                    type="button"
                    class="flex items-start justify-between w-full py-6 text-left text-gray-400"
                    aria-controls="faq-2"
                    data-active="false"
                  >
                    <span class="text-lg font-normal text-gray-900 dark:text-white"
                      >How many times can I use the template ?</span
                    >
                    <span class="flex items-center ml-6 h-7">
                      <svg
                        class="w-6 h-6 duration-300 transform rotate-0 arrow-down"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="block pr-12 overflow-hidden duration-300 ease-in-out faq-answer max-h-0"
                  id="faq-2"
                >
                  <div class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod
                      pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi
                      provident necessitatibus molestias qui voluptatibus similique magnam a nam
                      rem!
                    </p>
                    <ul class="pl-4 mt-4 list-disc list-outside">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>

            <div>
              <dl class="max-w-2xl mx-auto faq">
                <dt class="text-lg sm:mb-0">
                  <button
                    type="button"
                    class="flex items-start justify-between w-full py-6 text-left text-gray-400"
                    aria-controls="faq-3"
                    data-active="false"
                  >
                    <span class="text-lg font-normal text-gray-900 dark:text-white">
                      How to customize the template ?
                    </span>
                    <span class="flex items-center ml-6 h-7">
                      <svg
                        class="w-6 h-6 duration-300 transform rotate-0 arrow-down"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="block pr-12 overflow-hidden duration-300 ease-in-out faq-answer max-h-0"
                  id="faq-3"
                >
                  <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur
                    possimus at fugit natus aspernatur molestiae. Velit, odio modi provident
                    necessitatibus molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                </dd>
              </dl>
            </div>

            <div>
              <dl class="max-w-2xl mx-auto faq">
                <dt class="text-lg sm:mb-0">
                  <button
                    type="button"
                    class="flex items-start justify-between w-full py-6 text-left text-gray-400"
                    aria-controls="faq-4"
                    data-active="false"
                  >
                    <span class="text-lg font-normal text-gray-900 dark:text-white">
                      How to customize the template ?
                    </span>
                    <span class="flex items-center ml-6 h-7">
                      <svg
                        class="w-6 h-6 duration-300 transform rotate-0 arrow-down"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="block pr-12 overflow-hidden duration-300 ease-in-out faq-answer max-h-0"
                  id="faq-4"
                >
                  <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur
                    possimus at fugit natus aspernatur molestiae. Velit, odio modi provident
                    necessitatibus molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                </dd>
              </dl>
            </div>

            <div>
              <dl class="max-w-2xl mx-auto faq">
                <dt class="text-lg sm:mb-0">
                  <button
                    type="button"
                    class="flex items-start justify-between w-full py-6 text-left text-gray-400"
                    aria-controls="faq-5"
                    data-active="false"
                  >
                    <span class="text-lg font-normal text-gray-900 dark:text-white">
                      How to customize the template ?
                    </span>
                    <span class="flex items-center ml-6 h-7">
                      <svg
                        class="w-6 h-6 duration-300 transform rotate-0 arrow-down"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="block pr-12 overflow-hidden duration-300 ease-in-out faq-answer max-h-0"
                  id="faq-5"
                >
                  <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur
                    possimus at fugit natus aspernatur molestiae. Velit, odio modi provident
                    necessitatibus molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
