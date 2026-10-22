// v-reveal : fait apparaître l'élément quand il entre dans l'écran.
// v-reveal="150" ajoute un délai en ms.
const observer = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  : null

export const reveal = {
  mounted(el, binding) {
    if (!observer) return
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--delay', `${binding.value}ms`)
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
