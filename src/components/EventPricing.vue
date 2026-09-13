<script setup>
import { Check, Ticket, Sparkles, ArrowRight } from 'lucide-vue-next'

const emit = defineEmits(['select-formula'])

const soloPass = {
  id: 'solo',
  name: 'PASS SOLO FLEMMARD',
  price: 3000,
  priceDisplay: '3 000 FCFA',
  badge: 'TARIF UNIQUE // SESSION 01',
  description: 'Ton pass complet tout-en-un pour la soirée Flemmard Club.',
  features: [
    '1 Entrée complète pour la soirée (20h00 - Minuit)',
    'Accès à la projection du film culte sur écran géant',
    'Participation au Débrief sans filtre & échanges',
    'Popcorn savoureux & rafraîchissements inclus',
    'Accès au micro pour la session Karaoké & Vibes',
    'Pack de stickers exclusifs Monsieur Flemme offerts'
  ]
}

function chooseFormula() {
  emit('select-formula', soloPass)
  const el = document.getElementById('inscription')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="formules" class="bg-[#F4EBD9] border-y-2 border-black py-12 sm:py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-2 sm:mb-3">
          <Sparkles class="w-3.5 h-3.5 text-amber-300" />
          <span>TARIF UNIQUE & TRANSPARENT</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black mt-1">
          LE PASS SOIRÉE
        </h2>
        <p class="font-sans text-xs sm:text-sm text-black/70 mt-2 px-2">
          Un pass unique tout compris pour profiter pleinement de la soirée sans frais cachés.
        </p>
      </div>

      <!-- Single Highlighted Pricing Card -->
      <div class="max-w-xl mx-auto bg-white border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#5C241C] sm:shadow-[12px_12px_0px_0px_#5C241C] relative">
        
        <!-- Badge -->
        <div class="flex items-center justify-between border-b-2 border-black/10 pb-4 mb-5">
          <span class="inline-block font-mono text-[10px] sm:text-xs font-black uppercase px-3 py-1 bg-black text-white border border-black">
            {{ soloPass.badge }}
          </span>
          <span class="font-mono text-xs font-bold text-[#5C241C] uppercase tracking-wider">
            30 PLACES SEULEMENT
          </span>
        </div>

        <!-- Formula Name & Price -->
        <div class="border-b-2 border-black/10 pb-5 mb-6">
          <h3 class="font-heading font-black text-2xl sm:text-3xl text-black uppercase">
            {{ soloPass.name }}
          </h3>
          <div class="mt-3 flex items-baseline gap-2">
            <span class="font-heading font-black text-4xl sm:text-5xl text-[#2B78C4]">
              {{ soloPass.priceDisplay }}
            </span>
            <span class="font-mono text-xs text-black/60 font-bold uppercase">/ PLACE</span>
          </div>
          <p class="font-sans text-xs sm:text-sm text-black/75 mt-2">
            {{ soloPass.description }}
          </p>
        </div>

        <!-- Features List -->
        <ul class="space-y-3 mb-8 text-xs sm:text-sm font-mono text-black/85">
          <li v-for="feat in soloPass.features" :key="feat" class="flex items-start gap-2.5">
            <Check class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{{ feat }}</span>
          </li>
        </ul>

        <!-- Action Button -->
        <button
          @click="chooseFormula"
          class="w-full py-4 sm:py-5 bg-black hover:bg-[#5C241C] text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-3 border-2 border-black cursor-pointer shadow-[4px_4px_0px_0px_#2B78C4] active:scale-98"
        >
          <Ticket class="w-4 h-4 sm:w-5 sm:h-5" />
          <span>PRENDRE MA PLACE MAINTENANT</span>
          <ArrowRight class="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <!-- Notice for Friends -->
        <p class="text-center font-mono text-[10px] sm:text-xs text-black/60 mt-4">
          💡 <strong>Tu viens en groupe ou entre ami(e)s ?</strong> Chacun doit payer son pass solo (sélectionne le nombre de places dans le formulaire ci-dessous).
        </p>

      </div>

    </div>
  </section>
</template>
