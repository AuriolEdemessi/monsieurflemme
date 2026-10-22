<script setup>
import { ArrowRight, Navigation } from 'lucide-vue-next'
import { event, formatPrice } from '../data/event'

const emit = defineEmits(['openTicket'])

const rows = [
  { label: 'Date', value: event.dateLong },
  { label: 'Heure', value: event.time },
  { label: 'Lieu', value: `${event.venue}, ${event.area}` },
  { label: 'Prix', value: `${formatPrice(event.price)} / pers.` },
]

// Faux code-barres, purement décoratif
const barcode = Array.from({ length: 34 }, (_, i) => ((i * 7) % 5) + 1)
</script>

<template>
  <section id="infos" class="relative border-t hairline py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p v-reveal class="label-mono flex items-center gap-3 text-bone-dim">
        <span class="text-blood">05</span> Infos pratiques
      </p>
      <h2 v-reveal="100" class="display mt-6 text-[clamp(3rem,9vw,7rem)] text-bone">
        Ton <span class="text-blood">ticket</span>
      </h2>

      <!-- Billet -->
      <div v-reveal="150" class="mt-14 flex flex-col drop-shadow-[0_30px_60px_rgb(0_0_0/0.6)] md:flex-row">
        <div class="paper relative flex-1 rounded-t-2xl p-7 sm:p-10 md:rounded-l-2xl md:rounded-tr-none">
          <div class="flex items-center justify-between gap-4">
            <img src="/brand/logo-flemmard-club.png" alt="Flemmard Club" class="h-10 w-auto -rotate-3" loading="lazy" />
            <span class="label-mono text-ink/60">Admit one</span>
          </div>

          <p class="display mt-8 text-[clamp(2.6rem,7vw,4.5rem)] text-ink">
            Halloween <span class="font-marker text-[0.6em] normal-case text-blood">Special Edition</span>
          </p>

          <dl class="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/15 pt-8 lg:grid-cols-4">
            <div v-for="row in rows" :key="row.label">
              <dt class="label-mono text-ink/50">{{ row.label }}</dt>
              <dd class="mt-1.5 font-bold text-ink">{{ row.value }}</dd>
            </div>
          </dl>
        </div>

        <!-- Perforation -->
        <div class="relative h-0 md:h-auto md:w-0" aria-hidden="true">
          <div class="absolute inset-x-6 top-0 border-t-2 border-dashed border-ink/25 md:inset-x-auto md:inset-y-6 md:left-0 md:border-l-2 md:border-t-0"></div>
          <div class="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-ink md:-left-3 md:-top-3"></div>
          <div class="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-ink md:-bottom-3 md:-left-3 md:right-auto md:top-auto"></div>
        </div>

        <!-- Talon -->
        <div class="paper flex flex-col justify-between gap-6 rounded-b-2xl p-7 sm:p-10 md:w-72 md:rounded-r-2xl md:rounded-bl-none">
          <div>
            <p class="label-mono text-ink/50">Jauge</p>
            <p class="display mt-1 text-7xl text-blood">{{ event.capacity }}</p>
            <p class="font-bold text-ink">places, pas une de plus.</p>
          </div>
          <div class="flex h-12 items-stretch gap-[3px]" aria-hidden="true">
            <span v-for="(w, i) in barcode" :key="i" class="bg-ink" :style="{ width: `${w}px` }"></span>
          </div>
        </div>
      </div>

      <div v-reveal="200" class="mt-10 flex flex-col gap-4 sm:flex-row">
        <button @click="emit('openTicket')" class="btn-primary">
          Réserver · {{ formatPrice(event.price) }}
          <ArrowRight class="h-4 w-4" />
        </button>
        <a :href="event.mapsUrl" target="_blank" rel="noopener" class="btn-ghost">
          <Navigation class="h-4 w-4" />
          Itinéraire vers {{ event.venue }}
        </a>
      </div>
    </div>
  </section>
</template>
