<template>
  <div class="py-24 lg:py-32">
    <div class="mx-auto md:w-3/5 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
      <h2 class="text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
        Contact Us
      </h2>
      <p class="mt-4 text-center text-gray-600">Need help? We're always here for you.</p>
    </div>
    <div class="px-4 pt-16 mx-auto max-w-7xl sm:pt-24 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden bg-white rounded-lg">
        <h2 class="sr-only">Contact Information</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div
            class="relative px-6 py-10 overflow-hidden bg-primary sm:px-10 xl:p-12 wow slideInLeft"
            data-wow-duration="1s"
            data-wow-delay=".6s"
          >
            <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
              <svg
                class="absolute inset-0 w-full h-full"
                width="343"
                height="388"
                viewBox="0 0 343 388"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                  fill="url(#linear1)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear1"
                    x1="254.553"
                    y1="107.554"
                    x2="961.66"
                    y2="814.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              class="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
              aria-hidden="true"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="359"
                height="339"
                viewBox="0 0 359 339"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                  fill="url(#linear2)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear2"
                    x1="192.553"
                    y1="28.553"
                    x2="899.66"
                    y2="735.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              class="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
              aria-hidden="true"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="160"
                height="678"
                viewBox="0 0 160 678"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                  fill="url(#linear3)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear3"
                    x1="192.553"
                    y1="325.553"
                    x2="899.66"
                    y2="1032.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-white">Contact information</h3>
            <p class="max-w-3xl mt-6 text-base text-indigo-50">
              Want to get in touch? Fill out the form below to send us a message and we will get
              back to you as soon as possible!
            </p>
            <dl class="mt-8 space-y-3">
              <dt><span class="sr-only">Phone number</span></dt>
              <dd class="flex text-base text-indigo-50">
                <i
                  class="flex-shrink-0 w-6 h-6 text-indigo-200 fas fa-phone"
                  aria-hidden="true"
                ></i>
                <span class="ml-3">08068108609, 07012133975</span>
              </dd>
              <dt><span class="sr-only">Email</span></dt>
              <dd class="flex text-base text-indigo-50">
                <i
                  class="flex-shrink-0 w-6 h-6 text-indigo-200 fas fa-envelope"
                  aria-hidden="true"
                ></i>
                <span class="ml-3">info@nimsyagrosolar.com</span>
              </dd>
              <dt><span class="sr-only">Address</span></dt>
              <dd class="flex text-base text-indigo-50">
                <i class="flex-shrink-0 w-6 h-6 text-indigo-200 fas fa-map" aria-hidden="true"></i>
                <span class="ml-3"
                  >Eesha Plaza opposite NNPC quarters Kachia road, mahuta, Kaduna.</span
                >
              </dd>
            </dl>
            <ul role="list" class="flex mt-6 space-x-12">
              <li :key="social.name" v-for="social in socials">
                <a
                  class="text-indigo-200 hover:text-indigo-100"
                  :href="social.link"
                  target="_blank"
                >
                  <span class="sr-only">{{ social.name }}</span>
                  <i :class="social.icon" class="w-6 h-6"></i>
                </a>
              </li>
            </ul>
          </div>

          <!-- MAP -->
          <div
            class="p-2 overflow-hidden bg-gray-100 lg:col-span-2 wow slideInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.151675546865!2d7.4164483751369055!3d10.488707064434653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d354968884b09%3A0x10daecde84ce4edf!2sEesha%20plaza!5e0!3m2!1sen!2sng!4v1687521295940!5m2!1sen!2sng"
              width="100%"
              height="100%"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-4 pt-10 mx-auto max-w-7xl sm:px-6 lg:px-8 wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".6s"
    >
      <div class="relative overflow-hidden bg-white rounded-lg shadow-md">
        <h2 class="sr-only">Contact Form</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact form -->
          <div class="px-6 py-10 sm:px-10 lg:col-span-3 xl:p-12">
            <h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
            <form
              action="/forms/contact-us.php"
              method="POST"
              class="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              name="contact"
            >
              <input type="hidden" name="origin" :value="$route.fullPath" />
              <div>
                <label for="fullname" class="block text-sm font-medium text-gray-900"
                  >Full name</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    autocomplete="name"
                    class="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                  <p
                    class="mt-2 text-sm text-red-600"
                    v-if="route.query?.success == 'false' && route.query?.fullname"
                  >
                    {{ route.query?.fullname }}
                  </p>
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                  <p
                    class="mt-2 text-sm text-red-600"
                    v-if="route.query?.success == 'false' && route.query?.email"
                  >
                    {{ route.query?.email }}
                  </p>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    class="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                  <p
                    class="mt-2 text-sm text-red-600"
                    v-if="route.query?.success == 'false' && route.query?.subject"
                  >
                    {{ route.query?.subject }}
                  </p>
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="message" class="block text-sm font-medium text-gray-900"
                    >Message</label
                  >
                  <span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
                </div>
                <div class="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    aria-describedby="message-max"
                  />
                  <p
                    class="mt-2 text-sm text-red-600"
                    v-if="route.query?.success == 'false' && route.query?.message"
                  >
                    {{ route.query?.message }}
                  </p>
                </div>
              </div>
              <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <TDialog v-model="openVideoDialog" @closed="$router.push({ query: {} })">
      <div
        class="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl opacity-100 rtl:text-right sm:my-8 sm:align-middle"
      >
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="p-4 rounded-md bg-green-50">
          <div class="flex">
            <div class="flex-shrink-0">
              <!-- Heroicon name: solid/check-circle -->
              <svg
                class="w-5 h-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <div class="text-sm text-green-700">
                <p>
                  {{ route.query?.message }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TDialog>
  </div>
</template>

<script setup lang="ts">
import TDialog from '../components/TDialog.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { socials } from '@/utils/content'

const route = useRoute()
const openVideoDialog = ref((route.query?.success == 'true' && !!route.query?.message) || false)
</script>
