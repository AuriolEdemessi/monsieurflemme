import { reactive, computed } from 'vue'

const state = reactive({
  items: [],
  isOpen: false,
  wishlist: [],
  quickViewProduct: null,
})

export function useCart() {
  const totalItems = computed(() =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const subtotal = computed(() =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  const freeShippingThreshold = 80
  const freeShippingProgress = computed(() =>
    Math.min(100, Math.round((subtotal.value / freeShippingThreshold) * 100))
  )
  const remainingForFreeShipping = computed(() =>
    Math.max(0, freeShippingThreshold - subtotal.value)
  )

  function addToCart(product, size = 'L', quantity = 1) {
    const existingIndex = state.items.findIndex(
      (item) => item.id === product.id && item.selectedSize === size
    )

    if (existingIndex > -1) {
      state.items[existingIndex].quantity += quantity
    } else {
      state.items.push({
        ...product,
        selectedSize: size,
        quantity,
      })
    }
    state.isOpen = true
  }

  function removeFromCart(index) {
    state.items.splice(index, 1)
  }

  function updateQuantity(index, delta) {
    const item = state.items[index]
    if (!item) return
    const newQty = item.quantity + delta
    if (newQty <= 0) {
      removeFromCart(index)
    } else {
      item.quantity = newQty
    }
  }

  function clearCart() {
    state.items = []
  }

  function toggleCart() {
    state.isOpen = !state.isOpen
  }

  function openCart() {
    state.isOpen = true
  }

  function closeCart() {
    state.isOpen = false
  }

  function toggleWishlist(product) {
    const idx = state.wishlist.findIndex((p) => p.id === product.id)
    if (idx > -1) {
      state.wishlist.splice(idx, 1)
      return false
    } else {
      state.wishlist.push(product)
      return true
    }
  }

  function isInWishlist(productId) {
    return state.wishlist.some((p) => p.id === productId)
  }

  function openQuickView(product) {
    state.quickViewProduct = product
  }

  function closeQuickView() {
    state.quickViewProduct = null
  }

  return {
    state,
    totalItems,
    subtotal,
    freeShippingThreshold,
    freeShippingProgress,
    remainingForFreeShipping,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    toggleWishlist,
    isInWishlist,
    openQuickView,
    closeQuickView,
  }
}
