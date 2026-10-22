<script setup>
import { ref, computed, watch, nextTick, onUnmounted } from 'vue'
import { X, Minus, Plus, MessageCircle } from 'lucide-vue-next'
import { event, formatPrice } from '../data/event'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['close'])

const quantity = ref(1)
const userName = ref('')
const userPhone = ref('')
const artistCostume = ref('')
const nameInput = ref(null)

const total = computed(() => quantity.value * event.price)

function changeQuantity(delta) {
  quantity.value = Math.min(event.maxTicketsPerOrder, Math.max(1, quantity.value + delta))
}

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
}

watch(() => props.isOpen, async (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
  if (open) {
    window.addEventListener('keydown', onKeydown)
    await nextTick()
    nameInput.value?.focus()
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => window.removeEventListener('keydown', onKeydown))

function handleSubmit() {
  const lines = [
    `🎃 *Réservation — ${event.club} ${event.title} ${event.subtitle}*`,
    `${event.dateLong} · ${event.time} · ${event.venue}, ${event.area}`,
    '',
    `👤 Nom : ${userName.value.trim()}`,
    `📱 WhatsApp : ${userPhone.value.trim()}`,
    `🎟️ Places : ${quantity.value} × ${formatPrice(event.price)} = ${formatPrice(total.value)}`,
  ]
  if (artistCostume.value.trim()) lines.push(`🎭 Déguisé(e) en : ${artistCostume.value.trim()}`)
  lines.push('', 'Je confirme ma réservation, envoyez-moi les infos de paiement 🙏')

  window.open(`https://wa.me/${event.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  emit('close')
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[70] flex items-end justify-center bg-ink/80 backdrop-blur-md sm:items-center sm:p-6"
      @click.self="emit('close')"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ticket-title"
        class="relative max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-3xl border hairline bg-ink-2 sm:rounded-3xl"
      >
        <!-- En-tête façon billet -->
        <div class="paper relative px-6 pb-7 pt-6 sm:px-8">
          <button
            @click="emit('close')"
            class="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-ink/70 transition-colors hover:bg-ink/10 hover:text-ink"
            aria-label="Fermer"
          >
            <X class="h-5 w-5" />
          </button>
          <p class="label-mono text-ink/60">Réservation</p>
          <h3 id="ticket-title" class="display mt-2 text-4xl text-ink">
            Halloween <span class="font-marker text-2xl normal-case text-blood">Special Edition</span>
          </h3>
          <p class="mt-3 text-sm font-semibold text-ink/70">
            {{ event.dateShort }} · {{ event.time }} · {{ event.venue }}, {{ event.area }}
          </p>
          <div class="absolute -bottom-3 left-0 right-0 flex justify-between px-0" aria-hidden="true">
            <span class="-ml-3 h-6 w-6 rounded-full bg-ink-2"></span>
            <span class="mx-4 mt-3 flex-1 border-t-2 border-dashed border-ink/20"></span>
            <span class="-mr-3 h-6 w-6 rounded-full bg-ink-2"></span>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5 px-6 pb-6 pt-8 sm:px-8 sm:pb-8">
          <!-- Quantité -->
          <div class="flex items-center justify-between gap-4 rounded-2xl border hairline p-4">
            <div>
              <p class="font-bold text-bone">Places</p>
              <p class="text-sm text-bone-dim">{{ formatPrice(event.price) }} / personne</p>
            </div>
            <div class="flex items-center gap-3">
              <button
                type="button"
                @click="changeQuantity(-1)"
                :disabled="quantity <= 1"
                class="grid h-10 w-10 place-items-center rounded-full border hairline text-bone transition-colors hover:border-bone disabled:opacity-30"
                aria-label="Retirer une place"
              >
                <Minus class="h-4 w-4" />
              </button>
              <span class="display w-6 text-center text-2xl text-bone tabular-nums" aria-live="polite">{{ quantity }}</span>
              <button
                type="button"
                @click="changeQuantity(1)"
                :disabled="quantity >= event.maxTicketsPerOrder"
                class="grid h-10 w-10 place-items-center rounded-full border hairline text-bone transition-colors hover:border-bone disabled:opacity-30"
                aria-label="Ajouter une place"
              >
                <Plus class="h-4 w-4" />
              </button>
            </div>
          </div>

          <label class="block">
            <span class="label-mono text-bone-dim">Nom ou pseudo</span>
            <input
              ref="nameInput"
              v-model="userName"
              type="text"
              required
              autocomplete="name"
              placeholder="Ex : Kévin le Flemmard"
              class="mt-2 w-full rounded-xl border hairline bg-ink px-4 py-3.5 text-bone placeholder-bone-dim/40 transition-colors focus:border-blood focus:outline-none"
            />
          </label>

          <label class="block">
            <span class="label-mono text-bone-dim">Numéro WhatsApp</span>
            <input
              v-model="userPhone"
              type="tel"
              required
              autocomplete="tel"
              inputmode="tel"
              placeholder="Ex : +229 01 97 00 00 00"
              class="mt-2 w-full rounded-xl border hairline bg-ink px-4 py-3.5 text-bone placeholder-bone-dim/40 transition-colors focus:border-blood focus:outline-none"
            />
          </label>

          <label class="block">
            <span class="label-mono text-bone-dim">Tu viens en quel artiste ? <span class="normal-case tracking-normal text-bone-dim/60">(facultatif)</span></span>
            <input
              v-model="artistCostume"
              type="text"
              placeholder="Garde la surprise ou dis-nous tout"
              class="mt-2 w-full rounded-xl border hairline bg-ink px-4 py-3.5 text-bone placeholder-bone-dim/40 transition-colors focus:border-blood focus:outline-none"
            />
          </label>

          <div class="flex items-baseline justify-between border-t hairline pt-5">
            <span class="label-mono text-bone-dim">Total</span>
            <span class="display text-4xl text-bone">{{ formatPrice(total) }}</span>
          </div>

          <button type="submit" class="btn-primary w-full">
            <MessageCircle class="h-4 w-4" />
            Confirmer sur WhatsApp
          </button>
          <p class="text-center text-xs text-bone-dim">
            On te répond sur WhatsApp pour valider ta place et le paiement. {{ event.capacity }} places au total.
          </p>
        </form>
      </div>
    </div>
  </Transition>
</template>
