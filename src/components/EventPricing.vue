<script setup>
import { Check, Ticket, Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-vue-next'

const emit = defineEmits(['select-formula'])

const soloPass = {
  id: 'solo',
  name: 'PASS SOLO FLEMMARD',
  price: 3000,
  priceDisplay: '3 000 FCFA',
  badge: 'TARIF UNIQUE TOUT COMPRIS',
  description: 'Ton pass complet pour l\'ensemble de l\'expérience du Flemmard Club (20h00 - Minuit).',
  features: [
    '1 Entrée complète pour la soirée (20h00 - Minuit)',
    'Projection privée du film culte sur écran géant acoustique',
    'Participation active au Débrief sans filtre & échanges spontanés',
    'Popcorn chaud & rafraîchissements inclus sans supplément',
    'Session Karaoké & micro ouvert pour chanter en choeur',
    'Stickers exclusifs & goodies Monsieur Flemme offerts'
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
  <section id="formules" class="relative bg-[#0E0E11] text-white border-y border-white/10 py-16 sm:py-24 monodrift-dots">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span class="inline-block font-mono text-xs text-[#52FF9D] uppercase tracking-widest mb-3">
          [ 02 // TARIFICATION TRANSPARENTE ]
        </span>
        <h2 class="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
          UN TARIF UNIQUE. TOUT COMPRIS.
        </h2>
        <p class="font-sans text-sm sm:text-base text-[#8E8E93] mt-3">
          Zéro surprise, zéro supplément. Tout est inclus du premier pop-corn jusqu'à la dernière note du karaoké.
        </p>
      </div>

      <!-- Monodrift Luxury Dark Pricing Card -->
      <div class="max-w-2xl mx-auto relative group">
        
        <!-- Glow Effect behind the card -->
        <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2B78C4]/20 via-[#52FF9D]/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>

        <div class="relative bg-[#141418] border border-white/15 rounded-3xl p-6 sm:p-12 overflow-hidden shadow-2xl">
          
          <!-- Top Row Badge -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 text-xs font-mono">
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[#52FF9D] font-bold tracking-wider uppercase">
              {{ soloPass.badge }}
            </span>
            <span class="text-[#A0A0A5] tracking-wider uppercase">
              30 PLACES SEULEMENT // ÉDITION #02
            </span>
          </div>

          <!-- Price Display -->
          <div class="pt-8 pb-6 border-b border-white/10">
            <span class="font-mono text-xs uppercase tracking-widest text-[#84848A] block mb-2">
              [ ACCÈS INTÉGRAL ]
            </span>
            <h3 class="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
              {{ soloPass.name }}
            </h3>

            <div class="mt-4 flex items-baseline gap-3">
              <span class="font-heading font-black text-5xl sm:text-6xl text-white tracking-tight">
                {{ soloPass.priceDisplay }}
              </span>
              <span class="font-mono text-xs sm:text-sm text-[#84848A] uppercase">/ PAR PERSONNE</span>
            </div>

            <p class="font-sans text-sm text-[#A0A0A5] mt-3 leading-relaxed">
              {{ soloPass.description }}
            </p>
          </div>

          <!-- Features List -->
          <div class="py-8 space-y-3.5">
            <span class="font-mono text-[11px] text-white/50 uppercase tracking-widest block mb-4">
              [ CE QUI EST INCLUS DANS TON PASS ]
            </span>
            <div 
              v-for="feat in soloPass.features" 
              :key="feat" 
              class="flex items-start gap-3 text-xs sm:text-sm font-mono text-[#D0D0D4]"
            >
              <div class="w-5 h-5 rounded-full bg-[#52FF9D]/10 border border-[#52FF9D]/30 flex items-center justify-center shrink-0 mt-0.5">
                <Check class="w-3 h-3 text-[#52FF9D]" />
              </div>
              <span>{{ feat }}</span>
            </div>
          </div>

          <!-- Action Button -->
          <div class="pt-6 border-t border-white/10">
            <button
              @click="chooseFormula"
              class="w-full py-4 sm:py-5 rounded-full bg-white text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#52FF9D] hover:shadow-[0_0_30px_rgba(82,255,157,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer transform active:scale-98"
            >
              <Ticket class="w-4 h-4 sm:w-5 sm:h-5" />
              <span>SÉLECTIONNER MON PASS MAINTENANT</span>
              <ArrowUpRight class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <!-- Group Hint -->
            <div class="mt-5 p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs font-mono text-[#84848A]">
              <ShieldCheck class="w-4 h-4 text-[#52FF9D] shrink-0" />
              <span>
                <strong>Tu viens en groupe ?</strong> Indique simplement le nombre de places (ex: 2, 3 ou plus) dans le formulaire ci-dessous.
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
