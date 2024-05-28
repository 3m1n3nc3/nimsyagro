<script setup lang="ts">
import { slides } from '@/utils/content'
</script>

<template>
  <main class="mb-20">
    <div id="home">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div class="relative pt-40 ml-auto xl:pt-36">
          <h1 class="text-5xl font-black md:text-6xl xl:text-7xl">Our Products</h1>
        </div>
      </div>
    </div>

    <div class="pt-12 md:pt-20" :id="slide.id" :key="slide.id" v-for="slide in slides">
      <div class="max-w-6xl px-6 mx-auto md:px-12 lg:px-6 xl:px-0">
        <div
          class="flex flex-col items-center gap-6 mx-auto sm:w-4/5 md:w-full md:flex-row lg:gap-12"
        >
          <div
            class="relative flex justify-center md:w-1/2 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".6s"
          >
            <div
              aria-hidden="true"
              class="absolute inset-0 grid w-3/5 grid-cols-2 m-auto h-3/5 -space-x-52 opacity-40"
            >
              <div
                class="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px]"
              ></div>
              <div class="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px]"></div>
            </div>
            <img
              class="relative h-52"
              width="auto"
              height="200"
              :alt="`${slide.title} illustration`"
              :src="slide.image_o"
            />
          </div>
          <div class="h-full ml-auto text-center md:text-left md:w-1/2">
            <h3
              class="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              {{ slide.title }}
            </h3>
            <p
              class="my-6 text-gray-600 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".7s"
            >
              {{ slide.info }}
            </p>
            <div class="flex justify-center md:justify-start">
              <a
                class="relative flex items-center justify-center px-5 h-11 w-max before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".8s"
                target="_blank"
                :href="slide.demo"
                v-if="slide.demo"
              >
                <span class="relative text-white w-max">
                  <i class="text-white fa-solid fa-circle-play"></i>
                  Live Demo
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
