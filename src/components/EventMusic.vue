<script setup>
import { event } from '../data/event'
import CrownDoodle from './ui/CrownDoodle.vue'

const bars = [0.9, 0.5, 1.2, 0.7, 1.05, 0.6, 0.95, 0.8, 1.15, 0.55, 1, 0.75]
</script>

<template>
  <section id="music" class="relative isolate overflow-hidden border-y hairline py-28 sm:py-40">
    <!-- Ambiance club floutée -->
    <div
      class="absolute inset-0 -z-10 scale-110 bg-cover bg-center opacity-40 blur-xl"
      :style="{ backgroundImage: `url(${event.ambianceVisual})` }"
    ></div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/60 to-ink"></div>

    <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <p v-reveal class="label-mono flex items-center justify-center gap-3 text-bone-dim">
        <span class="text-blood">03</span> Aux platines
      </p>

      <div v-reveal="100" class="relative mt-16 inline-block sm:mt-24">
        <p class="absolute -top-6 left-0 flex -rotate-6 items-center gap-2 font-marker text-2xl text-blood sm:-top-10 sm:text-4xl">
          Music by
          <CrownDoodle class="h-6 w-8 text-bone sm:h-8 sm:w-10" />
        </p>
        <h2 class="display text-[clamp(7rem,30vw,22rem)] leading-[0.8] text-bone">
          {{ event.dj }}
        </h2>
        <span class="display text-outline pointer-events-none absolute inset-0 translate-x-2 translate-y-2 -z-10 text-[clamp(7rem,30vw,22rem)] leading-[0.8] text-blood sm:translate-x-4 sm:translate-y-4" aria-hidden="true">
          {{ event.dj }}
        </span>
      </div>

      <!-- Égaliseur -->
      <div class="mx-auto mt-12 flex h-12 max-w-xs items-end justify-center gap-1.5" aria-hidden="true">
        <span
          v-for="(speed, i) in bars"
          :key="i"
          class="block h-full w-2 origin-bottom rounded-full bg-blood motion-safe:[animation:eq_var(--s)_ease-in-out_infinite]"
          :style="{ '--s': `${speed}s`, animationDelay: `${i * -0.13}s`, transform: 'scaleY(0.4)' }"
        ></span>
      </div>

      <p v-reveal="200" class="mx-auto mt-10 max-w-md text-lg text-bone-dim">
        Le son de la Special Edition. Entre deux frissons, la piste reste ouverte.
      </p>
    </div>
  </section>
</template>
