<script setup>
import { MapPin, Navigation, Clock, Shield, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="lieu" class="relative bg-[#0E0E12] text-white border-t border-white/10 py-16 sm:py-24 monodrift-dots">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left Column: Venue Info -->
        <div class="lg:col-span-7 space-y-6">
          <div>
            <span class="inline-block font-mono text-xs text-[#52FF9D] uppercase tracking-widest mb-3">
              [ 04 // LOCALISATION & EXPÉRIENCE ]
            </span>
            <h2 class="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              UN SPOT CHILL ET CONFIDENTIEL.
            </h2>
          </div>

          <p class="font-sans text-sm sm:text-base text-[#8E8E93] leading-relaxed max-w-xl">
            Pour garantir une immersion intimiste et un confort sans compromis, la session a lieu dans un espace privatisé climatisé à <strong>Cotonou (Akpakpa)</strong>, équipé d'une projection haute définition et d'une acoustique soignée.
          </p>

          <div class="space-y-3 pt-2">
            <div class="bg-[#141418] border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#52FF9D]">
                <Navigation class="w-5 h-5" />
              </div>
              <div>
                <span class="font-mono text-xs text-white/50 uppercase tracking-wider block">[ ADRESSE & ITINÉRAIRE ]</span>
                <h4 class="font-heading font-bold text-base text-white mt-0.5">Akpakpa Centre, Cotonou</h4>
                <p class="font-sans text-xs text-[#A0A0A5] mt-1 leading-relaxed">
                  L'adresse précise et le repère GPS direct vous sont envoyés par message WhatsApp instantanément après validation de votre réservation.
                </p>
              </div>
            </div>

            <div class="bg-[#141418] border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
                <Clock class="w-5 h-5" />
              </div>
              <div>
                <span class="font-mono text-xs text-white/50 uppercase tracking-wider block">[ HORAIRES & ACCUEIL ]</span>
                <h4 class="font-heading font-bold text-base text-white mt-0.5">Ouverture des portes dès 19H30</h4>
                <p class="font-sans text-xs text-[#A0A0A5] mt-1 leading-relaxed">
                  Arrivez tranquillement pour récupérer votre popcorn, choisir votre siège et échanger avant le lancement de la projection à 20H00 pile.
                </p>
              </div>
            </div>

            <div class="bg-[#141418] border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#2B78C4]">
                <Shield class="w-5 h-5" />
              </div>
              <div>
                <span class="font-mono text-xs text-white/50 uppercase tracking-wider block">[ SÉCURITÉ & PARKING ]</span>
                <h4 class="font-heading font-bold text-base text-white mt-0.5">Parking surveillé sur place</h4>
                <p class="font-sans text-xs text-[#A0A0A5] mt-1 leading-relaxed">
                  Gardiennage assuré durant toute la durée de la séance pour profiter de la projection l'esprit 100% serein.
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Column: Monodrift Style Visual Frame -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-md group">
            
            <div class="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#52FF9D]/15 via-blue-500/10 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>

            <div class="relative bg-[#141418] border border-white/15 rounded-3xl p-7 text-white flex flex-col justify-between shadow-2xl overflow-hidden">
              
              <!-- Card Top -->
              <div class="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
                <span class="text-[#52FF9D] font-bold tracking-wider">[ DRESS CODE ]</span>
                <span class="text-white/40">100% CONFORTABLE</span>
              </div>

              <!-- Center Graphic -->
              <div class="py-8 flex flex-col items-center text-center">
                <div class="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                  <div class="absolute inset-0 bg-[#52FF9D]/10 rounded-full blur-2xl"></div>
                  <img 
                    src="/brand/Flems.png" 
                    alt="Flems Mascot" 
                    class="w-32 h-32 sm:w-40 sm:h-40 object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 class="font-heading font-black text-2xl uppercase mt-4 text-white">
                  VIENS COMME TU ES.
                </h3>
                <p class="font-sans text-xs sm:text-sm text-[#A0A0A5] max-w-xs mt-2 leading-relaxed">
                  Hoodie, claquettes-chaussettes, ensemble chill ou tenue décontractée. La seule règle absolue : être détendu(e).
                </p>
              </div>

              <!-- Bottom Meta -->
              <div class="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-[#84848A]">
                <span>COTONOU • 2026</span>
                <span class="text-white/60">[ FLEMMARD CLUB ]</span>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
