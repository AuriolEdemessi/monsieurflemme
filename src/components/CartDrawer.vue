<script setup>
import { ref, computed } from 'vue'
import { useCart } from '../composables/useCart'
import { useToast } from '../composables/useToast'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Check, Tag } from 'lucide-vue-next'

const {
  state,
  totalItems,
  subtotal,
  freeShippingThreshold,
  freeShippingProgress,
  remainingForFreeShipping,
  removeFromCart,
  updateQuantity,
  clearCart,
  closeCart,
} = useCart()

const { showToast } = useToast()

const promoInput = ref('')
const appliedDiscount = ref(0)
const discountCode = ref('')

const finalTotal = computed(() => {
  const discountAmount = (subtotal.value * appliedDiscount.value) / 100
  return Math.max(0, subtotal.value - discountAmount)
})

function applyPromo() {
  const code = promoInput.value.trim().toUpperCase()
  if (code === 'FLEMME10' || code === 'DROP01') {
    appliedDiscount.value = 10
    discountCode.value = code
    showToast('Code promo activé : -10% de réduction !')
    promoInput.value = ''
  } else if (code === 'VIP20') {
    appliedDiscount.value = 20
    discountCode.value = code
    showToast('Code promo activé : -20% de réduction VIP !')
    promoInput.value = ''
  } else {
    showToast('Code promo invalide. Essayez "FLEMME10"', 'error')
  }
}

function handleCheckout() {
  if (state.items.length === 0) return
  showToast('Redirection vers le paiement sécurisé...', 'success')
  setTimeout(() => {
    alert(`🎉 Merci pour votre commande !\nMontant total : ${finalTotal.value.toFixed(2)} €\nVotre colis Monsieur Flemme est en cours de préparation.`)
    clearCart()
    closeCart()
  }, 1000)
}
</script>

