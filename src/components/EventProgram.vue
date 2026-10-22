<script setup>
import { Clapperboard, MicVocal, Popcorn, Gamepad2, Brush, Drama } from 'lucide-vue-next'
import { event } from '../data/event'

const icons = {
  film: Clapperboard,
  mic: MicVocal,
  popcorn: Popcorn,
  games: Gamepad2,
  makeup: Brush,
  costume: Drama,
}
</script>

<template>
  <section id="programme" class="relative border-t hairline py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p v-reveal class="label-mono flex items-center gap-3 text-bone-dim">
            <span class="text-blood">02</span> Au programme
          </p>
          <h2 v-reveal="100" class="display mt-6 text-[clamp(3rem,9vw,7rem)] text-bone">
            Six raisons <br class="hidden sm:block" />de <span class="text-blood">frissonner</span>
          </h2>
        </div>
        <p v-reveal="200" class="max-w-xs text-bone-dim">
          Une seule soirée, de quoi rester du début à la fin. Même les plus flemmards.
        </p>
      </div>

      <ol class="mt-16 grid grid-cols-1 border-l border-t hairline sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(item, i) in event.program"
          :key="item.title"
          v-reveal="(i % 3) * 100"
          class="group relative overflow-hidden border-b border-r hairline p-7 transition-colors duration-300 hover:bg-blood sm:p-9"
        >
          <div class="flex items-start justify-between">
            <span class="display text-outline text-6xl text-bone/40 transition-colors duration-300 group-hover:text-ink/50">
              0{{ i + 1 }}
            </span>
            <component
              :is="icons[item.icon]"
              class="h-8 w-8 text-blood transition-all duration-300 group-hover:-rotate-12 group-hover:text-ink"
              stroke-width="1.6"
            />
          </div>
          <h3 class="display mt-10 text-3xl text-bone transition-colors duration-300 group-hover:text-ink">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-bone-dim transition-colors duration-300 group-hover:text-ink/80">
            {{ item.text }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
