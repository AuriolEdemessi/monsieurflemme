<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Menu, X, ArrowRight } from 'lucide-vue-next'
import { event, formatPrice } from '../data/event'

const emit = defineEmits(['openTicket'])

const links = [
  { id: 'programme', label: 'Programme' },
  { id: 'music', label: event.dj },
  { id: 'dress-code', label: 'Dress code' },
  { id: 'infos', label: 'Infos' },
  { id: 'faq', label: 'FAQ' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function go(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function book() {
  menuOpen.value = false
  emit('openTicket')
}

watch(menuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled ? 'bg-ink/85 backdrop-blur-lg border-b hairline' : 'bg-transparent',
    ]"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
      <a href="#hero" @click.prevent="go('hero')" class="relative z-10 shrink-0" aria-label="Flemmard Club, retour en haut">
        <img src="/brand/logo-flemmard-club.png" alt="Flemmard Club" class="h-9 w-auto -rotate-3 transition-transform duration-300 hover:rotate-0 sm:h-11" />
      </a>

      <nav class="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          @click.prevent="go(link.id)"
          class="label-mono text-bone-dim transition-colors hover:text-bone"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <button @click="book" class="btn-primary hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
          Réserver · {{ formatPrice(event.price) }}
          <ArrowRight class="h-4 w-4" />
        </button>
        <button
          @click="menuOpen = !menuOpen"
          class="relative z-10 grid h-11 w-11 place-items-center border hairline text-bone lg:hidden"
          :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="menuOpen"
        >
          <X v-if="menuOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0"
    >
      <div v-if="menuOpen" class="fixed inset-0 flex flex-col bg-ink px-6 pb-10 pt-24 lg:hidden">
        <nav class="flex flex-1 flex-col justify-center gap-2" aria-label="Navigation mobile">
          <a
            v-for="(link, i) in links"
            :key="link.id"
            :href="`#${link.id}`"
            @click.prevent="go(link.id)"
            class="group flex items-baseline gap-4 border-b hairline py-3"
          >
            <span class="label-mono text-blood">0{{ i + 1 }}</span>
            <span class="display text-5xl text-bone transition-colors group-hover:text-blood">{{ link.label }}</span>
          </a>
        </nav>
        <button @click="book" class="btn-primary w-full">
          Réserver ma place · {{ formatPrice(event.price) }}
          <ArrowRight class="h-4 w-4" />
        </button>
      </div>
    </Transition>
  </header>
</template>
