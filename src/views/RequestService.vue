<template>
  <div class="px-4 py-24 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-36">
    <div class="relative max-w-xl mx-auto">
      <svg
        class="absolute transform translate-x-1/2 left-full"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg
        class="absolute bottom-0 transform -translate-x-1/2 right-full"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="mx-auto md:w-3/5 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
        <h2 class="text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
          Request For Our Services
        </h2>
        <p class="mt-4 text-center text-gray-600">
          Request for services and we will get back to you as soon as possible.
        </p>
      </div>
      <div class="mt-12">
        <form action="#" method="GET" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div class="sm:col-span-2">
            <label for="fullname" class="block text-sm font-medium text-gray-700">Full name</label>
            <div class="mt-1">
              <input
                type="text"
                name="fullname"
                id="fullname"
                autocomplete="name"
                class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
            <div class="mt-1">
              <input
                type="text"
                name="address"
                id="address"
                autocomplete="address"
                class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div class="sm:col-span-1">
            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
            <div class="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="city"
                class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div class="sm:col-span-1">
            <label for="state" class="block text-sm font-medium text-gray-700">State</label>
            <div class="mt-1">
              <select
                id="state"
                name="state"
                class="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option :value="state.name" :key="state.name" v-for="state in states">
                  {{ state.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-1">
            <label for="service" class="block text-sm font-medium text-gray-700">Service</label>
            <div class="mt-1">
              <select
                id="service"
                name="service"
                class="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option :value="service.id" :key="service.id" v-for="service in services">
                  {{ service.id }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-1">
            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
            <div class="mt-1">
              <input
                type="date"
                name="date"
                id="date"
                autocomplete="date"
                class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <div class="mt-1">
              <input
                type="tel"
                name="phone"
                id="phone"
                autocomplete="tel"
                class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-2"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { slides as services } from '@/utils/content'

const states = [
  { name: 'Abia' },
  { name: 'Adamawa' },
  { name: 'Akwa Ibom' },
  { name: 'Anambra' },
  { name: 'Bauchi' },
  { name: 'Bayelsa' },
  { name: 'Benue' },
  { name: 'Borno' },
  { name: 'Cross River' },
  { name: 'Delta' },
  { name: 'Ebonyi' },
  { name: 'Edo' },
  { name: 'Ekiti' },
  { name: 'Enugu' },
  { name: 'Gombe' },
  { name: 'Imo' },
  { name: 'Jigawa' },
  { name: 'Kaduna' },
  { name: 'Kano' },
  { name: 'Katsina' },
  { name: 'Kebbi' },
  { name: 'Kogi' },
  { name: 'Kwara' },
  { name: 'Lagos' },
  { name: 'Nasarawa' },
  { name: 'Niger' },
  { name: 'Ogun' },
  { name: 'Ondo' },
  { name: 'Osun' },
  { name: 'Oyo' },
  { name: 'Plateau' },
  { name: 'Rivers' },
  { name: 'Sokoto' },
  { name: 'Taraba' },
  { name: 'Yobe' },
  { name: 'Zamfara' },
  { name: 'FCT' }
]
</script>
