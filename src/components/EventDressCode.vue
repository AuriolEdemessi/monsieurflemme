<script setup>
import { ArrowRight } from 'lucide-vue-next'
import BrushStroke from './ui/BrushStroke.vue'

const emit = defineEmits(['openTicket'])

const steps = [
  { title: 'Choisis ton artiste', text: 'Rappeur, chanteuse, icône pop, légende afro… celui ou celle qui te ressemble.' },
  { title: 'Passe-le en mode Halloween', text: 'Zombie, vampire, squelette : garde le style, ajoute les frissons.' },
  { title: 'Finis sur place', text: "L'atelier maquillage est là pour la touche finale. Pas d'excuse." },
]
</script>

<template>
  <section id="dress-code" class="relative py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
      <div class="lg:col-span-5">
        <p v-reveal class="label-mono flex items-center gap-3 text-bone-dim">
          <span class="text-blood">04</span> Dress code
        </p>
        <h2 v-reveal="100" class="mt-6">
          <span class="display block text-[clamp(3rem,8vw,6rem)] text-bone">Viens en ton</span>
          <span class="relative inline-block -rotate-2">
            <span class="font-marker text-[clamp(2.6rem,7vw,5rem)] leading-none text-blood">artiste préféré</span>
            <BrushStroke class="absolute -bottom-2 left-0 h-3 w-full text-bone/80" />
          </span>
        </h2>
        <p v-reveal="200" class="mt-10 max-w-md text-lg text-bone-dim">
          Le déguisement fait partie de la soirée. Tu peux même nous dire en qui tu viens au moment de réserver.
        </p>
        <button v-reveal="300" @click="emit('openTicket')" class="btn-primary mt-10">
          Je réserve et je me prépare
          <ArrowRight class="h-4 w-4" />
        </button>
      </div>

      <ol class="space-y-4 lg:col-span-6 lg:col-start-7">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          v-reveal="i * 120"
          :class="[
            'paper torn relative p-7 shadow-xl transition-transform duration-300 hover:rotate-0 sm:p-9',
            i % 2 ? 'rotate-1 lg:ml-10' : '-rotate-1',
          ]"
        >
          <div class="flex items-start gap-6">
            <span class="display text-5xl text-blood">{{ i + 1 }}</span>
            <div>
              <h3 class="display text-2xl text-ink sm:text-3xl">{{ step.title }}</h3>
              <p class="mt-2 text-ink/70">{{ step.text }}</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
