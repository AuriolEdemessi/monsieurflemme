<script setup>
import { useToast } from '../composables/useToast'
import { CheckCircle2, AlertCircle, Info } from 'lucide-vue-next'

const { toasts } = useToast()
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 pointer-events-none max-w-sm w-full px-4">
    <transition-group
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-4 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="pointer-events-auto bg-black text-white p-4 border-2 border-[#F4EBD9] shadow-[6px_6px_0px_0px_#5C241C] flex items-center gap-3"
      >
        <CheckCircle2 v-if="toast.type === 'success'" class="w-5 h-5 text-emerald-400 shrink-0" />
        <AlertCircle v-else-if="toast.type === 'error'" class="w-5 h-5 text-red-400 shrink-0" />
        <Info v-else class="w-5 h-5 text-blue-400 shrink-0" />
        
        <p class="font-mono text-xs font-bold tracking-wide">
          {{ toast.message }}
        </p>
      </div>
    </transition-group>
  </div>
</template>
