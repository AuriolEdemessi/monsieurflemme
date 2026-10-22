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

function fileName(src) {
  return `flemmard-club-${src.split('/').pop()}`
}
</script>

<template>
  <section id="affiche" class="relative overflow-hidden border-t hairline py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p v-reveal class="label-mono flex items-center gap-3 text-bone-dim">
            <span class="text-blood">06</span> Les affiches
          </p>
          <h2 v-reveal="100" class="display mt-6 text-[clamp(3rem,8vw,6.5rem)] text-bone">
            Fais tourner <br />à ta <span class="text-blood">squad</span>
          </h2>
          <p v-reveal="200" class="mt-6 max-w-md text-lg text-bone-dim">
            Trois affiches, une soirée. Envoie-les à celles et ceux qui ont la flemme de sortir. Ils viendront.
          </p>
        </div>
        <button v-reveal="300" @click="share" class="btn-primary self-start lg:self-auto">
          <Check v-if="shared" class="h-4 w-4" />
          <Share2 v-else class="h-4 w-4" />
          Partager l'événement
        </button>
      </div>
    </div>

    <!-- Défilement horizontal sur mobile, grille sur desktop -->
    <ul class="mx-auto mt-14 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:gap-6 sm:px-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-8">
      <li
        v-for="(poster, i) in event.posters"
        :key="poster.src"
        v-reveal="i * 120"
        class="w-[78%] shrink-0 snap-center sm:w-[45%] lg:w-auto"
      >
        <a :href="poster.src" target="_blank" rel="noopener" class="group block overflow-hidden border hairline">
          <img
            :src="poster.src"
            :alt="`Affiche ${i + 1} sur 3 : ${poster.label}`"
            class="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </a>
        <div class="mt-4 flex items-center justify-between gap-4">
          <p class="label-mono text-bone-dim"><span class="text-blood">0{{ i + 1 }}</span> {{ poster.label }}</p>
          <a
            :href="poster.src"
            :download="fileName(poster.src)"
            class="grid h-10 w-10 shrink-0 place-items-center border hairline text-bone transition-colors hover:border-bone"
            :aria-label="`Télécharger l'affiche ${poster.label}`"
          >
            <Download class="h-4 w-4" />
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>
