import { reactive } from 'vue'

const toasts = reactive([])

export function useToast() {
  function showToast(message, type = 'success', duration = 3000) {
    const id = Date.now() + Math.random()
    toasts.push({ id, message, type })
    setTimeout(() => {
      const idx = toasts.findIndex((t) => t.id === id)
      if (idx > -1) toasts.splice(idx, 1)
    }, duration)
  }

  return {
    toasts,
    showToast,
  }
}
