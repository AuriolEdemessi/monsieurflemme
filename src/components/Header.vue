<script setup>
import { ref } from 'vue'
import { useCart } from '../composables/useCart'
import { NAV_LINKS } from '../data/products'
import { ShoppingBag, Heart, Search, Menu, X } from 'lucide-vue-next'

const { state, totalItems, toggleCart } = useCart()
const mobileMenuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')

const emit = defineEmits(['filter-category'])

function handleNavClick(link) {
  mobileMenuOpen.value = false
  if (link.category) {
    emit('filter-category', link.category)
  }
}
</script>

<template>
  <header class="sticky top-0 z-40 bg-[#F8F7F5]/95 backdrop-blur-md border-b border-black/10 transition-all">
    <!-- Top Announcement Bar -->
    <div class="bg-black text-white text-[11px] md:text-xs tracking-widest font-mono py-2 px-4 text-center overflow-hidden">
      <div class="inline-flex items-center gap-6 animate-pulse">
        <span>★ LIVRAISON OFFERTE DÈS 80€ EN FRANCE MÉTROPOLITAINE</span>
        <span class="hidden sm:inline">•</span>
        <span class="hidden sm:inline">DROP 01 // FLEMMARD CLUB MAINTENANT DISPONIBLE</span>
        <span class="hidden md:inline">•</span>
        <span class="hidden md:inline">RETOURS GRATUITS 30 JOURS</span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 md:h-24">
        
        <!-- Mobile menu button -->
        <div class="flex items-center lg:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 text-black hover:opacity-70 focus:outline-none"
            aria-label="Menu"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>

        <!-- Desktop Navigation Links (Left) -->
        <nav class="hidden lg:flex items-center space-x-8 text-xs font-mono font-bold tracking-widest">
          <a
            v-for="link in NAV_LINKS.slice(0, 3)"
            :key="link.label"
            :href="link.href"
            @click="handleNavClick(link)"
            class="text-black/80 hover:text-black hover:underline decoration-2 underline-offset-8 transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Brand Center Logo -->
        <div class="flex items-center justify-center flex-1 lg:flex-initial">
          <a href="#" class="group flex items-center gap-3">
            <img 
              src="/brand/Flems.png" 
              alt="Monsieur Flemme Mascotte" 
              class="w-9 h-9 md:w-11 md:h-11 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <div class="flex flex-col text-left">
              <span class="font-heading font-black text-xl md:text-2xl lg:text-3xl tracking-tighter uppercase text-black leading-none">
                MONSIEUR FLEMME
              </span>
              <span class="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-[#5C241C] font-bold uppercase mt-0.5">
                PARIS • FLEMMARD CLUB
              </span>
            </div>
          </a>
        </div>

        <!-- Desktop Navigation Links (Right) & Actions -->
        <div class="flex items-center space-x-6 md:space-x-8">
          <nav class="hidden lg:flex items-center space-x-8 text-xs font-mono font-bold tracking-widest">
            <a
              v-for="link in NAV_LINKS.slice(3)"
              :key="link.label"
              :href="link.href"
              @click="handleNavClick(link)"
              class="text-black/80 hover:text-black hover:underline decoration-2 underline-offset-8 transition-colors"
            >
              {{ link.label }}
            </a>
          </nav>

          <!-- Icons (Search, Wishlist, Cart) -->
          <div class="flex items-center space-x-3 sm:space-x-4">
            <!-- Wishlist Count Button -->
            <button 
              class="relative p-2 text-black hover:opacity-70 transition-opacity"
              aria-label="Favoris"
              title="Favoris"
            >
              <Heart class="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
              <span 
                v-if="state.wishlist.length > 0"
                class="absolute -top-1 -right-1 bg-[#5C241C] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center"
              >
                {{ state.wishlist.length }}
              </span>
            </button>

            <!-- Cart Trigger Button -->
            <button
              @click="toggleCart"
              class="relative flex items-center gap-2 bg-black text-white px-3.5 py-2 text-xs font-mono font-bold tracking-wider hover:bg-[#5C241C] transition-colors"
              aria-label="Panier"
            >
              <ShoppingBag class="w-4 h-4 md:w-5 md:h-5 stroke-[1.8]" />
              <span class="hidden sm:inline">PANIER</span>
              <span 
                class="bg-white text-black text-[11px] font-bold px-1.5 py-0.2 ml-1"
              >
                {{ totalItems }}
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="lg:hidden border-t border-black/10 bg-[#F8F7F5] px-6 py-8 space-y-6 shadow-xl"
    >
      <div class="flex flex-col space-y-4">
        <a
          v-for="link in NAV_LINKS"
          :key="link.label"
          :href="link.href"
          @click="handleNavClick(link)"
          class="font-heading font-black text-2xl uppercase tracking-tight text-black hover:text-[#2B78C4] transition-colors"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="pt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono text-black/60">
        <span>© 2026 MONSIEUR FLEMME</span>
        <span>DROP 01 // PARIS</span>
      </div>
    </div>
  </header>
</template>
