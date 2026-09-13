<script setup>
import { ref, watch } from 'vue'
import { useCart } from '../composables/useCart'
import { useToast } from '../composables/useToast'
import { X, Plus, Minus, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-vue-next'

const { state, closeQuickView, addToCart } = useCart()
const { showToast } = useToast()

const selectedSize = ref('L')
const quantity = ref(1)
const isAdded = ref(false)

watch(
  () => state.quickViewProduct,
  (newVal) => {
    if (newVal && newVal.sizes) {
      selectedSize.value = newVal.sizes[0] || 'L'
      quantity.value = 1
      isAdded.value = false
    }
  }
)

function handleAdd() {
  if (!state.quickViewProduct) return
  addToCart(state.quickViewProduct, selectedSize.value, quantity.value)
  showToast(`${state.quickViewProduct.name} ajouté au panier !`)
  isAdded.value = true
  setTimeout(() => {
    isAdded.value = false
    closeQuickView()
  }, 1000)
}
</script>

<template>
  <div v-if="state.quickViewProduct" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div
      @click="closeQuickView"
      class="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Dialog -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div
        class="relative w-full max-w-3xl bg-[#F8F7F5] border-2 border-black p-6 sm:p-8 shadow-[12px_12px_0px_0px_#000000] z-10"
      >
        <!-- Close Button -->
        <button
          @click="closeQuickView"
          class="absolute top-4 right-4 p-2 text-black hover:opacity-60 focus:outline-none"
          aria-label="Fermer"
        >
          <X class="w-6 h-6" />
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Product Visual -->
          <div class="bg-white border-2 border-black aspect-square p-6 flex items-center justify-center relative overflow-hidden">
            <span
              v-if="state.quickViewProduct.badge"
              class="absolute top-3 left-3 bg-black text-white text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 uppercase"
            >
              {{ state.quickViewProduct.badge }}
            </span>
            <img
              :src="state.quickViewProduct.image"
              :alt="state.quickViewProduct.name"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Product Details & Actions -->
          <div class="space-y-4">
            <div>
              <span class="font-mono text-xs font-bold tracking-widest text-[#5C241C] uppercase">
                {{ state.quickViewProduct.category }} // DROP 01
              </span>
              <h3 class="font-heading font-black text-2xl sm:text-3xl text-black tracking-tight mt-1">
                {{ state.quickViewProduct.name }}
              </h3>
            </div>

            <div class="font-mono font-black text-2xl text-black">
              {{ state.quickViewProduct.price.toFixed(2).replace('.', ',') }} €
            </div>

            <p class="font-sans text-xs text-black/70 leading-relaxed">
              {{ state.quickViewProduct.description || 'Pièce de la collection officielle Monsieur Flemme. Coton peigné lourd, finitions soignées, coupe décontractée ultra-confortable.' }}
            </p>

            <!-- Size Selector -->
            <div v-if="state.quickViewProduct.sizes" class="space-y-1.5 pt-2">
              <span class="font-mono text-xs font-bold text-black uppercase">CHOISIR UNE TAILLE :</span>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="s in state.quickViewProduct.sizes"
                  :key="s"
                  @click="selectedSize = s"
                  class="px-3.5 py-1.5 font-mono text-xs font-bold border-2 border-black transition-all"
                  :class="selectedSize === s ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'"
                >
                  {{ s }}
                </button>
              </div>
            </div>

            <!-- Quantity & Add to Cart -->
            <div class="flex items-center gap-4 pt-2">
              <div class="inline-flex items-center border-2 border-black bg-white">
                <button
                  @click="quantity = Math.max(1, quantity - 1)"
                  class="px-3 py-2.5 hover:bg-black hover:text-white transition-colors"
                >
                  <Minus class="w-3.5 h-3.5" />
                </button>
                <span class="font-mono text-sm font-bold px-3">{{ quantity }}</span>
                <button
                  @click="quantity++"
                  class="px-3 py-2.5 hover:bg-black hover:text-white transition-colors"
                >
                  <Plus class="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                @click="handleAdd"
                class="flex-1 py-3 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#2B78C4]"
                :class="isAdded ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-black text-white hover:bg-[#5C241C]'"
              >
                <Check v-if="isAdded" class="w-4 h-4" />
                <Plus v-else class="w-4 h-4" />
                <span>{{ isAdded ? 'AJOUTÉ !' : 'AJOUTER AU PANIER' }}</span>
              </button>
            </div>

            <!-- Perks row -->
            <div class="pt-4 border-t border-black/10 grid grid-cols-3 gap-2 text-[10px] font-mono text-black/70">
              <div class="flex items-center gap-1.5">
                <Truck class="w-3.5 h-3.5 text-black" />
                <span>Envoi 48h</span>
              </div>
              <div class="flex items-center gap-1.5">
                <RefreshCw class="w-3.5 h-3.5 text-black" />
                <span>Retour 30j</span>
              </div>
              <div class="flex items-center gap-1.5">
                <ShieldCheck class="w-3.5 h-3.5 text-black" />
                <span>100% Coton</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
