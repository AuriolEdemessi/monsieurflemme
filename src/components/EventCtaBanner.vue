<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { event, formatPrice } from '../data/event'
import CrownDoodle from './ui/CrownDoodle.vue'

const emit = defineEmits(['openTicket'])
</script>

<template>
  <section class="relative overflow-hidden bg-blood py-24 text-ink sm:py-32">
    <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <CrownDoodle v-reveal class="mx-auto h-10 w-14" />
      <h2 v-reveal="100" class="display mt-6 text-[clamp(3.4rem,12vw,10rem)]">
        Tu viens ou <br />tu <span class="whitespace-nowrap"><span class="font-marker normal-case text-bone">flemmes</span>&nbsp;?</span>
      </h2>
      <p v-reveal="200" class="mx-auto mt-8 max-w-md text-lg font-semibold">
        {{ event.capacity }} places. {{ event.dateShort }}, {{ event.time.toLowerCase() }}. Après, ce sera trop tard.
      </p>
      <button
        v-reveal="300"
        @click="emit('openTicket')"
        class="mt-10 inline-flex items-center gap-3 bg-ink px-8 py-5 font-extrabold text-bone shadow-[5px_5px_0_var(--color-bone)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
      >
        Réserver ma place · {{ formatPrice(event.price) }}
        <ArrowRight class="h-4 w-4" />
      </button>
    </div>
  </section>
</template>
