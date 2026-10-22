<script setup>
import { ArrowRight, ArrowDown } from 'lucide-vue-next'
import { event, formatPrice } from '../data/event'
import { useCountdown, pad } from '../composables/useCountdown'
import CrownDoodle from './ui/CrownDoodle.vue'
import BrushStroke from './ui/BrushStroke.vue'
import Mascot3D from './ui/Mascot3D.vue'

const emit = defineEmits(['openTicket'])

const { parts, isOver } = useCountdown(event.startsAt)

const facts = [
  { label: 'Quand', value: event.dateShort, sub: event.time },
  { label: 'Où', value: event.area, sub: event.venue },
  { label: 'Ticket', value: formatPrice(event.price), sub: `${event.capacity} places` },
]
</script>

<template>
  <section id="hero" class="relative overflow-hidden pt-24 pb-16 sm:pt-32 lg:pb-28">
    <!-- Lueur rouge -->
    <div class="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] rounded-full bg-blood/25 blur-[140px]"></div>
    <div class="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blood-deep/30 blur-[120px]"></div>

    <div class="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:gap-4 lg:px-8">
      <!-- Texte -->
      <div class="relative z-10 order-2 lg:order-1 lg:col-span-7">
        <p class="label-mono flex items-center gap-3 text-bone-dim">
          <span class="inline-block h-px w-8 bg-blood"></span>
          {{ event.club }} présente
        </p>

        <h1 class="mt-5 select-none">
          <span class="display block text-[clamp(3.2rem,16.5vw,11.5rem)] text-bone">
            Hallo<span class="text-blood animate-flicker">w</span>een
          </span>
          <span class="relative -mt-2 ml-1 inline-block -rotate-3 sm:-mt-4">
            <span class="font-marker text-[clamp(2rem,6vw,3.6rem)] leading-none text-blood">{{ event.subtitle }}</span>
            <BrushStroke class="absolute -bottom-3 left-0 h-3 w-full text-bone/90" />
          </span>
        </h1>

        <p class="mt-8 max-w-md text-lg text-bone-dim sm:text-xl">
          {{ event.tagline }} Film d'horreur, karaoké, jeux et
          <span class="font-semibold text-bone">music by {{ event.dj }}</span>.
        </p>

        <!-- Infos clés -->
        <dl class="mt-8 grid max-w-xl grid-cols-1 border-y hairline sm:grid-cols-3">
          <div
            v-for="(fact, i) in facts"
            :key="fact.label"
            :class="[
              'flex items-baseline gap-4 py-3 sm:block sm:py-4',
              i > 0 ? 'border-t hairline sm:border-l sm:border-t-0 sm:pl-5' : 'sm:pr-3',
            ]"
          >
            <dt class="label-mono w-16 shrink-0 text-blood sm:w-auto">{{ fact.label }}</dt>
            <dd class="display text-xl text-bone sm:mt-2 sm:text-2xl">{{ fact.value }}</dd>
            <dd class="ml-auto text-sm text-bone-dim sm:ml-0 sm:mt-1">{{ fact.sub }}</dd>
          </div>
        </dl>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button @click="emit('openTicket')" class="btn-primary">
            Réserver ma place
            <ArrowRight class="h-4 w-4" />
          </button>
          <a href="#programme" class="btn-ghost">
            Voir le programme
            <ArrowDown class="h-4 w-4" />
          </a>
        </div>

        <!-- Compte à rebours -->
        <div class="mt-8 flex items-center gap-4" aria-live="off">
          <span class="relative flex h-2.5 w-2.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blood opacity-70"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-blood"></span>
          </span>
          <p v-if="!isOver" class="label-mono text-bone-dim">
            J-{{ parts.days }}
            <span class="ml-2 tabular-nums text-bone">{{ pad(parts.hours) }}:{{ pad(parts.minutes) }}:{{ pad(parts.seconds) }}</span>
          </p>
          <p v-else class="label-mono text-bone">C'est parti. On se voit au club.</p>
        </div>
      </div>

      <!-- Visuel -->
      <div class="relative order-1 mx-auto w-full max-w-[300px] sm:max-w-[440px] lg:order-2 lg:col-span-5 lg:max-w-none lg:-mr-6 lg:scale-110 xl:-mr-12 xl:scale-[1.18]">
        <div class="relative">
          <Mascot3D
            :src="event.heroVisual"
            alt="La mascotte du Flemmard Club en citrouille, chapka sur la tête, sucette lumineuse à la main"
          />

          <!-- Note manuscrite -->
          <div class="absolute -top-2 right-0 hidden max-w-[11rem] rotate-6 text-right sm:block">
            <CrownDoodle class="ml-auto h-6 w-8 text-bone" />
            <p class="mt-1 font-marker text-sm leading-snug text-bone">{{ event.motto }}</p>
          </div>

          <!-- Sticker dress code -->
          <div
            class="animate-float absolute -bottom-4 -left-2 z-10 grid h-28 w-28 place-items-center sm:-left-4 sm:h-36 sm:w-36"
            style="--r: -10deg"
          >
            <svg viewBox="0 0 100 100" class="absolute inset-0 h-full w-full text-blood" aria-hidden="true">
              <path fill="currentColor" d="M50 3c9 0 14 6 22 8s16 4 20 12 0 15 3 23 4 17-1 24-15 9-21 15-11 12-21 12-15-5-23-8-17-3-22-11-1-16-4-24-6-17-2-24 13-8 20-14S41 3 50 3Z" />
            </svg>
            <p class="relative px-4 text-center font-marker text-xs leading-tight text-ink sm:px-5 sm:text-base">
              Viens en ton artiste préféré !
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
