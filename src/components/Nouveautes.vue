<script setup>
import { ref, computed } from 'vue'
import { NOUVEAUTES_PRODUCTS } from '../data/products'
import ProductCard from './ProductCard.vue'

const props = defineProps({
  activeFilter: {
    type: String,
    default: 'ALL',
  },
})

const selectedFilter = ref('ALL')
const filters = ['ALL', 'T-SHIRTS', 'HOODIES', 'PULLS', 'ACCESSOIRES']

const filteredProducts = computed(() => {
  const f = selectedFilter.value
  if (f === 'ALL') return NOUVEAUTES_PRODUCTS
  return NOUVEAUTES_PRODUCTS.filter((p) => p.category === f)
})
</script>

<template>
  <section id="nouveautes" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    
    <!-- Section Header & Filter Tabs -->
    <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 pb-4 border-b-2 border-black">
      <div>
        <span class="font-mono text-xs font-bold tracking-widest text-[#5C241C] uppercase">
          // TOUT LE CATALOGUE DROP 01
        </span>
        <h2 class="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black mt-1">
          NOUVEAUTÉS
        </h2>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="selectedFilter = filter"
          class="px-3.5 py-1.5 border-2 border-black uppercase tracking-wider transition-all"
          :class="selectedFilter === filter ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'"
        >
          {{ filter === 'ALL' ? 'TOUT AFFICHER' : filter }}
        </button>
      </div>
    </div>

    <!-- Products Grid (4 columns on desktop, 2 on tablet, 1 on mobile) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

  </section>
</template>
