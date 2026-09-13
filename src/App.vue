<script setup>
import { ref, computed } from 'vue'
import { CATEGORIES, SELECTION_PRODUCTS, NOUVEAUTES_PRODUCTS } from './data/products'
import {
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Inbox,
  Check,
} from 'lucide-vue-next'

// State
const currentFilter = ref('ALL')
const cart = ref([])
const isCartOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isLoginModalOpen = ref(false)
const loginEmail = ref('')
const loginPassword = ref('')
const newsletterEmail = ref('')

// Toast state
const toastMessage = ref('')
const isToastVisible = ref(false)
let toastTimer = null

function showToast(msg) {
  toastMessage.value = msg
  isToastVisible.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    isToastVisible.value = false
  }, 2500)
}

// Cart Computations
const totalCartItems = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
)
const cartSubtotal = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

// Filtering
const filteredSelection = computed(() => {
  if (currentFilter.value === 'ALL') return SELECTION_PRODUCTS
  return SELECTION_PRODUCTS.filter((p) => p.category === currentFilter.value)
})

const filteredNouveautes = computed(() => {
  if (currentFilter.value === 'ALL') return NOUVEAUTES_PRODUCTS
  return NOUVEAUTES_PRODUCTS.filter((p) => p.category === currentFilter.value)
})

