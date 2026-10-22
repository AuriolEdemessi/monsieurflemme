<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Mascotte détourée mise en relief : elle sort d'un disque plat, suit la souris
// (inclinaison 3D) et flotte au-dessus de son ombre.
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
})

const stage = ref(null)
const tilt = ref({ x: 0, y: 0 })
let frame = 0
let reduceMotion = false

function onPointerMove(e) {
  if (reduceMotion || e.pointerType === 'touch' || !stage.value) return
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const r = stage.value.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth
    const dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight
    const clamp = (v) => Math.max(-1, Math.min(1, v * 2))
    tilt.value = { x: clamp(dx), y: clamp(dy) }
  })
}

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.addEventListener('pointermove', onPointerMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <div ref="stage" class="mascot-stage relative aspect-[567/549]">
    <!-- Disque plat derrière la tête : le buste en déborde par le bas et les côtés -->
    <div
      class="absolute left-[9%] top-[-3%] w-[82%] aspect-square rounded-full bg-blood transition-transform duration-500 ease-out"
      :style="{ transform: `translate3d(${tilt.x * -14}px, ${tilt.y * -10}px, 0)` }"
    ></div>

    <!-- Ombre portée au sol -->
    <div class="mascot-shadow absolute bottom-[-6%] left-1/2 h-[6%] w-[60%] rounded-[50%] bg-black/70 blur-xl"></div>

    <div
      class="absolute inset-0 transition-transform duration-500 ease-out [transform-style:preserve-3d]"
      :style="{ transform: `rotateY(${tilt.x * 14}deg) rotateX(${tilt.y * -10}deg)` }"
    >
      <div class="mascot-float absolute inset-0 [transform-style:preserve-3d]">
        <img
          :src="src"
          :alt="alt"
          class="mascot-img absolute inset-0 h-full w-full object-contain"
          fetchpriority="high"
        />
        <!-- Halo de la sucette, posé devant -->
        <span class="mascot-glow pointer-events-none absolute left-[53%] top-[63%] h-[26%] w-[26%] rounded-full"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mascot-stage {
  perspective: 1100px;
}

.mascot-img {
  transform: translateZ(70px);
  filter:
    drop-shadow(0 28px 30px rgb(0 0 0 / 0.55))
    drop-shadow(0 0 36px rgb(255 45 32 / 0.35));
}

.mascot-glow {
  transform: translate(-50%, -50%) translateZ(110px);
  background: radial-gradient(circle, rgb(255 120 90 / 0.55), rgb(255 45 32 / 0.15) 45%, transparent 70%);
  mix-blend-mode: screen;
  animation: glow 2.6s ease-in-out infinite;
}

.mascot-float {
  animation: bob 5s ease-in-out infinite;
}

.mascot-shadow {
  transform: translateX(-50%);
  animation: shadow 5s ease-in-out infinite;
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

@keyframes shadow {
  0%, 100% { opacity: 0.8; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.5; transform: translateX(-50%) scale(0.85); }
}

@keyframes glow {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .mascot-float,
  .mascot-shadow,
  .mascot-glow { animation: none; }
}
</style>
