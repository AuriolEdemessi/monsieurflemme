<script setup>
import { Film, MessageSquare, Utensils, Mic2, Clock, Sparkles } from 'lucide-vue-next'

const steps = [
  {
    step: '01',
    time: '18h00 - 20h00',
    title: 'PROJECTION DU FILM CULTE',
    subtitle: 'Immersion & Popcorn',
    icon: Film,
    accent: '#2B78C4',
    bg: '#EAF3FC',
    description: 'Installe-toi confortablement comme dans ton canapé. On lance un film marquant, culte et inspirant sélectionné spécialement pour la vibe de la communauté.',
    perks: ['Écran géant & son spatial', 'Sièges confortables', 'Popcorn & snacks inclus']
  },
  {
    step: '02',
    time: '20h00 - 20h45',
    title: 'LE DÉBRIEF SANS FILTRE',
    subtitle: 'Échanges & Débats chill',
    icon: MessageSquare,
    accent: '#5C241C',
    bg: '#F7EBE8',
    description: 'Fin du film, on allume les lumières tamisées ! Analyse des scènes marquantes, théories, débats passionnés et fous rires entre cinéphiles et flemmards.',
    perks: ['Tour de table participatif', 'Questions décalées', 'Ambiance bienveillante']
  },
  {
    step: '03',
    time: '20h45 - 21h30',
    title: 'LE GOÛTER GOURMAND & DRINKS',
    subtitle: 'Recharge d\'énergie & Douceurs',
    icon: Utensils,
    accent: '#D97706',
    bg: '#FEF3C7',
    description: 'Buffet gourmand généreux préparé avec soin : pâtisseries, snacks sucrés/salés locaux, jus frais pressés et mocktails artisanaux à volonté.',
    perks: ['Buffet sucré / salé', 'Boissons fraîches artisanales', 'Moments de networking']
  },
  {
    step: '04',
    time: '21h30 - 23h30',
    title: 'LA SESSION KARAOKÉ & VIBES',
    subtitle: 'Micro ouvert & Chansons légendaires',
    icon: Mic2,
    accent: '#7C3AED',
    bg: '#F3E8FF',
    description: 'Le moment de lâcher prise absolu ! Que tu chantes comme une diva ou comme une casserole sous la douche, ici zéro jugement, que de la bonne humeur.',
    perks: ['Catalogue de +50 000 titres', 'Duos et chants en groupe', 'Pack stickers offerts']
  }
]
</script>

<template>
  <section id="programme" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
    
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-3 sm:pb-4 border-b-2 border-black">
      <div>
        <span class="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#5C241C] uppercase flex items-center gap-1.5">
          <Sparkles class="w-3.5 h-3.5 text-[#5C241C]" />
          DÉROULÉ DE LA SOIRÉE
        </span>
        <h2 class="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black mt-1">
          LE PROGRAMME COMPLET
        </h2>
      </div>
      <p class="font-mono text-[10px] sm:text-xs text-black/60 mt-1 md:mt-0 uppercase tracking-widest">
        4 HEURES DE PURE DÉTENTE
      </p>
    </div>

    <!-- 4 Phases Timeline Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div
        v-for="s in steps"
        :key="s.step"
        class="bg-white border-2 border-black p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#000000] relative overflow-hidden"
      >
        <!-- Top bar of the card -->
        <div class="flex items-center justify-between border-b border-black/10 pb-3 mb-3 sm:pb-4 sm:mb-4">
          <span class="font-heading text-xl sm:text-2xl font-black text-black">
            PHASE {{ s.step }}
          </span>
          <span class="font-mono text-[10px] sm:text-[11px] font-bold px-2 py-0.5 bg-black text-white flex items-center gap-1">
            <Clock class="w-3 h-3" />
            {{ s.time }}
          </span>
        </div>

        <!-- Icon box -->
        <div 
          class="w-11 h-11 sm:w-14 sm:h-14 border-2 border-black flex items-center justify-center mb-3 sm:mb-5"
          :style="{ backgroundColor: s.bg }"
        >
          <component :is="s.icon" class="w-5 h-5 sm:w-7 sm:h-7" :style="{ color: s.accent }" />
        </div>

        <!-- Title and description -->
        <div class="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1">
          <h3 class="font-heading font-black text-base sm:text-lg lg:text-xl text-black leading-tight uppercase">
            {{ s.title }}
          </h3>
          <span class="block font-mono text-[10px] sm:text-[11px] font-bold text-[#5C241C] uppercase tracking-wider">
            // {{ s.subtitle }}
          </span>
          <p class="font-sans text-xs text-black/70 leading-relaxed pt-1">
            {{ s.description }}
          </p>
        </div>

        <!-- Mini perks checklist -->
        <div class="pt-3 border-t border-black/10 space-y-1 text-[10px] sm:text-[11px] font-mono text-black/80">
          <div v-for="p in s.perks" :key="p" class="flex items-center gap-1.5">
            <span class="text-[#2B78C4] font-bold">✓</span>
            <span>{{ p }}</span>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>
