<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <template v-for="(product, i) in products">
    <div
      class="overflow-hidden"
      :class="{
        'bg-gray-50s': i % 2 === 0,
        'bg-whites': i % 2 === 1,
        'bg-gray-50': product.title,
        'py-16 lg:py-24': product.title && !!products[i + 1]?.title,
        'py-4': !product.title,
        'pb-10 pt-16 lg:pt-24': !products[i + 1]?.title
      }"
      :key="product.title"
      v-if="product.models"
    >
      <div class="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          class="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div class="relative" v-if="product.title">
          <h2
            class="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
          >
            {{ product.title }}
          </h2>
          <p class="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
            {{ product.description }}
          </p>
        </div>

        <div
          class="relative p-4 bg-white lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          :class="{
            'mt-12 lg:mt-16': i % 2 === 0 && product.title,
            'mt-0 border-t': i % 2 === 1,
            'mt-4': !product.title
          }"
          :id="model.id"
          :key="model.id"
          v-for="(model, i) in product.models"
        >
          <div class="relative">
            <h3 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {{ model.name }}
            </h3>
            <p class="mt-3 text-lg text-justify text-gray-500">
              {{ model.description }}
            </p>
          </div>

          <div class="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
            <svg
              class="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
              <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img class="relative mx-auto" width="390" :src="model.image" :alt="model.name" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-gray-50"
      :class="{ 'py-5': i % 2 === 0 }"
      :key="product.title"
      v-if="!product.models"
    ></div>
  </template>
</template>

<script setup>
import { onMounted } from 'vue'

// import { classnames } from 'tailwindcss-classnames'

onMounted(() => {
  const hash = window.location.hash
  if (hash) {
    const el = document.getElementById(hash.slice(1))
    if (el) {
      el.scrollIntoView()
    }
  }
})

const products = [
  {
    title: 'Solar Irrigation pumps',
    description:
      'We build solar water pumps for irrigation and provide farmers with on-demand solar irrigation services to help them farm all year and reduce high operational cost from fossil fuel water pumps. We have two solar water pumps.',
    models: [
      {
        id: 'np1-solar-irrigation-pump',
        name: 'NP1 Solar Irrigation pump',
        description:
          'The NP1 Solar Irrigation pump which is optimized for 1-2 acres of farm land. It comes with 300 watts foldable solar panel, and it is designed with a battery to help farmers irrigate in moments of low sunlight and can be used to charge phone and lighten homes with led bulbs that comes with it. It can pump up to 10,000 liters per hour. We offer this on a pay-per- use, outright purchase or lease-to-own payment plan.',
        image: '/assets/img/slide-1.jpg'
      },
      {
        id: 'np2-solar-irrigation-pump',
        name: 'NP2 Solar Irrigation pump',
        description:
          'The NP 2 Solar Irrigation pump is the bigger sized solar water pump which is optimized for over 10 acres of farm land. It is designed with two wheeled cart for easy mobility and a retractable 900 watts solar panel enough to pump up to 30,000 liters of water per hour. We offer this on a pay-per-use, outright purchase or lease-to-own payment plan.',
        image: '/assets/img/slide-3.jpg'
      }
    ]
  },
  {
    title: null,
    description: null,
    models: [
      {
        id: 'solar-thresher',
        name: 'Solar Thresher',
        description: `We build solar thresher and provide smallholder farmers with on-demand solar threshing service on per-per-use model with our solar grain thresher which has the ability to thresh 300kg of grains per hour particularly maize and rice... Our thresher produces 2.5KVA of power and the excess are stored in batteries that can lighten 7 homes in off-grid rural communities.`,
        image: '/assets/img/slide-4.jpg'
      }
    ]
  },
  {},
  {
    title: null,
    description: null,
    models: [
      {
        id: 'solar-dryer',
        name: 'Solar Dryer',
        description: `We build solar dryer and provide smallholder farmers with on-demand solar drying service on pay-per-use model, it can dry vegetables and grains faster and hygienically to reduce post-harvest losses suffered by farmers.`,
        image: '/assets/img/slide-2.jpg'
      }
    ]
  }
]
</script>
