<script setup>
import { ref, computed } from 'vue'
import { CheckCircle2, MessageCircle, ArrowUpRight, ShieldCheck, Ticket, User, Mail, Phone, Music, Plus, Minus } from 'lucide-vue-next'

const fullName = ref('')
const whatsappPhone = ref('')
const email = ref('')
const quantity = ref(1)
const karaokeSong = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const PASS_PRICE = 3000

const calculatedTotal = computed(() => {
  return PASS_PRICE * quantity.value
})

function increment() {
  if (quantity.value < 10) quantity.value++
}

function decrement() {
  if (quantity.value > 1) quantity.value--
}

function buildWhatsAppUrl() {
  const beninTargetNumber = '2290191319357'

  const messageLines = [
    `🎬 *NOUVELLE RÉSERVATION — FLEMMARD CLUB (ÉDITION #02)*`,
    ``,
    `Bonjour l'équipe Monsieur Flemme ! Je viens de remplir le formulaire sur le site pour la soirée du Vendredi 02 Octobre 2026 à 20h à Akpakpa Centre.`,
    ``,
    `📋 *DÉTAILS DU PARTICIPANT :*`,
    `• Nom complet : ${fullName.value.trim()}`,
    `• Téléphone / WhatsApp : ${whatsappPhone.value.trim()}`,
    `• Email : ${email.value.trim()}`,
    ``,
    `🎟️ *COMMANDE DE PASS :*`,
    `• Formule : Pass Solo Flemmard (3 000 FCFA / place)`,
    `• Nombre de pass : ${quantity.value}`,
    karaokeSong.value ? `• Son Karaoké souhaité : ${karaokeSong.value.trim()}` : null,
    ``,
    `💰 *TOTAL À RÉGLER :* ${calculatedTotal.value.toLocaleString('fr-FR')} FCFA`,
    ``,
    `Merci de me transmettre les instructions pour le paiement Mobile Money (MoMo / Moov) et mon pass digital ! 🔥`
  ].filter(line => line !== null).join('\n')

  return `https://wa.me/${beninTargetNumber}?text=${encodeURIComponent(messageLines)}`
}

function handleSubmit() {
  if (!fullName.value || !whatsappPhone.value || !email.value) {
    alert('Veuillez renseigner votre nom, téléphone WhatsApp et email.')
    return
  }

  isSubmitting.value = true
  const waUrl = buildWhatsAppUrl()

  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    window.open(waUrl, '_blank')
  }, 500)
}
</script>

