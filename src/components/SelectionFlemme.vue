<script setup>
import { ref, computed } from 'vue'
import { SELECTION_PRODUCTS } from '../data/products'
import ProductCard from './ProductCard.vue'
import { Sparkles } from 'lucide-vue-next'

const selectedTab = ref('ALL')
const tabs = ['ALL', 'T-SHIRTS', 'HOODIES', 'PULLS']

const filteredProducts = computed(() => {
  if (selectedTab.value === 'ALL') return SELECTION_PRODUCTS
  return SELECTION_PRODUCTS.filter((p) => p.category === selectedTab.value)
})
</script>

<template>
  <section id="selection-flemme" class="bg-[#F8F7F5] border-t-2 border-black py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header with Badges & Filter Tabs -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <Sparkles class="w-4 h-4 text-[#5C241C]" />
            <span class="font-mono text-xs font-bold tracking-widest text-[#5C241C] uppercase">
              // PIÈCES SIGNATURES DROP 01
            </span>
          </div>
          <h2 class="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black">
            SÉLECTION FLEMME
          </h2>
        </div>

        <!-- Filter Tab Buttons -->
        <div class="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="selectedTab = tab"
            class="px-4 py-2 border-2 border-black uppercase tracking-wider transition-all"
            :class="selectedTab === tab ? 'bg-black text-white shadow-[3px_3px_0px_0px_#5C241C]' : 'bg-white text-black hover:bg-black/5'"
          >
            {{ tab === 'ALL' ? 'TOUT VOIR' : tab }}
          </button>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

    </div>
  </section>
</template>
