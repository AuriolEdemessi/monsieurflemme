<script setup>
import { Music, Users, Crown } from 'lucide-vue-next'

const reasons = [
  {
    icon: 'music',
    title: 'Une ambiance unique',
    description: 'Beats, frissons et bonne énergie toute la nuit.',
  },
  {
    icon: 'users',
    title: 'Ta communauté',
    description: 'Des rencontres, des talents et des esprits libres.',
  },
  {
    icon: 'mask',
    title: 'Une expérience immersive',
    description: 'Décor, animations et surprises spéciales Halloween.',
  },
  {
    icon: 'crown',
    title: 'En ton artiste préféré',
    description: 'Karaoké, performances, DJ sets et plus encore.',
  },
]
</script>

<template>
  <section id="pourquoi-venir" class="relative overflow-hidden bg-[#060608] py-20 lg:py-28 border-b border-white/5">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Title with Ghost Doodle (Exact de la maquette) -->
      <div class="flex items-center gap-4 mb-12 sm:mb-16">
        
        <!-- Ghost Doodle (SVG animé + image crop de la maquette) -->
        <div class="relative w-10 h-12 sm:w-12 sm:h-14 animate-float">
          <svg class="w-full h-full text-white fill-none stroke-current stroke-[2.5]" viewBox="0 0 40 48">
            <path d="M20 4 C10 4 6 12 6 22 L6 40 C9 38 12 40 15 38 C18 40 21 38 24 40 C27 38 30 40 34 38 L34 22 C34 12 30 4 20 4 Z" stroke-linejoin="round" />
            <circle cx="14" cy="18" r="2.5" class="fill-black stroke-black" />
            <circle cx="26" cy="18" r="2.5" class="fill-black stroke-black" />
            <path d="M18 26 Q20 30 22 26" stroke-linecap="round" />
          </svg>
        </div>

        <h2 class="font-brush text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
          POURQUOI <span class="text-[#FF1E27] text-glow-sm">VENIR ?</span>
        </h2>
      </div>

      <!-- 4 Cards Grid (Conforme à la maquette) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <div
          v-for="(card, index) in reasons"
          :key="index"
          class="card-halloween p-6 sm:p-7 flex flex-col justify-between group cursor-default"
        >
          <!-- Card Icon -->
          <div class="w-12 h-12 rounded-xl bg-red-950/30 border border-red-500/20 flex items-center justify-center mb-6 group-hover:border-red-500/60 group-hover:bg-red-900/40 transition-colors">
            
            <Music v-if="card.icon === 'music'" class="w-6 h-6 text-[#FF1E27]" />
            <Users v-else-if="card.icon === 'users'" class="w-6 h-6 text-[#FF1E27]" />
            <Crown v-else-if="card.icon === 'crown'" class="w-6 h-6 text-[#FF1E27]" />
            
            <!-- Masque Halloween stylisé pour 'mask' -->
            <svg v-else class="w-6 h-6 text-[#FF1E27] stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
              <path d="M2 10s3-4 10-4 10 4 10 4-2 7-10 7-10-7-10-7z" />
              <circle cx="8" cy="10" r="2" class="fill-[#FF1E27]" />
              <circle cx="16" cy="10" r="2" class="fill-[#FF1E27]" />
            </svg>
          </div>

          <!-- Card Content -->
          <div class="space-y-2">
            <h3 class="font-sans font-bold text-lg sm:text-xl text-white group-hover:text-[#FF1E27] transition-colors">
              {{ card.title }}
            </h3>
            <p class="font-sans text-sm text-neutral-400 leading-relaxed">
              {{ card.description }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
