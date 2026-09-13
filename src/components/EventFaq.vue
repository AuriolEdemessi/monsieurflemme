<script setup>
import { ref } from 'vue'
import { ChevronDown, HelpCircle } from 'lucide-vue-next'

const faqs = ref([
  {
    q: 'Comment finaliser le paiement de ma place ?',
    a: 'Dès que vous remplissez le formulaire ci-dessus, vous êtes automatiquement redirigé(e) vers notre discussion WhatsApp avec le récapitulatif pré-rempli. Vous pourrez payer via Mobile Money (MTN MoMo, Moov Money, Celtiis Cash) ou en espèces. Votre pass digital avec QR code vous sera envoyé dès réception du paiement.',
    open: true
  },
  {
    q: 'Quels sont les horaires précis de l\'événement ?',
    a: 'L\'accueil des participants commence dès 17h30. La projection débute à 18h00, suivie du débrief (20h00), du goûter gourmand (20h45) et de la session karaoké (jusqu\'à 23h30).',
    open: false
  },
  {
    q: 'Le goûter et les boissons sont-ils vraiment inclus ?',
    a: 'Oui, à 100 % ! Toutes les formules incluent l\'accès au buffet sucré et salé ainsi qu\'aux boissons fraîches et mocktails préparés pour l\'occasion.',
    open: false
  },
  {
    q: 'Puis-je venir avec des ami(e)s ?',
    a: 'Absolument ! Vous pouvez choisir le Pass Duo (avec réduction) ou sélectionner plusieurs pass dans le champ quantité du formulaire.',
    open: false
  },
  {
    q: 'Je ne sais pas chanter, puis-je quand même venir au karaoké ?',
    a: 'C\'est l\'esprit même du Flemmard Club ! Aucun niveau requis, le karaoké est une session 100% fun, rires et lâcher-prise en groupe.',
    open: false
  },
  {
    q: 'Que se passe-t-il en cas d\'empêchement ?',
    a: 'Si vous avez un imprévu, prévenez-nous sur WhatsApp au moins 24h avant l\'événement et nous pourrons transférer votre place à un ami ou vous rembourser.',
    open: false
  }
])

function toggleFaq(index) {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <section id="faq" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
    
    <!-- Header -->
    <div class="text-center mb-8 sm:mb-12">
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-2">
        <HelpCircle class="w-3.5 h-3.5 text-[#2B78C4]" />
        <span>QUESTIONS FRÉQUENTES</span>
      </div>
      <h2 class="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black">
        TOUT CE QUE TU DOIS SAVOIR
      </h2>
    </div>

    <!-- Accordion list -->
    <div class="space-y-3 sm:space-y-4">
      <div
        v-for="(item, index) in faqs"
        :key="item.q"
        class="bg-white border-2 border-black transition-all"
        :class="item.open ? 'shadow-[4px_4px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000]' : 'hover:border-neutral-700'"
      >
        <button
          @click="toggleFaq(index)"
          class="w-full p-4 sm:p-5 text-left flex items-center justify-between font-heading font-bold text-sm sm:text-lg text-black uppercase focus:outline-none cursor-pointer"
        >
          <span class="pr-2">{{ item.q }}</span>
          <ChevronDown
            class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 shrink-0"
            :class="{ 'rotate-180 text-[#2B78C4]': item.open }"
          />
        </button>

        <div
          v-if="item.open"
          class="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm font-sans text-black/75 border-t border-black/10 leading-relaxed"
        >
          {{ item.a }}
        </div>
      </div>
    </div>

  </section>
</template>
