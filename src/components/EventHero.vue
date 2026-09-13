<script setup>
import { ArrowDownRight, Film, MessageSquare, Mic, Sparkles, MapPin, Calendar, Clock, Ticket } from 'lucide-vue-next'

function scrollToForm() {
  const el = document.getElementById('inscription')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="relative bg-[#F4EBD9] border-b-2 border-black overflow-hidden">
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:28px_28px] sm:bg-[size:36px_36px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left: Text & Badges -->
        <div class="lg:col-span-7 space-y-5 sm:space-y-6">
          
          <!-- Badges bar -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              FLEMMARD CLUB // LE CINÉCLUB
            </span>
            <span class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#5C241C] text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-bold">
              30 PLACES MAX
            </span>
            <span class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#2B78C4] text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-bold">
              PASS SOLO 3 000 FCFA
            </span>
          </div>

          <!-- Main Title with Lilita One logo typography -->
          <div>
            <h1 class="font-logo text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] sm:leading-[0.92] text-black">
              LA SOIRÉE <br />
              <span class="text-[#2B78C4]">FLEMME</span> & CHILL.
            </h1>
            <p class="font-mono text-xs sm:text-base md:text-lg text-[#5C241C] font-bold uppercase tracking-wider sm:tracking-widest mt-2 sm:mt-3">
              CINÉ • DÉBRIEF • KARAOKÉ
            </p>
          </div>

          <!-- Narrative description -->
          <p class="text-sm sm:text-base md:text-lg text-black/80 font-sans max-w-xl leading-relaxed">
            Même les grands rêves ont besoin de pauses. On pose les téléphones, on regarde un film culte qui fait réfléchir, on partage nos avis sans filtre et on finit au micro pour un karaoké libérateur ! Popcorn + Good Vibes garantis.
          </p>

          <!-- Quick Event Details Pills -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
            <div class="bg-white border-2 border-black p-3 flex items-center gap-3 shadow-[3px_3px_0px_0px_#000000]">
              <Calendar class="w-4 h-4 sm:w-5 sm:h-5 text-[#2B78C4] shrink-0" />
              <div>
                <span class="block font-mono text-[9px] sm:text-[10px] text-black/60 uppercase font-bold">DATE</span>
                <span class="font-mono text-xs font-bold text-black">Vendredi 18 Septembre</span>
              </div>
            </div>

            <div class="bg-white border-2 border-black p-3 flex items-center gap-3 shadow-[3px_3px_0px_0px_#000000]">
              <Clock class="w-4 h-4 sm:w-5 sm:h-5 text-[#5C241C] shrink-0" />
              <div>
                <span class="block font-mono text-[9px] sm:text-[10px] text-black/60 uppercase font-bold">HORAIRE</span>
                <span class="font-mono text-xs font-bold text-black">20H00 PILE</span>
              </div>
            </div>

            <div class="bg-white border-2 border-black p-3 flex items-center gap-3 shadow-[3px_3px_0px_0px_#000000]">
              <MapPin class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
              <div>
                <span class="block font-mono text-[9px] sm:text-[10px] text-black/60 uppercase font-bold">LIEU</span>
                <span class="font-mono text-xs font-bold text-black">Le Yao, Akpakpa</span>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <button
              @click="scrollToForm"
              class="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-black text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#5C241C] transition-all transform active:scale-95 shadow-[4px_4px_0px_0px_#2B78C4] cursor-pointer"
            >
              <Ticket class="w-4 h-4 sm:w-5 sm:h-5" />
              <span>RÉSERVER MON PASS (3 000F)</span>
              <ArrowDownRight class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <a
              href="https://wa.me/2290191319357?text=Bonjour%20l'équipe%20Monsieur%20Flemme%2C%20je%20souhaite%20des%20infos%20sur%20la%20Soirée%20Flemmard%20Club%20(Ciné%20Débrief%20Karaoké)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#25D366] text-black font-mono font-bold text-xs tracking-wider uppercase border-2 border-black hover:bg-emerald-400 transition-all shadow-[3px_3px_0px_0px_#000000]"
            >
              <span>WHATSAPP DIRECT</span>
            </a>
          </div>

        </div>

        <!-- Right: Official Poster Card with Neo-brutalist styling -->
        <div class="lg:col-span-5 relative flex justify-center items-center">
          <div class="relative w-full max-w-sm sm:max-w-md bg-white border-2 border-black p-3 sm:p-4 shadow-[8px_8px_0px_0px_#5C241C] sm:shadow-[12px_12px_0px_0px_#5C241C] flex flex-col justify-between overflow-hidden group">
            
            <!-- Frame Header -->
            <div class="flex items-center justify-between border-b-2 border-black pb-2 sm:pb-2.5 mb-3">
              <span class="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-black flex items-center gap-1.5">
                <Sparkles class="w-3 h-3 text-[#2B78C4]" />
                SESSION 01
              </span>
              <span class="font-mono text-[10px] sm:text-[11px] font-bold text-[#5C241C] bg-[#F4EBD9] px-2 py-0.5 border border-black">
                3 000 FCFA
              </span>
            </div>

            <!-- Central Poster Display -->
            <div class="relative overflow-hidden border-2 border-black bg-neutral-900 group-hover:scale-[1.01] transition-transform duration-300">
              <img 
                src="/images/affiche-flemmard-club.jpg" 
                alt="Affiche Officielle Flemmard Club - Ciné Débrief Karaoké" 
                class="w-full h-auto object-cover block"
              />
              
              <!-- Floating Overlay Badge -->
              <div class="absolute top-2 right-2 bg-black text-white font-mono text-[9px] sm:text-[10px] font-bold px-2 py-1 uppercase tracking-wider border border-white/40 shadow-sm">
                30 PLACES DISPO
              </div>
            </div>

            <!-- 3 Activities Quick Row inside card -->
            <div class="border-t-2 border-black pt-3 mt-3 grid grid-cols-3 gap-1.5 sm:gap-2 text-center font-mono font-bold">
              <div class="bg-[#F8F7F5] border border-black/20 p-1.5 sm:p-2 flex flex-col items-center">
                <Film class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2B78C4] mb-0.5" />
                <span class="text-[9px] uppercase tracking-wider">CINÉ</span>
              </div>
              <div class="bg-[#F8F7F5] border border-black/20 p-1.5 sm:p-2 flex flex-col items-center">
                <MessageSquare class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5C241C] mb-0.5" />
                <span class="text-[9px] uppercase tracking-wider">DÉBRIEF</span>
              </div>
              <div class="bg-[#F8F7F5] border border-black/20 p-1.5 sm:p-2 flex flex-col items-center">
                <Mic class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 mb-0.5" />
                <span class="text-[9px] uppercase tracking-wider">KARAOKÉ</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
