<script setup>
import { ref } from 'vue'
import { Download, Share2, Check } from 'lucide-vue-next'
import { event } from '../data/event'

const shared = ref(false)

async function share() {
  const url = window.location.href
  const text = `${event.club} — ${event.title} ${event.subtitle}, ${event.dateShort} ${event.time} à ${event.venue} (${event.area}). On y va ?`
  if (navigator.share) {
    try {
      await navigator.share({ title: `${event.title} ${event.subtitle}`, text, url })
    } catch {
      // partage annulé
    }
    return
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank', 'noopener')
  shared.value = true
  setTimeout(() => { shared.value = false }, 2500)
}
</script>

<template>
  <section id="affiche" class="relative overflow-hidden border-t hairline py-24 sm:py-32">
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blood/15 blur-[140px]"></div>

    <div class="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div v-reveal class="relative mx-auto w-full max-w-[420px]">
        <div class="tape -top-3 left-6 -rotate-12"></div>
        <div class="tape -right-4 top-10 rotate-[20deg]"></div>
        <img
          :src="event.poster"
          alt="Affiche officielle Flemmard Club Halloween Special Edition"
          class="w-full rotate-2 rounded-sm shadow-[0_40px_80px_rgb(0_0_0/0.7)] transition-transform duration-500 hover:rotate-0"
          loading="lazy"
        />
      </div>

      <div>
        <p v-reveal class="label-mono flex items-center gap-3 text-bone-dim">
          <span class="text-blood">06</span> L'affiche
        </p>
        <h2 v-reveal="100" class="display mt-6 text-[clamp(3rem,8vw,6.5rem)] text-bone">
          Fais tourner <br />à ta <span class="text-blood">squad</span>
        </h2>
        <p v-reveal="200" class="mt-6 max-w-md text-lg text-bone-dim">
          Une soirée, c'est mieux à plusieurs. Envoie l'affiche à celles et ceux qui ont la flemme de sortir. Ils viendront.
        </p>
        <div v-reveal="300" class="mt-10 flex flex-col gap-4 sm:flex-row">
          <button @click="share" class="btn-primary">
            <Check v-if="shared" class="h-4 w-4" />
            <Share2 v-else class="h-4 w-4" />
            Partager l'événement
          </button>
          <a :href="event.poster" download="flemmard-club-halloween.jpg" class="btn-ghost">
            <Download class="h-4 w-4" />
            Télécharger l'affiche
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
