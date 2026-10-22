<script setup>
import { event } from '../data/event'

const items = [
  `${event.dateShort} ${event.time}`,
  `Music by ${event.dj}`,
  ...event.program.map((p) => p.title),
  `${event.capacity} places seulement`,
  event.slogan,
]
</script>

<template>
  <div class="relative z-10 -my-2 overflow-hidden" aria-hidden="true">
    <div class="-mx-4 -rotate-2 bg-blood py-3 text-ink shadow-[0_10px_40px_rgb(255_45_32/0.25)]">
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
