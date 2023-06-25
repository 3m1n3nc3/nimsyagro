<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <Popover as="header" class="relative">
        <div class="py-6 bg-primary-3">
          <nav
            class="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
            aria-label="Global"
          >
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <TLogo class="w-auto h-8 p-1 bg-white rounded-md sm:h-10" />
                <div class="flex items-center -mr-2 md:hidden">
                  <PopoverButton
                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  >
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-8 md:flex md:ml-10 nav-links">
                <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.route"
                  class="text-base font-medium text-white hover:text-gray-300"
                  >{{ item.name }}</RouterLink
                >
              </div>
            </div>
          </nav>
        </div>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <PopoverPanel
            focus
            class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top transform md:hidden"
          >
            <div
              class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5"
            >
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <TLogo class="w-auto h-8 p-1 bg-white rounded-md" />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="pt-5 pb-6">
                <div class="px-2 space-y-1">
                  <RouterLink
                    exact
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.route"
                    class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    :class="{ 'bg-gray-50': item.name === 'Home' }"
                    >{{ item.name }}</RouterLink
                  >
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <RouterView />

      <footer class="bg-gray-800" aria-labelledby="footer-heading">
        <div class="max-w-md px-4 pt-12 mx-auto sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="space-y-8 xl:col-span-1">
              <div class="flex space-x-6">
                <a
                  v-for="item in socials"
                  :key="item.name"
                  :href="item.href"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">{{ item.name }}</span>
                  <i :class="item.icon" class="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div class="py-8 mt-12 border-t border-gray-200">
            <p class="text-base text-gray-400 xl:text-center">
              &copy; {{ new Date().getFullYear() }} Nimsy Agro Solar Concept. All rights reserved.
            </p>
            <div class="text-gray-600 cursor-default">
              Developed by
              <a href="https://hoolicontech.com" target="_blank">Hoolicon Technologies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import TLogo from '../components/TLogo.vue'
import { RouterView, RouterLink } from 'vue-router'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Home', route: { name: 'home' } },
  { name: 'Gallery', route: { name: 'gallery' } },
  { name: 'Product & Services', route: { name: 'services' } },
  { name: 'Service Requests', route: { name: 'request' } },
  { name: 'Contact Us', route: { name: 'contact' } }
]

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/nimsyagrosolar',
    icon: 'fab fa-facebook-f'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nimsyagrosolar',
    icon: 'fab fa-instagram'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@NimsysolarAgro',
    icon: 'fab fa-youtube'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nimsy-agro-solar',
    icon: 'fab fa-linkedin-in'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/nimsyagrosolar',
    icon: 'fab fa-twitter'
  }
]
</script>
