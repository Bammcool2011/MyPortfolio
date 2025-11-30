<template>
  <section
    class="flex flex-col items-center gap-4 px-4 py-24 lg:px-6"
    aria-label="Activities Section"
  >
    <h1
      class="mb-4 text-center text-3xl font-semibold text-white lg:text-4xl xl:text-5xl"
    >
      ⌈ Activities ⌋
    </h1>
    <div
      class="relative grid w-full max-w-[80dvw] grid-cols-1 gap-6 lg:grid-cols-3"
    >
      <!-- Dashed vertical lines for lg and up -->
      <div
        class="absolute top-0 bottom-0 left-1/3 z-10 hidden w-0.5 border-l-2 border-dashed border-zinc-400 lg:block"
      />
      <div
        class="absolute top-0 bottom-0 left-2/3 z-10 hidden w-0.5 border-l-2 border-dashed border-zinc-400 lg:block"
      />

      <UCard
        v-for="(activity, idx) in activitiesData"
        :key="idx"
        variant="soft"
        :ui="{ root: 'bg-transparent divide-y-0' }"
        class="text-white shadow"
        tabindex="0"
        :aria-label="activity.title"
      >
        <template #header>
          <NuxtImg
            :src="activity.img"
            :alt="activity.title || 'Activity image'"
            class="h-72 w-full rounded object-cover"
            loading="lazy"
            format="webp"
          />
        </template>
        <h2 class="mb-2 text-center text-xl font-bold lg:text-2xl">
          {{ activity.title }}
        </h2>
        <h3 class="mb-2 text-center text-base text-zinc-300 lg:text-lg">
          {{ activity.position }}
        </h3>
        <p class="text-center text-sm lg:text-base">{{ activity.desc }}</p>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import activitiesData from "~/data/activitiesData.json";
</script>
