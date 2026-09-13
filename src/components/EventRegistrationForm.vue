<script setup>
import { ref, computed } from 'vue'
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Ticket, Sparkles, User, Mail, Phone, Music } from 'lucide-vue-next'

// Form fields
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

function buildWhatsAppUrl() {
  const beninTargetNumber = '2290191319357'

  const messageLines = [
    `👋 *NOUVELLE RÉSERVATION — FLEMMARD CLUB (CINÉ DÉBRIEF KARAOKÉ)*`,
    ``,
    `Bonjour l'équipe Monsieur Flemme ! Je viens de remplir le formulaire sur le site pour la soirée du Vendredi 18 Septembre 2026 à 20h.`,
    ``,
    `📋 *DÉTAILS DU PARTICIPANT :*`,
    `• Nom complet : ${fullName.value.trim()}`,
    `• Téléphone / WhatsApp : ${whatsappPhone.value.trim()}`,
    `• Email : ${email.value.trim()}`,
    ``,
    `🎟️ *COMMANDE DE PASS :*`,
    `• Formule : Pass Solo Flemmard (3 000 FCFA / place)`,
    `• Nombre de pass : ${quantity.value}`,
    karaokeSong.value ? `• Chanson Karaoké souhaitée : ${karaokeSong.value.trim()}` : null,
    ``,
    `💰 *TOTAL À RÉGLER :* ${calculatedTotal.value.toLocaleString('fr-FR')} FCFA`,
    ``,
    `Merci de me communiquer les instructions pour finaliser le paiement Mobile Money (MTN MoMo) et recevoir mon pass digital ! 🔥`
  ].filter(line => line !== null).join('\n')

  return `https://wa.me/${beninTargetNumber}?text=${encodeURIComponent(messageLines)}`
}

function handleSubmit() {
  if (!fullName.value || !whatsappPhone.value || !email.value) {
    alert('Veuillez renseigner votre nom, téléphone WhatsApp et adresse email.')
    return
  }

  isSubmitting.value = true
  const waUrl = buildWhatsAppUrl()

  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    window.open(waUrl, '_blank')
  }, 600)
}
</script>

