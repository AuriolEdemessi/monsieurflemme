<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { event, formatPrice } from '../data/event'

defineProps({
  hidden: { type: Boolean, default: false },
})

const emit = defineEmits(['openTicket'])

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > window.innerHeight * 0.6
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <!-- Barre de réservation collante, mobile uniquement -->
  <div
    :class="[
      'fixed inset-x-3 bottom-3 z-40 transition-all duration-300 md:hidden',
      visible && !hidden ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-[150%] opacity-0',
    ]"
  >
    <div class="flex items-center justify-between gap-3 border hairline bg-ink-2/90 py-2 pl-5 pr-2 shadow-2xl backdrop-blur-lg">
      <div class="leading-tight">
        <p class="display text-lg text-bone">{{ formatPrice(event.price) }}</p>
        <p class="label-mono !text-[0.6rem] text-bone-dim">{{ event.capacity }} places</p>
      </div>
      <button @click="emit('openTicket')" class="flex items-center gap-2 bg-blood px-5 py-3 text-sm font-extrabold text-ink">
        Réserver
        <ArrowRight class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>
