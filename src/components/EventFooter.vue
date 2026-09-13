<script setup>
import { MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-black text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t-4 border-[#2B78C4]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-center">
        
        <!-- Left: Brand info & mascot -->
        <div class="md:col-span-6 space-y-3 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3">
            <img src="/brand/Flems.png" alt="Monsieur Flemme" class="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <span class="font-logo text-2xl sm:text-3xl uppercase tracking-normal text-white">
              MONSIEUR FLEMME
            </span>
          </div>
          <p class="font-sans text-xs text-white/70 max-w-md mx-auto md:mx-0 leading-relaxed">
            Événements éphémères & esprit Flemmard Club. Des moments uniques pensés pour déconnecter dans la bonne humeur.
          </p>
        </div>

        <!-- Right: WhatsApp Direct Box -->
        <div class="md:col-span-6 flex flex-col sm:flex-row md:justify-end gap-3 items-stretch sm:items-center">
          <a
            href="https://wa.me/2290191319357?text=Bonjour%20Monsieur%20Flemme%2C%20j'ai%20une%20question%20sur%20l'événement"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-5 py-3.5 sm:py-4 bg-[#25D366] text-black border-2 border-white font-mono font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-[3px_3px_0px_0px_#FFFFFF]"
          >
            <MessageCircle class="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
            <span>ASSISTANCE WHATSAPP : 01 91 31 93 57</span>
          </a>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] font-mono text-white/50">
        <p>© 2026 MONSIEUR FLEMME — Soirée Ciné-Débrief & Karaoké.</p>
        <p class="text-white/70">
          Organisé à Cotonou, Bénin
        </p>
      </div>

    </div>
  </footer>
</template>
