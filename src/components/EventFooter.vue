<script setup>
import { MessageCircle, Phone, Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-black text-white pt-16 pb-12 border-t-4 border-[#2B78C4]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-center">
        
        <!-- Left: Brand info & mascot -->
        <div class="md:col-span-6 space-y-3">
          <div class="flex items-center gap-3">
            <img src="/brand/Flems.png" alt="Monsieur Flemme" class="w-10 h-10 object-contain" />
            <span class="font-logo text-3xl uppercase tracking-normal text-white">
              MONSIEUR FLEMME
            </span>
          </div>
          <p class="font-sans text-xs text-white/70 max-w-md leading-relaxed">
            Événements éphémères, streetwear minimaliste & esprit Flemmard Club. Des moments uniques pensés pour déconnecter dans la bonne humeur.
          </p>
        </div>

        <!-- Right: WhatsApp Direct Box -->
        <div class="md:col-span-6 flex flex-col sm:flex-row md:justify-end gap-4 items-stretch sm:items-center">
          <a
            href="https://wa.me/2290191319357?text=Bonjour%20Monsieur%20Flemme%2C%20j'ai%20une%20question%20sur%20l'événement"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-4 bg-[#25D366] text-black border-2 border-white font-mono font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-[4px_4px_0px_0px_#FFFFFF]"
          >
            <MessageCircle class="w-5 h-5 fill-current" />
            <span>ASSISTANCE WHATSAPP : 01 91 31 93 57</span>
          </a>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <p>© 2026 MONSIEUR FLEMME — Soirée Ciné-Débrief & Karaoké. Tous droits réservés.</p>
        <p class="flex items-center gap-1.5 text-white/70">
          <span>Organisé avec passion à Cotonou, Bénin</span>
        </p>
      </div>

    </div>
  </footer>
</template>
