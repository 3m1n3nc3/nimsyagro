<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      enter-to-class="translate-y-0 opacity-100 sm:scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100 sm:scale-100"
      leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 z-10 overflow-hidden"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="relative flex justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
            >&#8203;</span
          >
          <slot></slot>
        </div>
      </div>
    </Transition>
    <div
      class="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black opacity-80"
      v-if="isOpen"
      @click="isOpen = false"
    ></div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
const emit = defineEmits(['update:modelValue', 'opened', 'closed'])
const props = defineProps({
  title: {
    type: String,
    default: 'Archive Project'
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

// Assign the modelValue prop to the isOpen variable
const isOpen = ref(props.modelValue)
watch(isOpen, (value) => {
  emit('update:modelValue', value)
  if (value) {
    emit('opened')
  } else {
    emit('closed')
  }
})

watch(
  () => props.modelValue,
  (value) => {
    isOpen.value = value

    if (value) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
)
</script>
