<template>
  <main class="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
    <SliderSection />
    <section class="container px-6 py-8 mx-auto lg:py-16" id="about">
      <div class="lg:flex lg:items-center lg:-mx-4">
        <div class="lg:w-1/2 lg:px-4">
          <h3 class="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">
            Walk with us as we take you through some of our product reveals
          </h3>

          <p class="mt-6 text-gray-500">
            Picking intrest in our products? We have created a video demo to give you a better idea
            of how our product works, take your time to watch and understand so you can make a
            better decision.
          </p>

          <button class="flex items-center mt-8 -mx-2 text-red-600" @click="openVideoDialog = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="mx-1 font-semibold">PLAY VIDEO</p>
          </button>
        </div>

        <div class="relative mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
          <button
            class="absolute left-0 right-0 flex items-center justify-center w-full h-full ml-auto mr-auto"
            @click="openVideoDialog = true"
          >
            <PlayIcon
              class="object-cover w-20 h-20 text-red-600 bg-white rounded-full cursor-pointer hover:w-24 hover:h-24"
            />
          </button>
          <img
            class="object-cover w-full rounded-xl h-96"
            src="/assets/img/video-thumbnail.jpg"
            alt="Video thumbnail"
          />
        </div>
      </div>
    </section>

    <div class="overflow-hidden bg-gray-50">
      <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="absolute top-0 bottom-0 hidden w-screen bg-white lg:block left-3/4" />
        <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 class="text-base font-semibold tracking-wide uppercase text-primary">About Us</h2>
            <h3
              class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
            >
              The problem we solve
            </h3>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <svg
              class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div class="flex justify-center aspect-w-12 aspect-h-12 lg:aspect-none">
                  <img
                    class="object-cover object-center rounded-lg shadow-lg aspect-square"
                    src="/assets/img/pump.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width="400"
                    height="400"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="mx-auto text-base max-w-prose lg:max-w-none">
              <p class="text-lg text-gray-500">
                Smallholder farmers rely heavily on fossil fuel agricultural equipment for
                irrigation, threshing and drying but fossil fuel agric equipment are expensive to
                operate because of the need to constantly buy fuel.
              </p>
            </div>
            <div
              class="mx-auto mt-5 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1"
            >
              <p>
                Recent hikes in fuel prices in Nigeria has worsen this situation adversely affecting
                farmers income, bringing about low productivity and post-harvest loses. Also, the
                agric sector is a significant contributor to greenhouse gas emissions that brings
                about climate change largely due to the use of fossil fuels agric equipment.
                Renewable energy innovations can help reduce these emissions and mitigate the impact
                of agriculture on the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative py-16 bg-white sm:py-24">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div class="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div class="absolute inset-y-0 w-full right-1/2 bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              class="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div
            class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"
          >
            <!-- Testimonial card-->
            <div class="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
              <img
                class="absolute inset-0 object-cover w-full h-full"
                src="/assets/img/man-pump.jpg"
                alt=""
              />
              <div class="absolute inset-0 bg-green-500 mix-blend-multiply" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-green-600 via-green-600 opacity-90"
              />
              <div class="relative px-8">
                <blockquote class="mt-8">
                  <div class="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      class="absolute top-0 left-0 w-8 h-8 text-green-400 transform -translate-x-3 -translate-y-2"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                      />
                    </svg>
                    <p class="relative">
                      Our solar agric products are the perfect way for smallholder farmers to reduce
                      their carbon footprint and save money.
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
          <!-- Content area -->
          <div class="pt-12 sm:pt-16 lg:pt-20">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our solution
            </h2>
            <div class="mt-6 space-y-6 text-gray-500">
              <p class="text-lg">
                Nimsy agro solar concept builds solar powered agricultural equipment and provide
                smallholder farmers with on-demand solar irrigation, threshing and drying services
                to help them curtail high operation cost, reduce post-harvest loses and enhance
                their productivity so that small scale farmers can have better lives.
              </p>
              <p class="text-base leading-7">
                We offer them an affordable, cleaner, and sustainable alternative to expensive and
                polluting fossil fuel agricultural equipment. Through phone call, request form on
                our web platform or text messaging, farmers can request for our agricultural solar
                services on pay-per-use model. Our solar agric products are mobile, can be moved
                around, it has zero carbon emission, zero fuel cost and helps smallholder farmers
                reduce farm operational cost so they can more money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature section with grid -->
    <div class="relative py-16 bg-gray-50 sm:py-24 lg:py-32">
      <div class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 class="text-base font-semibold tracking-wider uppercase text-cyan-600">
          Innovative solution
        </h2>
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our Impact Potential
        </p>
        <div class="inline-flex items-center justify-center mt-5 max-w-prose">
          <img src="/assets/img/sdg.png" alt="SDG Banner" class="max-w-sm" />
        </div>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div v-for="feature in features" :key="feature.name" class="pt-6">
              <div class="flow-root px-6 pb-8 bg-white rounded-lg">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center overflow-hidden rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600"
                    >
                      <img :src="feature.icon" class="text-white w-14 h-14" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    {{ feature.name }}
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TDialog v-model="openVideoDialog">
      <div
        class="relative inline-block p-2 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl opacity-100 rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle"
      >
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/TrKQjojAxv0?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </TDialog>
  </main>
</template>

<script setup>
import SliderSection from '../components/SliderSection.vue'
import { PlayIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'
import TDialog from '../components/TDialog.vue'
const openVideoDialog = ref(false)
const features = [
  {
    name: 'No Poverty',
    description:
      'Improving farmers incoming and curtail high operating cost from using fuel agric equipment. Farmers will be able to save up to $52 monthly.',
    icon: '/assets/icons/no-poverty.png'
  },
  {
    name: 'Zero Hunger',
    description:
      'Increase food production through affordable irrigation and drying services to help farmers grow food all season and curtail high post harvest cost.',
    icon: '/assets/icons/no-hunger.png'
  },
  {
    name: 'Affordable and Clean Energy',
    description:
      'Small holder farmers will have access to our Affordable and Clean Energy agricultural equipment and services.',
    icon: '/assets/icons/clean-energy.png'
  },
  {
    name: 'Climate Action',
    description:
      'Reducing over 500 Mt of carbon emission into the atmosphere, thus slowing down climate change.',
    icon: '/assets/icons/climate-action.png'
  }
]
</script>
