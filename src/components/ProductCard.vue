<script setup>
import { ref } from 'vue'
import { useCart } from '../composables/useCart'
import { useToast } from '../composables/useToast'
import { Heart, Eye, Plus, Check } from 'lucide-vue-next'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { addToCart, toggleWishlist, isInWishlist, openQuickView } = useCart()
const { showToast } = useToast()

const selectedSize = ref(props.product.sizes ? props.product.sizes[0] : 'L')
const isAdded = ref(false)

function handleAddToCart() {
  addToCart(props.product, selectedSize.value, 1)
  showToast(`${props.product.name} (Taille ${selectedSize.value}) ajouté au panier !`)
  isAdded.value = true
  setTimeout(() => {
    isAdded.value = false
  }, 1500)
}

function handleWishlist() {
  const added = toggleWishlist(props.product)
  if (added) {
    showToast('Produit ajouté à vos favoris')
  } else {
    showToast('Produit retiré de vos favoris', 'info')
  }
}
</script>

<template>
  <div class="group relative bg-white border-2 border-black flex flex-col justify-between transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#000000]">
    
    <!-- Card Top: Tags & Wishlist -->
    <div class="p-4 pb-0 flex items-center justify-between z-10">
      <span 
        v-if="product.badge"
        class="bg-black text-white text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 uppercase"
      >
        {{ product.badge }}
      </span>
      <span v-else class="text-[10px] font-mono text-black/40 uppercase">
        {{ product.category }}
      </span>

      <button
        @click.stop="handleWishlist"
        class="p-1.5 text-black/60 hover:text-red-600 transition-colors focus:outline-none"
        :aria-label="isInWishlist(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'"
      >
        <Heart 
          class="w-4 h-4 transition-transform group-hover:scale-110" 
          :class="{ 'fill-[#5C241C] text-[#5C241C]': isInWishlist(product.id) }"
        />
      </button>
    </div>

    <!-- Product Image Visual with Quick View on hover -->
    <div 
      @click="openQuickView(product)"
      class="relative aspect-square w-full p-4 flex items-center justify-center cursor-pointer overflow-hidden"
    >
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Quick view hover overlay button -->
      <button
        @click.stop="openQuickView(product)"
        class="absolute inset-x-6 bottom-4 py-2.5 bg-white/95 border border-black text-xs font-mono font-bold tracking-wider uppercase text-black opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2 shadow-md hover:bg-black hover:text-white"
      >
        <Eye class="w-4 h-4" />
        <span>APERÇU RAPIDE</span>
      </button>
    </div>

    <!-- Card Bottom Content -->
    <div class="p-4 pt-2 border-t border-black/10 flex flex-col space-y-3 bg-[#FAFAFA]">
      
      <!-- Category & Title -->
      <div>
        <span class="font-mono text-[10px] tracking-wider text-[#5C241C] font-bold uppercase">
          {{ product.category }}
        </span>
        <h3 class="font-heading font-black text-base text-black tracking-tight line-clamp-1 group-hover:text-[#2B78C4] transition-colors">
          {{ product.name }}
        </h3>
      </div>

      <!-- Price & Sizes Selector -->
      <div class="flex items-center justify-between pt-1">
        <span class="font-mono font-bold text-lg text-black">
          {{ product.price.toFixed(2).replace('.', ',') }} €
        </span>

        <!-- Sizes Pills -->
        <div v-if="product.sizes && product.sizes.length > 1" class="flex items-center gap-1">
          <button
            v-for="s in product.sizes.slice(0, 4)"
            :key="s"
            @click.stop="selectedSize = s"
            class="text-[10px] font-mono px-1.5 py-0.5 border font-bold transition-colors"
            :class="selectedSize === s ? 'bg-black text-white border-black' : 'bg-white text-black/70 border-black/20 hover:border-black'"
          >
            {{ s }}
          </button>
        </div>
      </div>

      <!-- Add to Cart CTA Button -->
      <button
        @click.stop="handleAddToCart"
        class="w-full py-2.5 px-4 font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 border-2 border-black"
        :class="isAdded ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-black text-white hover:bg-[#5C241C]'"
      >
        <Check v-if="isAdded" class="w-4 h-4" />
        <Plus v-else class="w-4 h-4" />
        <span>{{ isAdded ? 'AJOUTÉ AU PANIER' : 'AJOUTER AU PANIER' }}</span>
      </button>

    </div>

  </div>
</template>