<template>
  <section id="inscription" class="relative bg-[#0B0B0C] text-white py-16 sm:py-28 border-b border-white/10 monodrift-grid">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header in Monodrift Editorial Style -->
      <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span class="inline-block font-mono text-xs text-[#52FF9D] uppercase tracking-widest mb-3">
          [ 03 // RÉSERVATION INSTANTANÉE ]
        </span>
        <h2 class="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
          PRENDS TA PLACE AU CLUB.
        </h2>
        <p class="font-sans text-sm sm:text-base text-[#8E8E93] mt-3">
          Remplis le formulaire en 30 secondes. Tu es ensuite redirigé(e) directement vers WhatsApp (+229 01 91 31 93 57) pour valider ton pass auprès de notre équipe.
        </p>
      </div>

      <!-- Main Monodrift Form Box -->
      <div class="relative bg-[#141418] border border-white/15 rounded-3xl p-6 sm:p-12 shadow-2xl">
        
        <!-- Header of Form -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3 mb-8">
          <div>
            <span class="font-mono text-xs text-[#52FF9D] uppercase tracking-wider block">// VALIDATION EN 1 ÉTAPE</span>
            <h3 class="font-heading font-black text-xl sm:text-2xl text-white uppercase mt-0.5">
              COORDINATES & PASS
            </h3>
          </div>
          <div class="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#A0A0A5] flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#52FF9D]"></span>
            <span>VENDREDI 02 OCT. • 20H00 • AKPAKPA</span>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <!-- Nom & Email Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block font-mono text-xs text-[#84848A] uppercase tracking-wider">
                [ 01 // NOM COMPLET ] *
              </label>
              <div class="relative">
                <input
                  v-model="fullName"
                  type="text"
                  required
                  placeholder="Ex: Auriol Edemessi"
                  class="w-full bg-[#1A1A20] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#52FF9D] focus:ring-1 focus:ring-[#52FF9D] transition-colors font-mono"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="block font-mono text-xs text-[#84848A] uppercase tracking-wider">
                [ 02 // EMAIL ] *
              </label>
              <div class="relative">
                <input
                  v-model="email"
                  type="email"
                  required
                  placeholder="nom@exemple.com"
                  class="w-full bg-[#1A1A20] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#52FF9D] focus:ring-1 focus:ring-[#52FF9D] transition-colors font-mono"
                />
              </div>
            </div>
          </div>

          <!-- Phone WhatsApp & Quantity -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block font-mono text-xs text-[#84848A] uppercase tracking-wider">
                [ 03 // NUMÉRO WHATSAPP ] *
              </label>
              <div class="relative">
                <input
                  v-model="whatsappPhone"
                  type="tel"
                  required
                  placeholder="Ex: +229 97 00 00 00"
                  class="w-full bg-[#1A1A20] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#52FF9D] focus:ring-1 focus:ring-[#52FF9D] transition-colors font-mono"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="block font-mono text-xs text-[#84848A] uppercase tracking-wider">
                [ 04 // NOMBRE DE PLACES ]
              </label>
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="decrement"
                  class="w-12 h-12 rounded-xl bg-[#1A1A20] border border-white/10 hover:border-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <Minus class="w-4 h-4" />
                </button>
                <div class="flex-1 bg-[#1A1A20] border border-white/10 rounded-xl py-3 text-center font-mono font-bold text-lg text-white">
                  {{ quantity }} {{ quantity > 1 ? 'Places' : 'Place' }}
                </div>
                <button
                  type="button"
                  @click="increment"
                  class="w-12 h-12 rounded-xl bg-[#1A1A20] border border-white/10 hover:border-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <Plus class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <!-- Chanson Karaoké (Optionnel) -->
          <div class="space-y-2">
            <label class="block font-mono text-xs text-[#84848A] uppercase tracking-wider">
              [ 05 // UNE CHANSON QUE TU VEUX CHANTER AU KARAOKÉ ? ] (OPTIONNEL)
            </label>
            <input
              v-model="karaokeSong"
              type="text"
              placeholder="Ex: Burna Boy - Last Last, Céline Dion, Stromae..."
              class="w-full bg-[#1A1A20] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#52FF9D] focus:ring-1 focus:ring-[#52FF9D] transition-colors font-mono"
            />
          </div>

          <!-- Total Calculation Banner -->
          <div class="p-5 rounded-2xl bg-[#1A1A20] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span class="block font-mono text-xs text-[#84848A] uppercase tracking-wider">TOTAL À RÉGLER VIA MOBILE MONEY</span>
              <span class="font-mono text-xs text-white/50">Pass Solo : 3 000 FCFA × {{ quantity }}</span>
            </div>
            <div class="text-right flex items-baseline gap-2">
              <span class="font-heading font-black text-3xl sm:text-4xl text-[#52FF9D]">
                {{ calculatedTotal.toLocaleString('fr-FR') }}
              </span>
              <span class="font-mono text-xs text-white/80 uppercase">FCFA</span>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 sm:py-5 rounded-full bg-white text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#52FF9D] hover:shadow-[0_0_30px_rgba(82,255,157,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer transform active:scale-98 disabled:opacity-50"
          >
            <MessageCircle class="w-4 h-4 text-emerald-700" />
            <span>{{ isSubmitting ? 'PATIENTEZ...' : 'VALIDER MA RÉSERVATION VIA WHATSAPP' }}</span>
            <ArrowUpRight class="w-4 h-4" />
          </button>

          <!-- Disclaimer / Legal Note in Monodrift style -->
          <p class="text-center font-mono text-[11px] text-[#71717A] pt-2">
            En envoyant ce formulaire, tu es redirigé vers le WhatsApp officiel de Monsieur Flemme. Aucune donnée n'est revendue.
          </p>

        </form>

      </div>

    </div>
  </section>
</template>
