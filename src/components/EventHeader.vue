<script setup>
import { ref } from 'vue'
import { Ticket, Menu, X, MessageCircle } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

function scrollToSection(id) {
  mobileMenuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="sticky top-0 z-40 bg-[#F8F7F5]/95 backdrop-blur-md border-b-2 border-black">
    <!-- Announcement Bar -->
    <div class="bg-black text-white text-[11px] sm:text-xs font-mono py-2 px-4 text-center tracking-widest uppercase">
      <div class="inline-flex items-center gap-4 animate-pulse font-bold">
        <span>🎬 ÉVÉNEMENT EXCLUSIF : CINÉ-DÉBRIEF • GOÛTER • KARAOKÉ</span>
        <span class="hidden sm:inline">•</span>
        <span class="hidden sm:inline text-amber-300">PLACES TRÈS LIMITÉES</span>
        <span class="hidden md:inline">•</span>
        <span class="hidden md:inline">COTONOU, BÉNIN</span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 sm:h-24">
        
        <!-- Logo with Flems mascot and Lilita One font matching the logo -->
        <a href="#" class="group flex items-center gap-3">
          <img 
            src="/brand/Flems.png" 
            alt="Monsieur Flemme" 
            class="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
          <div class="flex flex-col text-left">
            <span class="font-logo text-2xl sm:text-3xl lg:text-4xl uppercase tracking-normal text-black leading-none">
              MONSIEUR FLEMME
            </span>
            <span class="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-[#5C241C] font-bold uppercase mt-0.5">
              ÉVÉNEMENT // FLEMMARD CLUB
            </span>
          </div>
        </a>

        <!-- Desktop Links -->
        <nav class="hidden md:flex items-center space-x-8 text-xs font-mono font-bold tracking-widest text-black/80">
          <button @click="scrollToSection('programme')" class="hover:text-black uppercase transition-colors cursor-pointer">
            LE PROGRAMME
          </button>
          <button @click="scrollToSection('formules')" class="hover:text-black uppercase transition-colors cursor-pointer">
            LES FORMULES
          </button>
          <button @click="scrollToSection('lieu')" class="hover:text-black uppercase transition-colors cursor-pointer">
            INFOS & LIEU
          </button>
          <button @click="scrollToSection('faq')" class="hover:text-black uppercase transition-colors cursor-pointer">
            FAQ
          </button>
        </nav>

        <!-- CTA Reservation Button -->
        <div class="hidden sm:flex items-center space-x-4">
          <button
            @click="scrollToSection('inscription')"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#5C241C] transition-all transform active:scale-95 shadow-[3px_3px_0px_0px_#2B78C4] cursor-pointer"
          >
            <Ticket class="w-4 h-4" />
            <span>RÉSERVER MA PLACE</span>
          </button>
        </div>

        <!-- Mobile hamburger -->
        <div class="flex md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 text-black hover:opacity-70 focus:outline-none"
            aria-label="Menu"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t-2 border-black bg-[#F8F7F5] px-6 py-6 space-y-4">
      <div class="flex flex-col space-y-3 font-mono text-sm font-bold">
        <button @click="scrollToSection('programme')" class="text-left py-1 hover:text-[#2B78C4]">LE PROGRAMME</button>
        <button @click="scrollToSection('formules')" class="text-left py-1 hover:text-[#2B78C4]">LES FORMULES</button>
        <button @click="scrollToSection('lieu')" class="text-left py-1 hover:text-[#2B78C4]">INFOS & LIEU</button>
        <button @click="scrollToSection('faq')" class="text-left py-1 hover:text-[#2B78C4]">FAQ</button>
      </div>
      <div class="pt-4 border-t border-black/10">
        <button
          @click="scrollToSection('inscription')"
          class="w-full py-3 bg-black text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2"
        >
          <Ticket class="w-4 h-4" />
          <span>RÉSERVER MA PLACE</span>
        </button>
      </div>
    </div>
  </header>
</template>
