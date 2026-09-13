<script setup>
import { ArrowDownRight, Sparkles, ShieldCheck } from 'lucide-vue-next'

const emit = defineEmits(['explore'])
</script>

<template>
  <section class="relative overflow-hidden bg-[#F4EBD9] border-b border-black">
    <!-- Background grid streetwear pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: Editorial Typography & CTAs -->
        <div class="lg:col-span-7 flex flex-col items-start space-y-6">
          
          <!-- Streetwear Meta Badges -->
          <div class="flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[11px] font-mono uppercase tracking-widest font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              DROP 01 EN LIGNE
            </span>
            <span class="inline-flex items-center gap-1 px-3 py-1 bg-[#5C241C] text-white text-[11px] font-mono uppercase tracking-widest font-bold">
              COTTON 450 GSM
            </span>
            <span class="inline-flex items-center gap-1 px-3 py-1 border border-black text-black text-[11px] font-mono uppercase tracking-widest font-bold bg-white/60">
              ÉDITION PARIS
            </span>
          </div>

          <!-- Giant Streetwear Title -->
          <div class="space-y-1">
            <h1 class="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.88] text-black">
              L'ART DE LA <br />
              <span class="text-[#2B78C4] italic underline decoration-black decoration-wavy decoration-2">FLEMME</span> AVEC STYLE.
            </h1>
          </div>

          <!-- Description / Brand Manifesto excerpt -->
          <p class="text-base sm:text-lg text-black/80 font-sans max-w-xl font-normal leading-relaxed">
            Vêtements streetwear ultra-lourds, coupes boxy oversize et finitions brutes. Conçus pour les flemmards ambitieux qui exigent un confort suprême sans sacrifier leur dégaine.
          </p>

          <!-- Call to action buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#selection-flemme"
              class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#5C241C] transition-all transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none"
            >
              <span>DÉCOUVRIR LE DROP</span>
              <ArrowDownRight class="w-5 h-5" />
            </a>

            <a
              href="#flemmard-club"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-black text-black text-sm font-mono font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all transform active:scale-95"
            >
              <span>FLEMMARD CLUB</span>
            </a>
          </div>

          <!-- Trust Badges Micro-Row -->
          <div class="pt-6 border-t border-black/15 flex flex-wrap gap-6 text-xs font-mono text-black/70">
            <div class="flex items-center gap-2">
              <span class="text-black font-bold">✓</span>
              <span>100% Coton Biologique</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-black font-bold">✓</span>
              <span>Expédié sous 24/48h</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-black font-bold">✓</span>
              <span>Éditions Très Limitées</span>
            </div>
          </div>

        </div>

        <!-- Right Column: Visual Hero Presentation with Brand Assets -->
        <div class="lg:col-span-5 relative flex justify-center items-center">
          
          <!-- Background decorative frame -->
          <div class="relative w-full max-w-md aspect-[4/5] bg-white border-2 border-black shadow-[12px_12px_0px_0px_#5C241C] p-6 flex flex-col justify-between overflow-hidden group">
            
            <!-- Top tag bar of the frame -->
            <div class="flex items-center justify-between border-b border-black pb-3">
              <span class="font-mono text-[11px] font-bold tracking-widest text-black">NO. 001 // MASCOTTE OFFICIELLE</span>
              <span class="font-mono text-[11px] font-bold text-[#5C241C]">PARIS EST. 2026</span>
            </div>

            <!-- Central Hero Visual: Brand Mascot with hover animation -->
            <div class="my-auto py-4 relative flex items-center justify-center">
              <!-- Glow background -->
              <div class="absolute w-48 h-48 bg-[#F4EBD9] rounded-full blur-2xl -z-10 opacity-70"></div>
              
              <img 
                src="/brand/Flems.png" 
                alt="Monsieur Flemme Character" 
                class="w-64 sm:w-72 md:w-80 h-auto object-contain transition-transform duration-500 group-hover:scale-105 animate-float"
              />

              <!-- Floating Sticker "Flemmard Club" -->
              <div class="absolute -bottom-4 -right-4 w-36 sm:w-40 transform rotate-12 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 drop-shadow-lg">
                <img 
                  src="/brand/Flemme12.png" 
                  alt="Flemmard Club Sticker" 
                  class="w-full h-auto object-contain"
                />
              </div>
            </div>

            <!-- Bottom metadata inside frame -->
            <div class="border-t border-black pt-3 flex items-center justify-between text-xs font-mono">
              <span class="font-bold text-black">MONSIEUR FLEMME™</span>
              <span class="text-[#2B78C4] font-bold">LIMITED DROP 01</span>
            </div>

          </div>

          <!-- Floating decorative badge outside frame -->
          <div class="hidden sm:block absolute -top-4 -left-6 bg-black text-white px-4 py-2 font-mono text-xs font-bold tracking-widest uppercase rotate-[-6deg] shadow-md">
            ★ HEAVYWEIGHT APPAREL
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
