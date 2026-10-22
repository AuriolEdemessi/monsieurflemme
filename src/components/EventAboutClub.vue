<script setup>
import { event } from '../data/event'
import CrownDoodle from './ui/CrownDoodle.vue'
</script>

<template>
  <section id="le-club" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p v-reveal class="label-mono flex items-center gap-3 text-bone-dim">
        <span class="text-blood">01</span> Le club
      </p>

      <h2 v-reveal="100" class="display mt-6 max-w-5xl text-[clamp(2.8rem,8vw,6.5rem)] text-bone">
        Même quand on a la
        <span class="relative inline-block font-marker normal-case text-blood">flemme</span>,
        on sait faire <span class="text-outline">la fête.</span>
      </h2>

      <div class="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <!-- Mascotte -->
        <div v-reveal class="relative lg:col-span-4">
          <div class="paper torn relative mx-auto aspect-[4/5] max-w-[300px] -rotate-3 p-6 shadow-2xl">
            <div class="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2"></div>
            <div class="grid h-full place-items-center bg-ink/[0.04]">
              <img src="/brand/mascotte.png" alt="La mascotte Monsieur Flemme, chapka sur la tête et air blasé" class="w-4/5" loading="lazy" />
            </div>
            <p class="absolute bottom-3 left-0 right-0 text-center font-marker text-lg text-ink">Monsieur Flemme</p>
          </div>
        </div>

        <!-- Texte -->
        <div class="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
          <p v-reveal class="text-xl leading-relaxed text-bone sm:text-2xl">
            Le Flemmard Club, c'est la communauté de <span class="font-semibold text-flemme">Monsieur Flemme</span> :
            des gens qui assument de prendre leur temps, et qui savent se retrouver quand ça compte.
          </p>
          <p v-reveal="100" class="mt-6 max-w-xl text-base leading-relaxed text-bone-dim sm:text-lg">
            Pour Halloween, on change d'ambiance. Une soirée entre frissons et beats, avec du cinéma,
            de la musique, des jeux et de la créativité. Petit comité, grosse énergie.
          </p>

          <ul v-reveal="200" class="mt-10 flex flex-wrap gap-2">
            <li
              v-for="pillar in event.pillars"
              :key="pillar"
              class="label-mono rounded-full border hairline px-4 py-2 text-bone"
            >
              {{ pillar }}
            </li>
          </ul>

          <div v-reveal="300" class="mt-12 flex items-center gap-4">
            <CrownDoodle class="h-8 w-10 shrink-0 text-blood" />
            <p class="font-marker text-2xl text-bone sm:text-3xl">{{ event.slogan }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
