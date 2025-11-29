<template>
  <section
    class="flex flex-col gap-4 items-center"
    aria-label="Activities Section"
  >
    <h1 class="text-5xl text-white font-semibold text-center mb-4">
      ⌈ Activities ⌋
    </h1>
    <div
      class="relative grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-[75dvw] w-full"
    >
      <!-- Dashed vertical line for md and up -->
      <div
        class="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 border-l-2 border-dashed border-zinc-400 z-10"
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
          class="w-full h-72 object-cover rounded mb-6"
          loading="lazy"
        />
        <h2 class="text-2xl font-bold mb-2 text-center">
          {{ activity.title }}
        </h2>
        <h3 class="text-lg mb-2 text-center text-zinc-300">
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
