<script setup>
import { event } from '../data/event'
import CrownDoodle from './ui/CrownDoodle.vue'
</script>

<template>
  <section id="projection" class="relative isolate overflow-hidden border-y hairline py-28 sm:py-40">
    <!-- Affiche floutée en fond -->
    <div
      class="absolute inset-0 -z-10 scale-110 bg-cover bg-center opacity-30 blur-xl"
      :style="{ backgroundImage: `url(${event.ambianceVisual})` }"
    ></div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/70 to-ink"></div>

    <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <p v-reveal class="label-mono flex items-center justify-center gap-3 text-bone-dim">
        <span class="text-accent">03</span> La projection
      </p>

      <div v-reveal="100" class="relative mt-16 inline-block sm:mt-24">
        <p class="absolute -top-6 left-0 flex -rotate-6 items-center gap-2 font-marker text-2xl text-accent sm:-top-10 sm:text-4xl">
          {{ event.time }}
          <CrownDoodle class="h-6 w-8 text-bone sm:h-8 sm:w-10" />
        </p>
        <h2 class="display text-[clamp(5rem,23vw,16rem)] leading-[0.8] text-bone">
          Séance
        </h2>
        <span class="display text-outline pointer-events-none absolute inset-0 translate-x-2 translate-y-2 -z-10 text-[clamp(5rem,23vw,16rem)] leading-[0.8] text-accent sm:translate-x-4 sm:translate-y-4" aria-hidden="true">
          Séance
        </span>
      </div>

      <!-- Bande de pellicule -->
      <div class="mx-auto mt-12 flex max-w-md flex-wrap items-center justify-center gap-2" aria-hidden="true">
        <span
          v-for="n in 20"
          :key="n"
          class="h-3 w-5 rounded-[2px]"
          :class="n % 4 === 0 ? 'bg-accent' : 'bg-bone/20'"
        ></span>
      </div>

      <p v-reveal="200" class="mx-auto mt-10 max-w-md text-lg text-bone-dim">
        Un film surprise choisi pour la vibe. Lumières baissées, plaid sur les genoux,
        popcorn servi et téléphones en mode avion.
      </p>
    </div>
  </section>
</template>
