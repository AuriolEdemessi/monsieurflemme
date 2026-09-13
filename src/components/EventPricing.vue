<script setup>
import { Check } from 'lucide-vue-next'

const emit = defineEmits(['select-formula'])

const formulas = [
  {
    id: 'solo',
    name: 'PASS SOLO FLEMMARD',
    price: 5000,
    priceDisplay: '5 000 FCFA',
    badge: 'LE CLASSIQUE',
    popular: false,
    description: 'Idéal pour venir chiller en solo et rencontrer la communauté.',
    features: [
      '1 Entrée complète pour l\'événement',
      'Accès à la projection du film & débat',
      'Buffet Goûter & Boissons fraîches inclus',
      'Accès micro illimité pour le Karaoké',
      'Pack de 2 stickers Monsieur Flemme'
    ]
  },
  {
    id: 'duo',
    name: 'PASS DUO CHILL',
    price: 9000,
    priceDisplay: '9 000 FCFA',
    badge: 'RECOMMANDÉ',
    popular: true,
    description: 'Viens accompagné(e) de ton/ta pote ou partenaire pour un max de fun.',
    features: [
      '2 Entrées complètes pour l\'événement',
      'Accès complet Film, Débrief & Karaoké',
      'Buffet Goûter & Drinks pour 2 personnes',
      'Chant en duo garanti sur scène',
      'Économise 1 000 FCFA par rapport au solo',
      'Pack de 4 stickers exclusifs'
    ]
  },
  {
    id: 'vip',
    name: 'PASS VIP FLEMMARD CLUB',
    price: 15000,
    priceDisplay: '15 000 FCFA',
    badge: 'EXPÉRIENCE TOTALE',
    popular: false,
    description: 'L\'expérience ultime avec le merch officiel Monsieur Flemme inclus !',
    features: [
      '1 Entrée VIP avec places réservées devant',
      '1 T-shirt officiel Monsieur Flemme offert',
      'Goûter VIP avec coupe de bienvenue',
      'Passage prioritaire pour le Karaoké',
      'Accès direct aux futurs événements 2026'
    ]
  }
]

function chooseFormula(f) {
  emit('select-formula', f)
  const el = document.getElementById('inscription')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="formules" class="bg-[#F4EBD9] border-y-2 border-black py-12 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
        <span class="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#5C241C] uppercase">
          // TARIFS TRANSPARENTS
        </span>
        <h2 class="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black mt-1 sm:mt-2">
          CHOISIS TA FORMULE
        </h2>
        <p class="font-sans text-xs sm:text-sm text-black/70 mt-1 sm:mt-2 px-2">
          Toutes nos formules incluent le film, les discussions, le buffet goûter et le karaoké.
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        <div
          v-for="f in formulas"
          :key="f.id"
          class="bg-white border-2 border-black p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 relative"
          :class="f.popular ? 'shadow-[6px_6px_0px_0px_#2B78C4] sm:shadow-[10px_10px_0px_0px_#2B78C4] md:-translate-y-2 ring-2 ring-black' : 'shadow-[4px_4px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000]'"
        >
          <!-- Badge -->
          <div class="mb-3 sm:mb-4">
            <span
              class="inline-block font-mono text-[9px] sm:text-[10px] font-black uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 border border-black"
              :class="f.popular ? 'bg-black text-white' : 'bg-[#F8F7F5] text-black'"
            >
              {{ f.badge }}
            </span>
          </div>

          <!-- Formula Name & Price -->
          <div class="border-b-2 border-black/10 pb-4 sm:pb-6 mb-4 sm:mb-6">
            <h3 class="font-heading font-black text-lg sm:text-2xl text-black uppercase">
              {{ f.name }}
            </h3>
            <div class="mt-2 sm:mt-4 flex items-baseline">
              <span class="font-heading font-black text-2xl sm:text-4xl text-black">
                {{ f.priceDisplay }}
              </span>
            </div>
            <p class="font-sans text-xs text-black/70 mt-1 sm:mt-2">
              {{ f.description }}
            </p>
          </div>

          <!-- Features List -->
          <ul class="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1 text-xs font-mono text-black/80">
            <li v-for="feat in f.features" :key="feat" class="flex items-start gap-2">
              <Check class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{{ feat }}</span>
            </li>
          </ul>

          <!-- Action Button -->
          <button
            @click="chooseFormula(f)"
            class="w-full py-3.5 sm:py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 border-2 border-black cursor-pointer active:scale-95"
            :class="f.popular ? 'bg-black text-white hover:bg-[#5C241C]' : 'bg-[#F8F7F5] text-black hover:bg-black hover:text-white'"
          >
            <span>CHOISIR CETTE PLACE</span>
          </button>

        </div>
      </div>

    </div>
  </section>
</template>