function setCategoryFilter(cat) {
  currentFilter.value = cat
  isMobileMenuOpen.value = false
  const target = document.getElementById('selection-flemme')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

// Cart actions
function addToCart(product) {
  const existing = cart.value.find((item) => item.id === product.id)
  if (existing) {
    existing.quantity += 1
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
  showToast(`+1 ${product.name} ajouté`)
  isCartOpen.value = true
}

function removeFromCart(id) {
  cart.value = cart.value.filter((item) => item.id !== id)
}

function changeQuantity(id, delta) {
  const item = cart.value.find((i) => i.id === id)
  if (item) {
    item.quantity += delta
    if (item.quantity <= 0) {
      removeFromCart(id)
    }
  }
}

function toggleCart() {
  isCartOpen.value = !isCartOpen.value
}

function handleLogin() {
  isLoginModalOpen.value = false
  loginEmail.value = ''
  loginPassword.value = ''
  showToast('Connexion réussie !')
}

function handleNewsletter() {
  newsletterEmail.value = ''
  showToast('Bienvenue au Club Flemme !')
}

function checkoutMock() {
  if (cart.value.length === 0) {
    showToast('Votre panier est vide')
    return
  }
  showToast('Redirection vers le paiement...')
  setTimeout(() => {
    alert(
      'Paiement sécurisé MR. FLEM - Commande confirmée avec succès ! Merci de votre confiance.'
    )
    cart.value = []
    isCartOpen.value = false
  }, 800)
}
</script>

<template>
  <div class="bg-[#F9F9F9] text-black selection:bg-black selection:text-white flex flex-col min-h-screen">
    
    <!-- ==================== HEADER / NAVIGATION ==================== -->
    <header id="main-header" class="sticky top-0 z-40 bg-[#F9F9F9]/95 backdrop-blur-md border-b border-[#E5E5E5] transition-all duration-200">
      <div class="max-w-[1440px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        
        <!-- Branding / Logo (Gauche) -->
        <div class="flex items-center">
          <a href="#" class="flex items-center gap-2.5 font-heavy text-2xl sm:text-3xl font-black tracking-tighter text-black uppercase hover:opacity-80 transition-opacity">
            <img src="/brand/Flems.png" alt="Logo" class="w-8 h-8 object-contain" />
            <span>MR. FLEM</span>
          </a>
        </div>

        <!-- Navigation Links (Centre - Desktop) -->
        <nav class="hidden md:flex items-center space-x-7 lg:space-x-10 text-xs font-semibold tracking-widest text-neutral-800 uppercase">
          <a
            href="#selection-flemme"
            @click.prevent="setCategoryFilter('ALL')"
            class="hover:text-black transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all cursor-pointer"
          >
            BOUTIQUE
          </a>
          <a
            href="#selection-flemme"
            @click.prevent="setCategoryFilter('T-SHIRTS')"
            class="hover:text-black transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all cursor-pointer"
          >
            T-SHIRTS
          </a>
          <a
            href="#selection-flemme"
            @click.prevent="setCategoryFilter('HOODIES')"
            class="hover:text-black transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all cursor-pointer"
          >
            HOODIES
          </a>
          <a
            href="#selection-flemme"
            @click.prevent="setCategoryFilter('PULLS')"
            class="hover:text-black transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all cursor-pointer"
          >
            PULLS
          </a>
          <a
            href="#categories"
            @click.prevent="setCategoryFilter('ACCESSOIRES')"
            class="hover:text-black transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all cursor-pointer"
          >
            ACCESSOIRES
          </a>
        </nav>

        <!-- Utilisateur & Panier (Droite) -->
        <div class="flex items-center space-x-6">
          <button
            @click="isLoginModalOpen = true"
            class="hidden sm:inline-block text-xs font-semibold tracking-widest text-black uppercase hover:opacity-60 transition-opacity"
          >
            CONNEXION
          </button>

          <!-- Cart trigger button -->
          <button
            @click="toggleCart"
            class="relative p-2 text-black hover:opacity-75 transition-opacity"
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag class="w-5 h-5 stroke-[1.8]" />
            <span class="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center border border-white">
              {{ totalCartItems }}
            </span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 text-black"
            aria-label="Menu"
          >
            <Menu class="w-6 h-6" />
          </button>
        </div>

      </div>

      <!-- Mobile Drawer Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-[#F9F9F9] border-b border-black px-6 py-6 transition-all">
        <nav class="flex flex-col space-y-4 text-sm font-bold tracking-widest uppercase">
          <a href="#selection-flemme" @click="setCategoryFilter('ALL')" class="hover:text-neutral-500 py-1">BOUTIQUE</a>
          <a href="#selection-flemme" @click="setCategoryFilter('T-SHIRTS')" class="hover:text-neutral-500 py-1">T-SHIRTS</a>
          <a href="#selection-flemme" @click="setCategoryFilter('HOODIES')" class="hover:text-neutral-500 py-1">HOODIES</a>
          <a href="#selection-flemme" @click="setCategoryFilter('PULLS')" class="hover:text-neutral-500 py-1">PULLS</a>
          <a href="#categories" @click="setCategoryFilter('ACCESSOIRES')" class="hover:text-neutral-500 py-1">ACCESSOIRES</a>
          <div class="pt-4 border-t border-neutral-200">
            <button @click="isLoginModalOpen = true; isMobileMenuOpen = false" class="block text-xs tracking-widest text-black uppercase font-bold">
              CONNEXION
            </button>
          </div>
        </nav>
      </div>
    </header>


    <!-- ==================== SECTION 2 : HERO BANNER ==================== -->
    <section class="w-full bg-[#F9F9F9] border-b border-[#E5E5E5] overflow-hidden">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[580px] lg:min-h-[640px]">
        
        <!-- Colonne Gauche : Contenu Hero -->
        <div class="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-20 z-10">
          
          <!-- Sur-titre -->
          <div class="mb-4 sm:mb-6">
            <span class="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              NOUVELLE COLLECTION 2025
            </span>
          </div>

          <!-- Titre Principal (Hero Title sur 3 lignes) -->
          <h1 class="font-heavy text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase text-black leading-[0.92] tracking-tighter mb-8">
            LA FLEMME<br />
            EN MODE<br />
            PREMIUM
          </h1>

          <!-- Description / Sous-titre -->
          <p class="max-w-md text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mb-10">
            Des pièces streetwear conçues pour ceux qui osent être eux-mêmes. Qualité premium, designs uniques, éditions limitées.
          </p>

          <!-- CTA Button -->
          <div>
            <a
              href="#selection-flemme"
              class="inline-flex items-center justify-center bg-black text-white px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all transform active:scale-98 shadow-sm"
            >
              DÉCOUVRIR LA COLLECTION
            </a>
          </div>

        </div>

        <!-- Colonne Droite : Visuel Hero Cobalt/Bleu Signature avec typographie officielle -->
        <div class="relative hero-blue-pattern bg-[#2b70c9] flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[380px] lg:min-h-full overflow-hidden select-none">
          
          <!-- Subtle background glowing accents -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-black/30 pointer-events-none"></div>

          <!-- Main Typography Container -->
          <div class="relative text-center z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            
            <div class="text-white/95 font-heavy uppercase tracking-tighter">
              <span class="block text-4xl sm:text-6xl md:text-7xl font-black tracking-normal mb-1 opacity-90 drop-shadow-md">
                MONSIEUR
              </span>
              <span class="block text-6xl sm:text-8xl md:text-9xl font-black leading-[0.82] tracking-tighter drop-shadow-lg">
                FLEMME
              </span>
            </div>

            <!-- Lettre "Z Z Z" flottante (Clin d'œil signature Flemme) -->
            <div class="absolute -top-3 -right-4 sm:-top-5 sm:-right-8 flex flex-col items-center space-y-0.5 text-white/80 font-black animate-pulse">
              <span class="text-xs sm:text-sm">z</span>
              <span class="text-sm sm:text-base font-bold">z</span>
              <span class="text-lg sm:text-2xl font-black">Z</span>
            </div>

          </div>

          <!-- Signature stamp bottom right -->
          <div class="absolute bottom-4 right-5 text-[10px] tracking-[0.25em] text-white/50 uppercase font-mono font-medium">
            EST. 2025 // PARIS
          </div>
        </div>

      </div>
    </section>


    <!-- ==================== SECTION 3 : BANDEAU DÉFILANT (MARQUEE) ==================== -->
    <div class="w-full bg-black text-white py-3.5 sm:py-4 overflow-hidden border-y border-neutral-900 select-none">
      <div class="animate-marquee whitespace-nowrap flex items-center text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
        
        <span class="mx-4 flex items-center">
          FLEMME HEIN <span class="mx-3 text-neutral-500 text-base">•</span>
          ÉDITIONS LIMITÉES <span class="mx-3 text-neutral-500 text-base">•</span>
          QUALITÉ PREMIUM <span class="mx-3 text-neutral-500 text-base">•</span>
          FABRIQUÉ EN EUROPE <span class="mx-3 text-neutral-500 text-base">•</span>
          FLEMME HEIN <span class="mx-3 text-neutral-500 text-base">•</span>
          ÉDITIONS LIMITÉES <span class="mx-3 text-neutral-500 text-base">•</span>
          QUALITÉ PREMIUM <span class="mx-3 text-neutral-500 text-base">•</span>
          FABRIQUÉ EN EUROPE
        </span>
        
        <span class="mx-4 flex items-center" aria-hidden="true">
          <span class="mx-3 text-neutral-500 text-base">•</span>
          FLEMME HEIN <span class="mx-3 text-neutral-500 text-base">•</span>
          ÉDITIONS LIMITÉES <span class="mx-3 text-neutral-500 text-base">•</span>
          QUALITÉ PREMIUM <span class="mx-3 text-neutral-500 text-base">•</span>
          FABRIQUÉ EN EUROPE <span class="mx-3 text-neutral-500 text-base">•</span>
          FLEMME HEIN <span class="mx-3 text-neutral-500 text-base">•</span>
          ÉDITIONS LIMITÉES <span class="mx-3 text-neutral-500 text-base">•</span>
          QUALITÉ PREMIUM <span class="mx-3 text-neutral-500 text-base">•</span>
          FABRIQUÉ EN EUROPE
        </span>

      </div>
    </div>


    <!-- ==================== SECTION 4 : CATÉGORIES ==================== -->
    <section id="categories" class="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
      
      <!-- Section Header -->
      <div class="mb-10 sm:mb-12">
        <h2 class="font-heavy text-2xl sm:text-3xl font-black tracking-tight uppercase text-black">
          CATÉGORIES
        </h2>
        <p class="text-xs sm:text-sm text-neutral-500 mt-1 font-normal tracking-wide">
          Trouve ta pièce signature
        </p>
      </div>

      <!-- 4 Columns Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
        
        <!-- Catégorie 1 : T-SHIRTS -->
        <div @click="setCategoryFilter('T-SHIRTS')" class="group cursor-pointer flex flex-col">
          <div class="relative w-full aspect-[4/5] bg-[#EFEFEF] hover:bg-[#EAEAEA] flex items-center justify-center p-8 transition-colors border border-transparent hover:border-black overflow-hidden">
            <img src="/brand/Fichier 12.jpg" alt="T-shirts" class="w-3/4 h-3/4 object-contain opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" />
            <span class="absolute top-4 right-4 text-[10px] font-mono text-neutral-400 font-bold">01 // TEE</span>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="font-heavy font-black text-sm tracking-widest uppercase text-black group-hover:underline underline-offset-4">T-SHIRTS</span>
            <ArrowUpRight class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <!-- Catégorie 2 : HOODIES -->
        <div @click="setCategoryFilter('HOODIES')" class="group cursor-pointer flex flex-col">
          <div class="relative w-full aspect-[4/5] bg-[#EFEFEF] hover:bg-[#EAEAEA] flex items-center justify-center p-8 transition-colors border border-transparent hover:border-black overflow-hidden">
            <img src="/brand/Fichier 15.jpg" alt="Hoodies" class="w-3/4 h-3/4 object-contain opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" />
            <span class="absolute top-4 right-4 text-[10px] font-mono text-neutral-400 font-bold">02 // HD</span>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="font-heavy font-black text-sm tracking-widest uppercase text-black group-hover:underline underline-offset-4">HOODIES</span>
            <ArrowUpRight class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <!-- Catégorie 3 : PULLS -->
        <div @click="setCategoryFilter('PULLS')" class="group cursor-pointer flex flex-col">
          <div class="relative w-full aspect-[4/5] bg-[#EFEFEF] hover:bg-[#EAEAEA] flex items-center justify-center p-8 transition-colors border border-transparent hover:border-black overflow-hidden">
            <img src="/brand/Fichier 14.jpg" alt="Pulls" class="w-3/4 h-3/4 object-contain opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" />
            <span class="absolute top-4 right-4 text-[10px] font-mono text-neutral-400 font-bold">03 // KNIT</span>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="font-heavy font-black text-sm tracking-widest uppercase text-black group-hover:underline underline-offset-4">PULLS</span>
            <ArrowUpRight class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <!-- Catégorie 4 : ACCESSOIRES -->
        <div @click="setCategoryFilter('ACCESSOIRES')" class="group cursor-pointer flex flex-col">
          <div class="relative w-full aspect-[4/5] bg-[#EFEFEF] hover:bg-[#EAEAEA] flex items-center justify-center p-8 transition-colors border border-transparent hover:border-black overflow-hidden">
            <img src="/brand/Flems.png" alt="Accessoires" class="w-3/4 h-3/4 object-contain opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" />
            <span class="absolute top-4 right-4 text-[10px] font-mono text-neutral-400 font-bold">04 // ACC</span>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="font-heavy font-black text-sm tracking-widest uppercase text-black group-hover:underline underline-offset-4">ACCESSOIRES</span>
            <ArrowUpRight class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

      </div>
    </section>


    <!-- ==================== SECTION 5 : SÉLECTION FLEMME ==================== -->
    <section id="selection-flemme" class="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 sm:py-20 border-t border-[#E5E5E5]">
      
      <!-- Header de Section avec bouton VOIR TOUT -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
        <div>
          <h2 class="font-heavy text-2xl sm:text-3xl font-black tracking-tight uppercase text-black">
            SÉLECTION FLEMME
          </h2>
          <p class="text-xs sm:text-sm text-neutral-500 mt-1 font-normal tracking-wide">
            Nos pièces les plus iconiques
          </p>
        </div>

        <div>
          <button
            @click="setCategoryFilter('ALL')"
            class="inline-block border border-black px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            VOIR TOUT
          </button>
        </div>
      </div>

      <!-- Grille de Produits Sélection Flemme (4 colonnes) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="product in filteredSelection"
          :key="product.id"
          class="product-card group flex flex-col bg-transparent"
        >
          <!-- Image Box -->
          <div class="relative w-full aspect-square bg-[#F4F4F4] overflow-hidden border border-transparent group-hover:border-neutral-900 transition-all duration-300">
            <div class="w-full h-full p-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-contain select-none" />
            </div>
            
            <!-- Category Badge (Top left small) -->
            <span class="absolute top-3 left-3 text-[9px] font-mono tracking-widest font-bold uppercase text-neutral-400">
              {{ product.category }}
            </span>
          </div>

          <!-- Product Details -->
          <div class="mt-3 flex flex-col space-y-1">
            <span class="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
              {{ product.category }}
            </span>
            
            <h3 class="font-heavy font-extrabold text-xs sm:text-sm text-black tracking-tight uppercase group-hover:underline underline-offset-2">
              {{ product.name }}
            </h3>

            <!-- Price & Add to Cart button -->
            <div class="pt-2 flex items-center justify-between border-t border-neutral-200 mt-2">
              <span class="font-sans font-bold text-xs sm:text-sm text-black">
                {{ product.price.toFixed(2) }} €
              </span>

              <button 
                @click="addToCart(product)"
                class="text-[11px] font-bold tracking-wider text-black hover:text-neutral-500 transition-colors uppercase cursor-pointer"
                aria-label="Ajouter au panier"
              >
                + AJOUTER
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>


    <!-- ==================== SECTION 6 : NOUVEAUTÉS ==================== -->
    <section id="nouveautes" class="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 sm:py-20 border-t border-[#E5E5E5]">
      
      <!-- En-tête de section -->
      <div class="mb-10 sm:mb-12">
        <h2 class="font-heavy text-2xl sm:text-3xl font-black tracking-tight uppercase text-black">
          NOUVEAUTÉS
        </h2>
        <p class="text-xs sm:text-sm text-neutral-500 mt-1 font-normal tracking-wide">
          Les dernières pièces débarquées
        </p>
      </div>

      <!-- Grille de Produits Nouveautés (4 colonnes sur 2 rangées = 8 items) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="product in filteredNouveautes"
          :key="product.id"
          class="product-card group flex flex-col bg-transparent"
        >
          <!-- Image Box -->
          <div class="relative w-full aspect-square bg-[#F4F4F4] overflow-hidden border border-transparent group-hover:border-neutral-900 transition-all duration-300">
            <div class="w-full h-full p-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-contain select-none" />
            </div>
            
            <!-- Category Badge (Top left small) -->
            <span class="absolute top-3 left-3 text-[9px] font-mono tracking-widest font-bold uppercase text-neutral-400">
              {{ product.category }}
            </span>
          </div>

          <!-- Product Details -->
          <div class="mt-3 flex flex-col space-y-1">
            <span class="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
              {{ product.category }}
            </span>
            
            <h3 class="font-heavy font-extrabold text-xs sm:text-sm text-black tracking-tight uppercase group-hover:underline underline-offset-2">
              {{ product.name }}
            </h3>

            <!-- Price & Add to Cart button -->
            <div class="pt-2 flex items-center justify-between border-t border-neutral-200 mt-2">
              <span class="font-sans font-bold text-xs sm:text-sm text-black">
                {{ product.price.toFixed(2) }} €
              </span>

              <button 
                @click="addToCart(product)"
                class="text-[11px] font-bold tracking-wider text-black hover:text-neutral-500 transition-colors uppercase cursor-pointer"
                aria-label="Ajouter au panier"
              >
                + AJOUTER
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>


    <!-- ==================== SECTION 7 : MANIFESTE DE LA MARQUE ("FLEMME HEIN?") ==================== -->
    <section class="w-full bg-[#050505] text-white py-24 sm:py-32 px-6 sm:px-12 relative overflow-hidden border-t border-b border-neutral-900">
      
      <!-- Subtle Watermark Artwork in Background -->
      <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span class="font-heavy text-[18vw] font-black uppercase tracking-tighter text-white whitespace-nowrap">
          FLEMME HEIN
        </span>
      </div>

      <!-- Conteneur Centré -->
      <div class="max-w-3xl mx-auto text-center relative z-10">
        
        <!-- Titre Manifeste -->
        <h2 class="font-heavy text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white mb-8">
          FLEMME HEIN ?
        </h2>

        <!-- Texte du Manifeste -->
        <p class="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed sm:leading-loose">
          Monsieur Flem n'est pas une marque comme les autres. C'est un état d'esprit. On ne fait pas les choses à moitié, même quand on ne fait rien. Chaque pièce est pensée, dessinée et produite avec la même exigence que celle qu'on met à ne rien faire.
        </p>

        <!-- Signature Minimaliste -->
        <div class="mt-10 flex items-center justify-center space-x-3 text-xs tracking-[0.3em] text-neutral-500 uppercase font-mono">
          <span>— MR. FLEM COLLECTIVE —</span>
        </div>

      </div>
    </section>


    <!-- ==================== SECTION 8 : FOOTER (PIED DE PAGE) ==================== -->
    <footer class="w-full bg-black text-white pt-20 pb-12 border-t border-neutral-900">
      <div class="max-w-[1440px] mx-auto px-5 sm:px-8">
        
        <!-- 4 Colonnes -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          
          <!-- Colonne 1 : Branding (4 cols) -->
          <div class="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" class="flex items-center gap-2.5 font-heavy text-2xl sm:text-3xl font-black tracking-tighter text-white uppercase block mb-4">
                <img src="/brand/Flems.png" alt="Logo" class="w-8 h-8 object-contain" />
                <span>MR. FLEM</span>
              </a>
              <p class="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
                La marque qui transforme la flemme en force créative. Pièces limitées, designs uniques, qualité premium.
              </p>
            </div>
            <p class="text-[11px] text-neutral-500 font-mono tracking-wider">
              © 2025 Monsieur Flem. Tous droits réservés.
            </p>
          </div>

          <!-- Colonne 2 : BOUTIQUE (2-3 cols) -->
          <div class="lg:col-span-2 sm:col-span-1">
            <h3 class="text-xs font-bold tracking-[0.2em] text-white uppercase mb-5">
              BOUTIQUE
            </h3>
            <ul class="space-y-3 text-xs text-neutral-400">
              <li><a href="#selection-flemme" @click="setCategoryFilter('T-SHIRTS')" class="hover:text-white transition-colors cursor-pointer">T-shirts</a></li>
              <li><a href="#selection-flemme" @click="setCategoryFilter('HOODIES')" class="hover:text-white transition-colors cursor-pointer">Hoodies</a></li>
              <li><a href="#selection-flemme" @click="setCategoryFilter('PULLS')" class="hover:text-white transition-colors cursor-pointer">Pulls</a></li>
              <li><a href="#categories" @click="setCategoryFilter('ACCESSOIRES')" class="hover:text-white transition-colors cursor-pointer">Accessoires</a></li>
            </ul>
          </div>

          <!-- Colonne 3 : AIDE (2-3 cols) -->
          <div class="lg:col-span-2 sm:col-span-1">
            <h3 class="text-xs font-bold tracking-[0.2em] text-white uppercase mb-5">
              AIDE
            </h3>
            <ul class="space-y-3 text-xs text-neutral-400">
              <li><a href="#" class="hover:text-white transition-colors">Livraison</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Retours</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Tailles</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Colonne 4 : LÉGAL (3 cols) -->
          <div class="lg:col-span-3">
            <h3 class="text-xs font-bold tracking-[0.2em] text-white uppercase mb-5">
              LÉGAL
            </h3>
            <ul class="space-y-3 text-xs text-neutral-400">
              <li><a href="#" class="hover:text-white transition-colors">CGV</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Mentions légales</a></li>
            </ul>

            <!-- Newsletter Signup Quick Box -->
            <div class="mt-8">
              <span class="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">CLUB FLEMME VIP</span>
              <form @submit.prevent="handleNewsletter" class="flex">
                <input
                  v-model="newsletterEmail"
                  type="email"
                  placeholder="ton@email.com"
                  required
                  class="bg-neutral-900 border border-neutral-700 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white flex-1"
                />
                <button
                  type="submit"
                  class="bg-white text-black px-4 py-2 text-xs font-bold tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                >
                  OK
                </button>
              </form>
            </div>
          </div>

        </div>

        <!-- Bas de footer -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-mono tracking-widest gap-4">
          <span>EST. 2025 // TOUS DROITS RÉSERVÉS</span>
          <span class="uppercase tracking-[0.25em] text-neutral-300 font-bold">
            FAIT AVEC FLEMME PARIS
          </span>
        </div>

      </div>
    </footer>


    <!-- ==================== SIDE CART DRAWER ==================== -->
    <div
      id="cart-drawer"
      class="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col border-l border-black"
      :class="isCartOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Header Panier -->
      <div class="p-6 bg-black text-white flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <ShoppingBag class="w-5 h-5" />
          <h3 class="font-heavy text-lg font-black tracking-wider uppercase">VOTRE PANIER</h3>
        </div>
        <button @click="toggleCart" class="p-1 hover:text-neutral-400 focus:outline-none" aria-label="Fermer">
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Items list -->
      <div id="cart-items" class="flex-1 overflow-y-auto p-6 space-y-4">
        <div v-if="cart.length === 0" class="text-center py-16 text-neutral-400">
          <Inbox class="w-10 h-10 mx-auto mb-3 stroke-[1.2]" />
          <p class="text-xs uppercase tracking-widest font-bold">Votre panier est vide</p>
        </div>

        <div
          v-for="item in cart"
          :key="item.id"
          class="flex items-center justify-between border-b border-neutral-100 pb-3"
        >
          <div class="w-14 h-14 bg-[#F4F4F4] p-1 mr-3 flex items-center justify-center shrink-0">
            <img :src="item.image" :alt="item.name" class="w-full h-full object-contain" />
          </div>
          <div class="flex-1 pr-3">
            <span class="text-[9px] uppercase font-mono text-neutral-400">{{ item.category }}</span>
            <h4 class="text-xs font-black uppercase text-black leading-tight">{{ item.name }}</h4>
            <span class="text-xs font-bold text-neutral-700 mt-0.5 block">{{ item.price.toFixed(2) }} €</span>
          </div>
          
          <div class="flex items-center space-x-2 border border-black px-2 py-1">
            <button @click="changeQuantity(item.id, -1)" class="text-xs font-bold px-1 hover:text-neutral-500">-</button>
            <span class="text-xs font-bold px-1">{{ item.quantity }}</span>
            <button @click="changeQuantity(item.id, 1)" class="text-xs font-bold px-1 hover:text-neutral-500">+</button>
          </div>
        </div>
      </div>

      <!-- Footer Panier -->
      <div class="p-6 border-t border-neutral-200 bg-[#F9F9F9]">
        <div class="flex justify-between items-center mb-4">
          <span class="text-xs uppercase tracking-widest font-bold text-neutral-600">Sous-total</span>
          <span id="cart-subtotal" class="font-heavy text-lg font-black">{{ cartSubtotal.toFixed(2) }} €</span>
        </div>
        <button
          @click="checkoutMock"
          class="w-full bg-black text-white py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>COMMANDER MAINTENANT</span>
          <ArrowRight class="w-4 h-4" />
        </button>
        <p class="text-[10px] text-center text-neutral-400 mt-2 tracking-wider uppercase">Livraison offerte dès 100€ d'achat</p>
      </div>
    </div>

    <!-- Cart backdrop overlay -->
    <div
      v-if="isCartOpen"
      @click="toggleCart"
      class="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity"
    ></div>


    <!-- ==================== MODAL CONNEXION ==================== -->
    <div
      v-if="isLoginModalOpen"
      class="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div class="bg-white border-2 border-black max-w-md w-full p-8 relative">
        <button
          @click="isLoginModalOpen = false"
          class="absolute top-4 right-4 text-black hover:text-neutral-500 focus:outline-none"
        >
          <X class="w-5 h-5" />
        </button>
        
        <div class="mb-6">
          <h3 class="font-heavy text-2xl font-black uppercase text-black">ESPACE MEMBRE</h3>
          <p class="text-xs text-neutral-500 tracking-wide mt-1">Connecte-toi pour suivre tes commandes</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-[11px] font-bold tracking-widest uppercase mb-1">Email</label>
            <input
              v-model="loginEmail"
              type="email"
              required
              placeholder="nom@exemple.com"
              class="w-full border border-black p-3 text-xs focus:outline-none focus:bg-neutral-50"
            />
          </div>
          <div>
            <label class="block text-[11px] font-bold tracking-widest uppercase mb-1">Mot de passe</label>
            <input
              v-model="loginPassword"
              type="password"
              required
              placeholder="••••••••"
              class="w-full border border-black p-3 text-xs focus:outline-none focus:bg-neutral-50"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
          >
            SE CONNECTER
          </button>
        </form>
      </div>
    </div>


    <!-- ==================== TOAST NOTIFICATION ==================== -->
    <div
      id="toast"
      class="fixed bottom-6 right-6 bg-black text-white px-5 py-3 text-xs font-bold tracking-wider uppercase z-50 transform transition-all duration-300 border border-neutral-700 shadow-xl flex items-center space-x-2"
      :class="isToastVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'"
    >
      <Check class="w-4 h-4 text-emerald-400" />
      <span>{{ toastMessage }}</span>
    </div>

  </div>
</template>