<template>
  <section id="inscription" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
    
    <!-- Header -->
    <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-2 sm:mb-3">
        <Sparkles class="w-3.5 h-3.5 text-amber-300" />
        <span>RÉSERVATION OFFICIELLE</span>
      </div>
      <h2 class="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black">
        RÉSERVE TA PLACE EN 1 MINUTE
      </h2>
      <p class="font-sans text-xs sm:text-sm text-black/70 mt-2 px-2">
        Remplis tes informations ci-dessous pour être redirigé(e) vers WhatsApp avec notre numéro officiel <strong class="text-[#5C241C]">(+229 01 91 31 93 57)</strong> afin de valider ton paiement Mobile Money (MTN MoMo).
      </p>
    </div>

    <!-- Main Form Box -->
    <div class="bg-white border-2 border-black shadow-[6px_6px_0px_0px_#000000] sm:shadow-[12px_12px_0px_0px_#000000] p-4 sm:p-10 relative overflow-hidden">
      
      <!-- Top Form Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b-2 border-black gap-2 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <span class="font-mono text-[10px] sm:text-xs font-bold text-[#5C241C] uppercase">// ÉTAPE UNIQUE</span>
          <h3 class="font-heading font-black text-lg sm:text-2xl text-black uppercase">
            FORMULAIRE D'INSCRIPTION
          </h3>
        </div>
        <div class="bg-[#F4EBD9] border border-black px-2.5 py-1 sm:px-3 sm:py-1.5 self-start sm:self-auto flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold">
          <Ticket class="w-3.5 h-3.5 text-black" />
          <span>VENDREDI 18 SEPTEMBRE 2026 — 20H • 30 PLACES MAX</span>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5 sm:space-y-6">
        
        <!-- Row 1: Nom & Email -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label class="block font-mono text-xs font-bold uppercase tracking-wider text-black mb-1.5 flex items-center gap-1.5">
              <User class="w-3.5 h-3.5" />
              <span>NOM & PRÉNOM *</span>
            </label>
            <input
              v-model="fullName"
              type="text"
              required
              placeholder="Ex : Joe Flem"
              class="w-full bg-[#F8F7F5] border-2 border-black p-3 text-sm font-sans focus:outline-none focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label class="block font-mono text-xs font-bold uppercase tracking-wider text-black mb-1.5 flex items-center gap-1.5">
              <Mail class="w-3.5 h-3.5" />
              <span>ADRESSE EMAIL *</span>
            </label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="Ex : monemail@gmail.com"
              class="w-full bg-[#F8F7F5] border-2 border-black p-3 text-sm font-sans focus:outline-none focus:bg-white transition-colors"
            />
          </div>
        </div>

        <!-- Row 2: Téléphone WhatsApp & Nombre de pass -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label class="block font-mono text-xs font-bold uppercase tracking-wider text-black mb-1.5 flex items-center gap-1.5">
              <Phone class="w-3.5 h-3.5 text-emerald-600" />
              <span>NUMÉRO WHATSAPP *</span>
            </label>
            <input
              v-model="whatsappPhone"
              type="tel"
              required
              placeholder="Ex : +229 01 91 31 93 57"
              class="w-full bg-[#F8F7F5] border-2 border-black p-3 text-sm font-sans focus:outline-none focus:bg-white transition-colors"
            />
            <span class="text-[9px] sm:text-[10px] font-mono text-black/60 mt-1 block">
              Pour recevoir ton pass digital d'accès à l'événement.
            </span>
          </div>

          <div>
            <label class="block font-mono text-xs font-bold uppercase tracking-wider text-black mb-1.5 flex items-center gap-1.5">
              <Ticket class="w-3.5 h-3.5 text-[#2B78C4]" />
              <span>NOMBRE DE PASS (3 000 FCFA / PLACE)</span>
            </label>
            <div class="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                @click="quantity = Math.max(1, quantity - 1)"
                class="w-11 h-11 sm:w-12 sm:h-12 bg-black text-white font-mono text-base font-bold flex items-center justify-center hover:bg-[#5C241C] transition-colors active:scale-95"
              >
                -
              </button>
              <span class="w-16 sm:w-20 text-center font-mono font-bold text-base sm:text-lg border-2 border-black py-2.5 bg-[#F8F7F5]">
                {{ quantity }}
              </span>
              <button
                type="button"
                @click="quantity = Math.min(10, quantity + 1)"
                class="w-11 h-11 sm:w-12 sm:h-12 bg-black text-white font-mono text-base font-bold flex items-center justify-center hover:bg-[#5C241C] transition-colors active:scale-95"
              >
                +
              </button>
              <span class="font-mono text-xs text-black/70 font-semibold pl-1">
                {{ quantity > 1 ? `${quantity} places solo` : '1 place solo' }}
              </span>
            </div>
            <span class="text-[9px] sm:text-[10px] font-mono text-black/60 mt-1 block">
              Tu viens entre ami(e)s ? Ajuste simplement le nombre de places ici.
            </span>
          </div>
        </div>

        <!-- Row 3: Karaoké Favorite Song (Fun touch) -->
        <div>
          <label class="block font-mono text-xs font-bold uppercase tracking-wider text-black mb-1.5 flex items-center gap-1.5">
            <Music class="w-3.5 h-3.5 text-purple-600" />
            <span>CHANSON POUR LE KARAOKÉ (OPTIONNEL)</span>
          </label>
          <input
            v-model="karaokeSong"
            type="text"
            placeholder="Ex : Céline Dion, Burna Boy, Asake, Dadju, Vano Baby, Tayc..."
            class="w-full bg-[#F8F7F5] border-2 border-black p-3 text-sm font-sans focus:outline-none focus:bg-white transition-colors"
          />
        </div>

        <!-- Order Summary Recap Box -->
        <div class="bg-[#F4EBD9] border-2 border-black p-4 sm:p-6 space-y-2.5">
          <div class="flex justify-between items-center text-[11px] sm:text-xs font-mono font-bold border-b border-black/20 pb-2">
            <span class="uppercase">RÉSUMÉ DE LA COMMANDE :</span>
            <span class="text-[#5C241C]">Pass Solo Flemmard (x{{ quantity }})</span>
          </div>

          <div class="flex justify-between items-center text-sm sm:text-lg font-heading font-black text-black pt-1">
            <span>MONTANT TOTAL :</span>
            <span class="text-xl sm:text-2xl text-[#2B78C4]">
              {{ calculatedTotal.toLocaleString('fr-FR') }} FCFA
            </span>
          </div>
          <p class="text-[9px] sm:text-[10px] font-mono text-black/60">
            ℹ️ Redirection vers WhatsApp (+229 01 91 31 93 57) avec le récapitulatif pré-rempli pour effectuer le paiement Mobile Money (MTN MoMo).
          </p>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 sm:py-5 bg-[#25D366] hover:bg-[#1EBE5D] text-black border-2 border-black font-mono font-black text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-[4px_4px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000] active:scale-98 cursor-pointer"
          >
            <MessageCircle class="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
            <span class="truncate">{{ isSubmitting ? 'OUVERTURE...' : `RÉSERVER SUR WHATSAPP (${calculatedTotal.toLocaleString('fr-FR')} FCFA)` }}</span>
            <ArrowRight class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </button>
        </div>

        <!-- Security & Reassurance -->
        <div class="pt-3 border-t border-black/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] font-mono text-black/70 text-center">
          <div class="flex items-center gap-1">
            <ShieldCheck class="w-3.5 h-3.5 text-emerald-600" />
            <span>Numéro Officiel : 01 91 31 93 57</span>
          </div>
          <div class="flex items-center gap-1">
            <CheckCircle2 class="w-3.5 h-3.5 text-emerald-600" />
            <span>Paiement MTN MoMo</span>
          </div>
        </div>

      </form>

    </div>
  </section>
</template>
