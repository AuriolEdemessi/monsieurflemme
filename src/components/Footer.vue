<script setup>
import { ref } from 'vue'
import { FOOTER_LINKS } from '../data/products'
import { useToast } from '../composables/useToast'
import { ArrowRight, Check } from 'lucide-vue-next'

const { showToast } = useToast()
const email = ref('')
const isSubscribed = ref(false)

function handleNewsletter() {
  if (!email.value || !email.value.includes('@')) {
    showToast('Veuillez entrer une adresse email valide', 'error')
    return
  }
  isSubscribed.value = true
  showToast('Bienvenue au Flemmard Club ! Vous recevrez nos futurs drops en avant-première.')
  email.value = ''
}
</script>

<template>
  <footer class="bg-black text-white pt-16 pb-12 border-t-4 border-[#5C241C]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Section: Brand Statement & Newsletter -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        <!-- Left: Brand Info & Mascot -->
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <img 
              src="/brand/Flems.png" 
              alt="Monsieur Flemme" 
              class="w-10 h-10 object-contain"
            />
            <span class="font-heading font-black text-2xl tracking-tighter uppercase text-white">
              MONSIEUR FLEMME
            </span>
          </div>

          <p class="font-sans text-xs text-white/70 max-w-sm leading-relaxed">
            Marque de streetwear indépendante parisienne. Vêtements haut de gamme pensés pour le confort absolu et l'élégance décontractée.
          </p>

          <div class="pt-2 flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span class="font-mono text-xs text-white/90 font-bold tracking-wider">
              FLEMMARD CLUB // PARIS
            </span>
          </div>
        </div>

        <!-- Right: Newsletter Signup -->
        <div class="lg:col-span-7 space-y-4">
          <span class="font-mono text-xs font-bold tracking-widest text-amber-300 uppercase">
            // NEWSLETTER EXCLUSIVE
          </span>
          <h4 class="font-heading font-black text-2xl tracking-tight uppercase text-white">
            REÇOIS LES PROCHAINS DROPS EN AVANT-PREMIÈRE
          </h4>
          <p class="font-sans text-xs text-white/60">
            Inscris-toi pour débloquer 10% de réduction immédiate avec le code <strong class="text-white">FLEMME10</strong>.
          </p>

          <form @submit.prevent="handleNewsletter" class="flex flex-col sm:flex-row gap-2 pt-2">
            <input
              v-model="email"
              type="email"
              placeholder="Ton adresse email..."
              class="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-xs font-mono text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
            />
            <button
              type="submit"
              class="px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-amber-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>{{ isSubscribed ? 'INSCRIT !' : "S'INSCRIRE" }}</span>
              <Check v-if="isSubscribed" class="w-4 h-4" />
              <ArrowRight v-else class="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      <!-- Links Grid (3 columns) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs font-mono">
        
        <!-- Column 1: Boutique -->
        <div class="space-y-3">
          <h5 class="font-bold text-white uppercase tracking-widest text-[11px] border-b border-white/20 pb-1">
            BOUTIQUE
          </h5>
          <ul class="space-y-2 text-white/70">
            <li v-for="link in FOOTER_LINKS.boutique" :key="link.label">
              <a href="#selection-flemme" class="hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 2: Service & Aide -->
        <div class="space-y-3">
          <h5 class="font-bold text-white uppercase tracking-widest text-[11px] border-b border-white/20 pb-1">
            SERVICE CLIENT
          </h5>
          <ul class="space-y-2 text-white/70">
            <li v-for="link in FOOTER_LINKS.aide" :key="link.label">
              <a href="#" class="hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Légal -->
        <div class="space-y-3">
          <h5 class="font-bold text-white uppercase tracking-widest text-[11px] border-b border-white/20 pb-1">
            INFORMATIONS
          </h5>
          <ul class="space-y-2 text-white/70">
            <li v-for="link in FOOTER_LINKS.legal" :key="link.label">
              <a href="#" class="hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Brand sticker badge & socials -->
        <div class="space-y-3 col-span-2 md:col-span-1">
          <h5 class="font-bold text-white uppercase tracking-widest text-[11px] border-b border-white/20 pb-1">
            REJOINDRE
          </h5>
          <p class="text-white/60 text-xs">
            Suis nos aventures et nos coulisses sur Instagram & TikTok.
          </p>
          <div class="flex gap-2 pt-2">
            <a href="#" class="px-3 py-1.5 bg-white/10 border border-white/20 hover:bg-white hover:text-black font-bold transition-colors">
              INSTAGRAM
            </a>
            <a href="#" class="px-3 py-1.5 bg-white/10 border border-white/20 hover:bg-white hover:text-black font-bold transition-colors">
              TIKTOK
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar: Copyright & Payment icons -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <p>© 2026 MONSIEUR FLEMME. Tous droits réservés. Conçu pour les flemmards avec passion.</p>
        <div class="flex items-center gap-3">
          <span class="px-2 py-1 bg-white/10 border border-white/20 text-[10px]">STRIPE</span>
          <span class="px-2 py-1 bg-white/10 border border-white/20 text-[10px]">APPLE PAY</span>
          <span class="px-2 py-1 bg-white/10 border border-white/20 text-[10px]">VISA / MASTERCARD</span>
        </div>
      </div>

    </div>
  </footer>
</template>
