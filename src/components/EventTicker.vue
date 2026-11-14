<script setup>
import { event } from '../data/event'

const items = [
  `${event.dateShort} · ${event.time}`,
  'Projection surprise',
  'Débriefing',
  'Undercover',
  'Karaoké',
  'Free popcorn & drink',
  `${event.capacity} places seulement`,
  `Ticket unique ${event.price / 1000}K · Pass duo ${event.duoPrice / 1000}K`,
]
</script>

<template>
  <div class="relative z-10 -my-2 overflow-hidden" aria-hidden="true">
    <div class="-mx-4 -rotate-2 bg-accent py-3 text-ink shadow-[0_10px_40px_rgb(217_161_115/0.25)]">
      <div class="animate-marquee flex w-max">
        <div v-for="n in 2" :key="n" class="flex shrink-0 items-center">
          <span v-for="item in items" :key="`${n}-${item}`" class="display flex items-center whitespace-nowrap text-2xl sm:text-3xl">
            <span class="px-5">{{ item }}</span>
            <span class="text-lg">✦</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
