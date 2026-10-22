import { ref, computed, onMounted, onUnmounted } from 'vue'

// Compte à rebours jusqu'à une date ISO
export function useCountdown(target) {
  const end = new Date(target).getTime()
  const now = ref(Date.now())
  let timer = null

  const remaining = computed(() => Math.max(0, end - now.value))
  const isOver = computed(() => remaining.value === 0)

  const parts = computed(() => {
    const total = Math.floor(remaining.value / 1000)
    return {
      days: Math.floor(total / 86400),
      hours: Math.floor((total % 86400) / 3600),
      minutes: Math.floor((total % 3600) / 60),
      seconds: total % 60,
    }
  })

  onMounted(() => {
    timer = setInterval(() => { now.value = Date.now() }, 1000)
  })

  onUnmounted(() => clearInterval(timer))

  return { parts, isOver }
}

export const pad = (n) => String(n).padStart(2, '0')
