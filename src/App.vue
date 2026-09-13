<script setup>
import { ref } from 'vue'
import EventHeader from './components/EventHeader.vue'
import EventHero from './components/EventHero.vue'
import EventProgram from './components/EventProgram.vue'
import EventPricing from './components/EventPricing.vue'
import EventRegistrationForm from './components/EventRegistrationForm.vue'
import EventLocation from './components/EventLocation.vue'
import EventFaq from './components/EventFaq.vue'
import EventFooter from './components/EventFooter.vue'

const selectedFormula = ref('solo')

function handleFormulaSelect(formula) {
  selectedFormula.value = formula.id
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#F8F7F5] text-[#111111] font-sans selection:bg-[#2B78C4] selection:text-white">
    <!-- Navigation Header -->
    <EventHeader />

    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Hero Section -->
      <EventHero />

      <!-- Program / Timeline (Film + Débrief + Goûter + Karaoké) -->
      <EventProgram />

      <!-- Pricing / Formulas -->
      <EventPricing @select-formula="handleFormulaSelect" />

      <!-- Registration Form with WhatsApp Redirection -->
      <EventRegistrationForm :initial-formula="selectedFormula" />

      <!-- Location & Access -->
      <EventLocation />

      <!-- FAQ -->
      <EventFaq />
    </main>

    <!-- Footer -->
    <EventFooter />
  </div>
</template>
