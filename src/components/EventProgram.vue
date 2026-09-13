<script setup>
import { Film, MessageSquare, Mic2, Clock, Sparkles } from 'lucide-vue-next'

const steps = [
  {
    step: '01',
    time: '20h00 - 21h30',
    title: 'PROJECTION DU FILM CULTE',
    subtitle: 'Immersion & Popcorn',
    icon: Film,
    accent: '#2B78C4',
    bg: '#EAF3FC',
    description: 'Installe-toi confortablement comme dans ton salon. On lance un film marquant et captivant, spécialement sélectionné pour stimuler les esprits et détendre les cœurs.',
    perks: ['Écran géant & acoustique soignée', 'Popcorn & boissons inclus', 'Ambiance cosy & tamisée']
  },
  {
    step: '02',
    time: '21h30 - 22h15',
    title: 'LE DÉBRIEF SANS FILTRE',
    subtitle: 'Échanges & Débats chill',
    icon: MessageSquare,
    accent: '#5C241C',
    bg: '#F7EBE8',
    description: 'Fin du film, on allume les lumières ! Analyse des moments forts, réflexions inspirantes, théories passionnées et fous rires entre cinéphiles et flemmards.',
    perks: ['Discussion ouverte à tous', 'Questions et anecdotes décalées', 'Zéro prise de tête']
  },
  {
    step: '03',
    time: '22h15 - 00h00',
    title: 'LA SESSION KARAOKÉ & VIBES',
    subtitle: 'Micro ouvert & Tubes cultes',
    icon: Mic2,
    accent: '#7C3AED',
    bg: '#F3E8FF',
    description: 'Le moment de lâcher prise absolu ! Que tu chantes juste ou faux sous la douche, ici zéro jugement : on chante en choeur nos sons préférés jusqu\'à minuit.',
    perks: ['Tubes Afrobeats, Pop, Classiques', 'Chants en groupe & duos', 'Stickers Monsieur Flemme offerts']
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
          LE PROGRAMME (3 PHASES)
        </h2>
      </div>
      <p class="font-mono text-[10px] sm:text-xs text-black/60 mt-1 md:mt-0 uppercase tracking-widest">
        DÈS 20H00 • DÉTENTE & GOOD VIBES
      </p>
    </div>

    <!-- 3 Phases Timeline Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      <div
        v-for="s in steps"
        :key="s.step"
        class="bg-white border-2 border-black p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#000000] relative overflow-hidden group"
      >
        <!-- Top bar of the card -->
        <div class="flex items-center justify-between border-b border-black/10 pb-3 mb-4 sm:pb-4 sm:mb-5">
          <span class="font-heading text-xl sm:text-2xl font-black text-black">
            PHASE {{ s.step }}
          </span>
          <span class="font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-1 bg-black text-white flex items-center gap-1.5">
            <Clock class="w-3 h-3" />
            {{ s.time }}
          </span>
        </div>

        <!-- Icon box -->
        <div 
          class="w-12 h-12 sm:w-16 sm:h-16 border-2 border-black flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-6 transition-transform"
          :style="{ backgroundColor: s.bg }"
        >
          <component :is="s.icon" class="w-6 h-6 sm:w-8 sm:h-8" :style="{ color: s.accent }" />
        </div>

        <!-- Title and description -->
        <div class="space-y-2 mb-6 flex-1">
          <h3 class="font-heading font-black text-lg sm:text-xl lg:text-2xl text-black leading-tight uppercase">
            {{ s.title }}
          </h3>
          <span class="block font-mono text-[10px] sm:text-[11px] font-bold text-[#5C241C] uppercase tracking-wider">
            // {{ s.subtitle }}
          </span>
          <p class="font-sans text-xs sm:text-sm text-black/75 leading-relaxed pt-1">
            {{ s.description }}
          </p>
        </div>

        <!-- Mini perks checklist -->
        <div class="pt-4 border-t border-black/10 space-y-1.5 text-xs font-mono text-black/80">
          <div v-for="p in s.perks" :key="p" class="flex items-center gap-2">
            <span class="text-[#2B78C4] font-bold">✓</span>
            <span>{{ p }}</span>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>
