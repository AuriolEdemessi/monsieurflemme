<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import { event, formatPrice } from '../data/event'

const faqs = [
  {
    q: 'Comment je réserve ma place ?',
    a: `Clique sur « Réserver », indique ton nom, ton numéro WhatsApp et le nombre de places. Ta demande part directement sur notre WhatsApp : on te confirme ta place et on t'envoie les infos de paiement.`,
  },
  {
    q: 'Combien coûte le ticket ?',
    a: `${formatPrice(event.price)} par personne. Il n'y a que ${event.capacity} places, donc premier arrivé, premier servi.`,
  },
  {
    q: 'Quel est le dress code ?',
    a: `${event.dressCode} Version Halloween de préférence. Et si tu manques d'inspiration, l'atelier maquillage sur place s'occupe de ta transformation.`,
  },
  {
    q: "C'est où et à quelle heure ?",
    a: `${event.dateLong}, à partir de 18h, au ${event.venue} à ${event.area} (${event.city}).`,
  },
  {
    q: "Qu'est-ce qu'il y a au programme ?",
    a: `Film d'horreur sur grand écran, karaoké, popcorn & bissap, jeux, atelier maquillage et déguisement en ton artiste préféré. Le tout en musique avec ${event.dj}.`,
  },
  {
    q: "J'ai la flemme. Je viens quand même ?",
    a: `${event.motto} C'est exactement l'esprit du club.`,
  },
]

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="faq" class="relative border-t hairline py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
      <div class="lg:col-span-4">
        <p v-reveal class="label-mono flex items-center gap-3 text-bone-dim">
          <span class="text-blood">07</span> FAQ
        </p>
        <h2 v-reveal="100" class="display mt-6 text-[clamp(3rem,8vw,5.5rem)] text-bone">
          Des <span class="whitespace-nowrap"><span class="text-blood">questions</span>&nbsp;?</span>
        </h2>
      </div>

      <div class="border-t hairline lg:col-span-8">
        <div v-for="(item, i) in faqs" :key="item.q" class="border-b hairline">
          <h3>
            <button
              @click="toggle(i)"
              :aria-expanded="openIndex === i"
              :aria-controls="`faq-${i}`"
              class="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span class="text-lg font-bold text-bone transition-colors group-hover:text-blood sm:text-xl">{{ item.q }}</span>
              <span
                :class="[
                  'grid h-10 w-10 shrink-0 place-items-center border transition-all duration-300',
                  openIndex === i ? 'rotate-45 border-blood bg-blood text-ink' : 'hairline text-bone',
                ]"
              >
                <Plus class="h-4 w-4" />
              </span>
            </button>
          </h3>
          <div
            :id="`faq-${i}`"
            class="grid transition-all duration-300 ease-out"
            :class="openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <p class="overflow-hidden pr-14 text-bone-dim" :class="openIndex === i ? 'pb-6' : ''">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
