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
    <div class="bg-black text-white text-[10px] sm:text-xs font-mono py-2 px-3 text-center tracking-wider uppercase overflow-hidden">
      <div class="inline-flex items-center gap-2 sm:gap-4 font-bold">
        <span>🎬 CINÉ • DÉBRIEF • KARAOKÉ</span>
        <span class="text-amber-300">• VENDREDI 18 SEPTEMBRE 20H</span>
        <span class="text-emerald-400">• 30 PLACES MAX</span>
        <span class="hidden sm:inline">• LE YAO, AKPAKPA</span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-24">
        
        <!-- Logo with Flems mascot and Lilita One font matching the logo -->
        <a href="#" class="group flex items-center gap-2 sm:gap-3">
          <img 
            src="/brand/Flems.png" 
            alt="Monsieur Flemme" 
            class="w-8 h-8 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shrink-0"
          />
          <div class="flex flex-col text-left">
            <span class="font-logo text-lg sm:text-3xl lg:text-4xl uppercase tracking-normal text-black leading-none truncate">
              MONSIEUR FLEMME
            </span>
            <span class="font-mono text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#5C241C] font-bold uppercase mt-0.5">
              FLEMMARD CLUB // LE CINÉCLUB
            </span>
          </div>
        </a>

        <!-- Desktop Links -->
        <nav class="hidden md:flex items-center space-x-8 text-xs font-mono font-bold tracking-widest text-black/80">
          <button @click="scrollToSection('programme')" class="hover:text-black uppercase transition-colors cursor-pointer">
            LE PROGRAMME
          </button>
          <button @click="scrollToSection('formules')" class="hover:text-black uppercase transition-colors cursor-pointer">
            LE PASS SOLO
          </button>
          <button @click="scrollToSection('lieu')" class="hover:text-black uppercase transition-colors cursor-pointer">
            INFOS & LIEU
          </button>
          <button @click="scrollToSection('faq')" class="hover:text-black uppercase transition-colors cursor-pointer">
            FAQ
          </button>
        </nav>

        <!-- Right actions -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- CTA Reservation Button (Desktop & Tablet) -->
          <button
            @click="scrollToSection('inscription')"
            class="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase hover:bg-[#5C241C] transition-all transform active:scale-95 shadow-[3px_3px_0px_0px_#2B78C4] cursor-pointer"
          >
            <Ticket class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>RÉSERVER (3 000F)</span>
          </button>

          <!-- Quick Mobile CTA Icon Button -->
          <button
            @click="scrollToSection('inscription')"
            class="sm:hidden p-2 bg-black text-white font-mono text-xs font-bold uppercase"
            aria-label="Réserver"
          >
            <Ticket class="w-4 h-4" />
          </button>

          <!-- Mobile hamburger -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 text-black hover:opacity-70 focus:outline-none md:hidden"
            aria-label="Menu"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t-2 border-black bg-[#F8F7F5] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
      <div class="flex flex-col space-y-3 font-mono text-sm font-bold">
        <button @click="scrollToSection('programme')" class="text-left py-2 hover:text-[#2B78C4] border-b border-black/10">LE PROGRAMME</button>
        <button @click="scrollToSection('formules')" class="text-left py-2 hover:text-[#2B78C4] border-b border-black/10">LE PASS SOLO (3 000F)</button>
        <button @click="scrollToSection('lieu')" class="text-left py-2 hover:text-[#2B78C4] border-b border-black/10">INFOS & LIEU</button>
        <button @click="scrollToSection('faq')" class="text-left py-2 hover:text-[#2B78C4]">FAQ</button>
      </div>
      <div class="pt-2">
        <button
          @click="scrollToSection('inscription')"
          class="w-full py-3.5 bg-black text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#2B78C4]"
        >
          <Ticket class="w-4 h-4" />
          <span>RÉSERVER MA PLACE (3 000F)</span>
        </button>
      </div>
    </div>
  </header>
</template>
