<script setup>
import { CATEGORIES } from '../data/products'
import { ArrowUpRight } from 'lucide-vue-next'

const emit = defineEmits(['select-category'])

function selectCategory(categoryName) {
  emit('select-category', categoryName)
}
</script>

<template>
  <section id="categories" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-black">
      <div>
        <span class="font-mono text-xs font-bold tracking-widest text-[#5C241C] uppercase">
          // EXPLORER PAR RAYON
        </span>
        <h2 class="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black mt-1">
          CATÉGORIES
        </h2>
      </div>
      <p class="font-mono text-xs text-black/60 mt-2 md:mt-0 tracking-wider">
        SÉLECTION OFFICIELLE DROP 01
      </p>
    </div>

    <!-- Categories Grid (4 cards) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="cat in CATEGORIES"
        :key="cat.id"
        @click="selectCategory(cat.name)"
        class="group relative bg-white border-2 border-black p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] overflow-hidden"
      >
        <!-- Card Top: Code & Count -->
        <div class="flex items-center justify-between mb-6 z-10">
          <span class="font-mono text-xs font-bold tracking-widest text-[#5C241C]">
            {{ cat.code }}
          </span>
          <span class="font-mono text-[11px] bg-black text-white px-2 py-0.5 font-bold">
            {{ cat.count }}
          </span>
        </div>

        <!-- Card Image Visual -->
        <div class="relative aspect-square w-full my-4 flex items-center justify-center bg-[#F8F7F5] border border-black/10 overflow-hidden">
          <img
            :src="cat.image"
            :alt="cat.name"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
        </div>

        <!-- Card Bottom Info -->
        <div class="pt-4 border-t border-black/10 flex items-center justify-between z-10">
          <div>
            <h3 class="font-heading font-black text-xl tracking-tight text-black group-hover:text-[#2B78C4] transition-colors">
              {{ cat.name }}
            </h3>
            <p class="font-sans text-xs text-black/60 line-clamp-1 mt-0.5">
              {{ cat.description }}
            </p>
          </div>
          <div class="p-2 bg-black text-white group-hover:bg-[#2B78C4] transition-colors">
            <ArrowUpRight class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
