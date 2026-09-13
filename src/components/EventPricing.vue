<script setup>
import { Check, Star, Zap } from 'lucide-vue-next'

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
      'Économise 1 000 FCFA par rapport au tarif solo',
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
  <section id="formules" class="bg-[#F4EBD9] border-y-2 border-black py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="font-mono text-xs font-bold tracking-widest text-[#5C241C] uppercase">
          // TARIFS TRANSPARENTS
        </span>
        <h2 class="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-black mt-2">
          CHOISIS TA FORMULE
        </h2>
        <p class="font-sans text-xs sm:text-sm text-black/70 mt-2">
          Toutes nos formules incluent le film, les discussions, le buffet goûter et le karaoké.
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div
          v-for="f in formulas"
          :key="f.id"
          class="bg-white border-2 border-black p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative"
          :class="f.popular ? 'shadow-[10px_10px_0px_0px_#2B78C4] -translate-y-2 border-black ring-2 ring-black' : 'shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-1'"
        >
          <!-- Badge -->
          <div class="mb-4">
            <span
              class="inline-block font-mono text-[10px] font-black uppercase px-3 py-1 border border-black"
              :class="f.popular ? 'bg-black text-white' : 'bg-[#F8F7F5] text-black'"
            >
              {{ f.badge }}
            </span>
          </div>

          <!-- Formula Name & Price -->
          <div class="border-b-2 border-black/10 pb-6 mb-6">
            <h3 class="font-heading font-black text-xl sm:text-2xl text-black uppercase">
              {{ f.name }}
            </h3>
            <div class="mt-4 flex items-baseline">
              <span class="font-heading font-black text-3xl sm:text-4xl text-black">
                {{ f.priceDisplay }}
              </span>
            </div>
            <p class="font-sans text-xs text-black/70 mt-2">
              {{ f.description }}
            </p>
          </div>

          <!-- Features List -->
          <ul class="space-y-3 mb-8 flex-1 text-xs font-mono text-black/80">
            <li v-for="feat in f.features" :key="feat" class="flex items-start gap-2">
              <Check class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{{ feat }}</span>
            </li>
          </ul>

          <!-- Action Button -->
          <button
            @click="chooseFormula(f)"
            class="w-full py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 border-2 border-black cursor-pointer"
            :class="f.popular ? 'bg-black text-white hover:bg-[#5C241C]' : 'bg-[#F8F7F5] text-black hover:bg-black hover:text-white'"
          >
            <span>CHOISIR CETTE PLACE</span>
          </button>

        </div>
      </div>

    </div>
  </section>
</template>
