<template>
  <section
    class="flex flex-col items-center gap-4 px-4 py-24 md:px-6"
    aria-label="Activities Section"
  >
    <h1 class="mb-4 text-center text-5xl font-semibold text-white">
      ⌈ Activities ⌋
    </h1>
    <div
      class="relative grid w-full max-w-[75dvw] gap-6 sm:grid-cols-1 md:grid-cols-2"
    >
      <!-- Dashed vertical line for md and up -->
      <div
        class="absolute top-0 bottom-0 left-1/2 z-10 hidden w-0.5 border-l-2 border-dashed border-zinc-400 md:block"
      />

      <div
        v-for="(activity, idx) in activitiesData"
        :key="idx"
        class="rounded-lg p-6 text-white shadow"
        tabindex="0"
        :aria-label="activity.title"
      >
        <NuxtImg
          :src="activity.img"
          :alt="activity.title || 'Activity image'"
          class="mb-6 h-72 w-full rounded object-cover"
          loading="lazy"
        />
        <h2 class="mb-2 text-center text-2xl font-bold">
          {{ activity.title }}
        </h2>
        <h3 class="mb-2 text-center text-lg text-zinc-300">
          {{ activity.position }}
        </h3>
        <p class="text-center">{{ activity.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import activitiesData from "~/data/activitiesData.json";
</script>
