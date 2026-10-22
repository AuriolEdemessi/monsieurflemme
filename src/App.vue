<script setup>
import { ref } from 'vue'
import EventHeader from './components/EventHeader.vue'
import EventHero from './components/EventHero.vue'
import EventTicker from './components/EventTicker.vue'
import EventAboutClub from './components/EventAboutClub.vue'
import EventProgram from './components/EventProgram.vue'
import EventMusic from './components/EventMusic.vue'
import EventDressCode from './components/EventDressCode.vue'
import EventPracticalInfos from './components/EventPracticalInfos.vue'
import EventGallery from './components/EventGallery.vue'
import EventFaq from './components/EventFaq.vue'
import EventCtaBanner from './components/EventCtaBanner.vue'
import EventFooter from './components/EventFooter.vue'
import EventMobileBar from './components/EventMobileBar.vue'
import EventTicketModal from './components/EventTicketModal.vue'

const isTicketModalOpen = ref(false)

function openTicketModal() {
  isTicketModalOpen.value = true
}

function closeTicketModal() {
  isTicketModalOpen.value = false
}
</script>

<template>
  <div class="relative min-h-screen">
    <EventHeader @open-ticket="openTicketModal" />

    <main>
      <EventHero @open-ticket="openTicketModal" />
      <EventTicker />
      <EventAboutClub />
      <EventProgram />
      <EventMusic />
      <EventDressCode @open-ticket="openTicketModal" />
      <EventPracticalInfos @open-ticket="openTicketModal" />
      <EventGallery />
      <EventFaq />
      <EventCtaBanner @open-ticket="openTicketModal" />
    </main>

    <EventFooter />

    <EventMobileBar :hidden="isTicketModalOpen" @open-ticket="openTicketModal" />
    <EventTicketModal :is-open="isTicketModalOpen" @close="closeTicketModal" />
  </div>
</template>
