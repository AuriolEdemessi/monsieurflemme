<script setup>
import { ArrowRight, CheckCircle2, Award } from 'lucide-vue-next'
</script>

<template>
  <section id="flemmard-club" class="relative bg-[#5C241C] text-[#F8F7F5] py-16 md:py-24 overflow-hidden border-y-2 border-black">
    
    <!-- Background grid decoration -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Mascot & Badge Sticker display -->
        <div class="lg:col-span-5 flex justify-center items-center relative">
          <div class="relative w-72 sm:w-80 md:w-96 aspect-square bg-[#874418] border-2 border-white/30 p-8 flex items-center justify-center shadow-[10px_10px_0px_0px_#000000]">
            <img 
              src="/brand/Flems.png" 
              alt="Flem's Mascot" 
              class="w-full h-full object-contain animate-float"
            />

            <!-- Giant Badge Sticker -->
            <div class="absolute -bottom-6 -right-6 w-44 md:w-48 transform rotate-6 drop-shadow-2xl">
              <img 
                src="/brand/Flemme12.png" 
                alt="Flemmard Club Badge" 
                class="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <!-- Right: Manifesto & Club Perks -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 bg-black/40 px-3 py-1 border border-white/20 text-xs font-mono font-bold tracking-widest uppercase">
            <Award class="w-4 h-4 text-amber-300" />
            <span>COMMUNAUTÉ OFFICIELLE // PARIS</span>
          </div>

          <h2 class="font-heading font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none text-white">
            REJOINS LE <br />
            <span class="text-amber-200">FLEMMARD CLUB</span>
          </h2>

          <p class="font-sans text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
            La flemme n'est pas un défaut, c'est un mode de vie maîtrisé. Le Flemmard Club rassemble ceux qui privilégient le confort ultime, les coupes amples impeccables et l'authenticité pure du streetwear.
          </p>

          <!-- Club Benefits -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="flex items-start gap-3 bg-black/30 p-4 border border-white/10">
              <CheckCircle2 class="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <h4 class="font-heading font-bold text-sm text-white">Accès Prioritaire</h4>
                <p class="font-mono text-xs text-white/70 mt-0.5">Accède aux futurs drops 24h avant tout le monde.</p>
              </div>
            </div>

            <div class="flex items-start gap-3 bg-black/30 p-4 border border-white/10">
              <CheckCircle2 class="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <h4 class="font-heading font-bold text-sm text-white">Stickers Offerts</h4>
                <p class="font-mono text-xs text-white/70 mt-0.5">Pack exclusif de 4 stickers dans chaque commande.</p>
              </div>
            </div>
          </div>

          <!-- Join CTA Button -->
          <div class="pt-4 flex items-center gap-4">
            <a
              href="#nouveautes"
              class="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-amber-200 transition-colors shadow-[4px_4px_0px_0px_#000000]"
            >
              <span>EXPLORER LES NOUVEAUTÉS</span>
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