<template>
  <div>
    <!-- Backdrop Overlay -->
    <div
      v-if="state.isOpen"
      @click="closeCart"
      class="fixed inset-0 bg-black/60 z-50 transition-opacity backdrop-blur-sm"
    ></div>

    <!-- Slide-over Drawer Panel -->
    <div
      class="fixed inset-y-0 right-0 max-w-full flex z-50 transform transition-transform duration-300 ease-in-out"
      :class="state.isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="w-screen max-w-md bg-[#F8F7F5] border-l-2 border-black flex flex-col shadow-2xl">
        
        <!-- Drawer Header -->
        <div class="p-6 bg-white border-b-2 border-black flex items-center justify-between">
          <div class="flex items-center gap-3">
            <ShoppingBag class="w-6 h-6 text-black" />
            <h3 class="font-heading font-black text-xl uppercase tracking-tight text-black">
              MON PANIER ({{ totalItems }})
            </h3>
          </div>
          <button
            @click="closeCart"
            class="p-2 text-black hover:opacity-70 focus:outline-none"
            aria-label="Fermer le panier"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        <!-- Free Shipping Progress Bar -->
        <div class="bg-[#F4EBD9] p-4 border-b border-black text-xs font-mono">
          <div class="flex justify-between items-center mb-1.5">
            <span v-if="remainingForFreeShipping > 0" class="font-bold text-black">
              Plus que <span class="text-[#5C241C]">{{ remainingForFreeShipping.toFixed(2) }} €</span> pour la livraison offerte !
            </span>
            <span v-else class="font-bold text-emerald-700 flex items-center gap-1">
              <Check class="w-4 h-4" /> LIVRAISON OFFERTE DÉBLOQUÉE !
            </span>
            <span class="text-black/60 font-bold">{{ freeShippingProgress }}%</span>
          </div>
          <div class="w-full bg-black/10 h-2 border border-black overflow-hidden">
            <div
              class="h-full bg-[#2B78C4] transition-all duration-500"
              :style="{ width: `${freeShippingProgress}%` }"
            ></div>
          </div>
        </div>

        <!-- Cart Items List (Scrollable) -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          <div v-if="state.items.length === 0" class="py-16 text-center space-y-4">
            <img src="/brand/Flems.png" alt="Panier vide" class="w-24 h-24 mx-auto object-contain opacity-50" />
            <p class="font-heading font-black text-xl text-black">VOTRE PANIER EST VIDE</p>
            <p class="font-sans text-xs text-black/60 max-w-xs mx-auto">
              Profite du Drop 01 pour shopper tes pièces streetwear oversize avant rupture.
            </p>
            <button
              @click="closeCart"
              class="px-6 py-3 bg-black text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#5C241C]"
            >
              DÉCOUVRIR LE DROP
            </button>
          </div>

          <div
            v-for="(item, index) in state.items"
            :key="`${item.id}-${item.selectedSize}`"
            class="bg-white border-2 border-black p-4 flex gap-4 items-center shadow-[4px_4px_0px_0px_#000000]"
          >
            <!-- Product Thumbnail -->
            <div class="w-20 h-20 bg-[#F8F7F5] border border-black/10 flex items-center justify-center shrink-0 p-1">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-contain" />
            </div>

            <!-- Item Info -->
            <div class="flex-1 min-w-0">
              <h4 class="font-heading font-bold text-sm text-black truncate">{{ item.name }}</h4>
              <div class="flex items-center gap-2 mt-1">
                <span class="font-mono text-xs bg-black text-white px-1.5 py-0.2 font-bold">
                  {{ item.selectedSize }}
                </span>
                <span class="font-mono text-xs font-bold text-[#5C241C]">
                  {{ item.price.toFixed(2) }} €
                </span>
              </div>

              <!-- Quantity selector -->
              <div class="flex items-center gap-2 mt-3">
                <div class="inline-flex items-center border border-black bg-[#F8F7F5]">
                  <button
                    @click="updateQuantity(index, -1)"
                    class="p-1 hover:bg-black hover:text-white transition-colors"
                  >
                    <Minus class="w-3.5 h-3.5" />
                  </button>
                  <span class="font-mono text-xs font-bold px-2">{{ item.quantity }}</span>
                  <button
                    @click="updateQuantity(index, 1)"
                    class="p-1 hover:bg-black hover:text-white transition-colors"
                  >
                    <Plus class="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  @click="removeFromCart(index)"
                  class="text-black/40 hover:text-red-600 p-1 ml-auto transition-colors"
                  title="Supprimer"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Drawer Footer: Promo Code & Checkout -->
        <div v-if="state.items.length > 0" class="p-6 bg-white border-t-2 border-black space-y-4">
          
          <!-- Promo Code Input -->
          <div class="flex gap-2">
            <input
              v-model="promoInput"
              type="text"
              placeholder="Code promo (ex: FLEMME10)"
              class="flex-1 border-2 border-black px-3 py-2 text-xs font-mono uppercase placeholder:normal-case focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              @click="applyPromo"
              class="px-4 py-2 bg-black text-white font-mono text-xs font-bold tracking-wider hover:bg-[#5C241C]"
            >
              APPLIQUER
            </button>
          </div>

          <!-- Price breakdown -->
          <div class="space-y-1.5 text-xs font-mono pt-2 border-t border-black/10">
            <div class="flex justify-between text-black/70">
              <span>Sous-total</span>
              <span>{{ subtotal.toFixed(2) }} €</span>
            </div>

            <div v-if="appliedDiscount > 0" class="flex justify-between text-emerald-700 font-bold">
              <span>Remise ({{ discountCode }} -{{ appliedDiscount }}%)</span>
              <span>-{{ ((subtotal * appliedDiscount) / 100).toFixed(2) }} €</span>
            </div>

            <div class="flex justify-between text-black/70">
              <span>Livraison</span>
              <span>{{ remainingForFreeShipping === 0 ? 'OFFERTE' : '4,90 €' }}</span>
            </div>

            <div class="flex justify-between text-base font-black font-mono text-black pt-2 border-t border-black">
              <span>TOTAL</span>
              <span>{{ (finalTotal + (remainingForFreeShipping === 0 ? 0 : 4.90)).toFixed(2) }} €</span>
            </div>
          </div>

          <!-- Checkout Button -->
          <button
            @click="handleCheckout"
            class="w-full py-4 bg-black text-white font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#5C241C] transition-colors shadow-[4px_4px_0px_0px_#2B78C4]"
          >
            <span>PASSER LA COMMANDE</span>
            <ArrowRight class="w-4 h-4" />
          </button>

          <!-- Security note -->
          <p class="text-[10px] font-mono text-center text-black/50 tracking-wider">
            🔒 Paiement 100% sécurisé via Stripe & Apple Pay
          </p>
        </div>

      </div>
    </div>
  </div>
</template>
