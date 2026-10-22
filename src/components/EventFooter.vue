<script setup>
import { event } from '../data/event'
</script>

<template>
  <footer class="relative border-t hairline pb-28 pt-16 md:pb-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-6">
          <img src="/brand/logo-flemmard-club.png" alt="Flemmard Club" class="h-14 w-auto -rotate-3" loading="lazy" />
          <span class="h-10 w-px bg-bone/15"></span>
          <p class="text-2xl font-extrabold leading-none tracking-tight text-bone">
            out of<br />context<span class="text-blood">*</span>
          </p>
        </div>

        <ul class="flex flex-wrap items-center gap-x-3 gap-y-2">
          <li v-for="(pillar, i) in event.pillars" :key="pillar" class="label-mono flex items-center gap-3 text-bone-dim">
            <span v-if="i > 0" class="text-blood">/</span>{{ pillar }}
          </li>
        </ul>
      </div>

      <div class="mt-12 flex flex-col gap-6 border-t hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-4">
          <img src="/brand/logo-monsieur-flemme-cream.png" alt="Monsieur Flemme" class="h-7 w-auto opacity-80" loading="lazy" />
          <p class="label-mono text-bone-dim">Une communauté Monsieur Flemme</p>
        </div>

        <ul v-if="event.socials.length" class="flex gap-5">
          <li v-for="social in event.socials" :key="social.url">
            <a :href="social.url" target="_blank" rel="noopener" class="label-mono text-bone-dim hover:text-bone">{{ social.label }}</a>
          </li>
        </ul>

        <p class="label-mono text-bone-dim/60">© {{ new Date().getFullYear() }} Flemmard Club</p>
      </div>
    </div>
  </footer>
</template>
