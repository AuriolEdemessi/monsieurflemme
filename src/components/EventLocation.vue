<script setup>
import { MapPin, Navigation, Clock, Shield } from 'lucide-vue-next'
</script>

<template>
  <section id="lieu" class="bg-[#F8F7F5] border-t-2 border-black py-12 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Column: Venue Info -->
        <div class="lg:col-span-6 space-y-4 sm:space-y-6">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
            <MapPin class="w-3.5 h-3.5 text-red-400" />
            <span>LOCALISATION & ACCÈS</span>
          </div>

          <h2 class="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black leading-tight">
            UN SPOT CHILL ET CONFIDENTIEL
          </h2>

          <p class="font-sans text-xs sm:text-base text-black/80 leading-relaxed">
            Pour garantir une expérience cosy et chaleureuse, l'événement se tient dans un espace privatisé à <strong>Cotonou (Bénin)</strong> avec climatisation, grand écran de projection, sonorisation haute fidélité et espace détente.
          </p>

          <div class="space-y-2.5 sm:space-y-3 pt-1">
            <div class="bg-white border-2 border-black p-3.5 sm:p-4 flex items-start gap-3 shadow-[3px_3px_0px_0px_#000000]">
              <Navigation class="w-4 h-4 sm:w-5 sm:h-5 text-[#2B78C4] shrink-0 mt-0.5" />
              <div>
                <h4 class="font-heading font-bold text-xs sm:text-sm text-black">Adresse & Itinéraire</h4>
                <p class="font-sans text-[11px] sm:text-xs text-black/70 mt-0.5">
                  L'adresse exacte et le lien Google Maps vous seront partagés sur WhatsApp immédiatement après validation de votre réservation.
                </p>
              </div>
            </div>

            <div class="bg-white border-2 border-black p-3.5 sm:p-4 flex items-start gap-3 shadow-[3px_3px_0px_0px_#000000]">
              <Clock class="w-4 h-4 sm:w-5 sm:h-5 text-[#5C241C] shrink-0 mt-0.5" />
              <div>
                <h4 class="font-heading font-bold text-xs sm:text-sm text-black">Ponctualité & Accueil</h4>
                <p class="font-sans text-[11px] sm:text-xs text-black/70 mt-0.5">
                  Accueil dès 17h30 pour s'installer, commander son snack et faire connaissance. Début de la projection à 18h00 pile.
                </p>
              </div>
            </div>

            <div class="bg-white border-2 border-black p-3.5 sm:p-4 flex items-start gap-3 shadow-[3px_3px_0px_0px_#000000]">
              <Shield class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 class="font-heading font-bold text-xs sm:text-sm text-black">Parking & Sécurité</h4>
                <p class="font-sans text-[11px] sm:text-xs text-black/70 mt-0.5">
                  Parking surveillé et sécurité assurée toute la soirée pour que vous profitiez l'esprit tranquille.
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Column: Visual Frame with brand mascot -->
        <div class="lg:col-span-6 flex justify-center">
          <div class="relative w-full max-w-sm sm:max-w-md bg-[#5C241C] border-2 border-black p-6 sm:p-8 text-white shadow-[6px_6px_0px_0px_#2B78C4] sm:shadow-[10px_10px_0px_0px_#2B78C4] flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-white/20 pb-3">
              <span class="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-amber-200 uppercase">
                DRESS CODE : STREETWEAR CHILL
              </span>
              <span class="font-mono text-[10px] sm:text-xs font-bold">100% CONFORT</span>
            </div>

            <div class="py-6 sm:py-8 flex flex-col items-center text-center">
              <img src="/brand/Flems.png" alt="Mascotte Flem" class="w-32 h-32 sm:w-44 sm:h-44 object-contain animate-float" />
              <h3 class="font-heading font-black text-xl sm:text-2xl uppercase mt-3 text-white">
                VIENS COMME TU ES
              </h3>
              <p class="font-sans text-xs text-white/80 max-w-xs mt-1">
                Sweat oversize, hoodie, baskets ou ensemble décontracté. La règle numéro 1 : se sentir bien.
              </p>
            </div>

            <div class="border-t border-white/20 pt-3 text-center font-mono text-[10px] sm:text-[11px] text-white/60">
              COMMUNAUTÉ MONSIEUR FLEMME BÉNIN
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
