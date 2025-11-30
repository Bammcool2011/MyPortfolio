<template>
  <div id="hobbies" class="px-4 pt-24">
    <div class="mb-16">
      <h1 class="mb-4 text-center text-5xl font-semibold text-white">
        ⌈ Hobbies ⌋
      </h1>
    </div>
    <div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
      <div
        v-for="(hobby, idx) in hobbyData"
        :key="idx"
        class="flex flex-col items-center rounded-lg border border-transparent bg-[#1a222c] p-6 shadow transition-all duration-300 hover:border-gray-600"
      >
        <div class="mb-4 flex justify-center text-5xl">
          {{ hobby.icon }}
        </div>
        <div class="text-center">
          <h2 class="mb-2 text-xl font-bold text-white sm:text-2xl">
            {{ hobby.title }}
          </h2>
          <p class="text-sm text-gray-300 sm:text-base">
            {{ hobby.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import hobbyData from "~/data/hobbyData.json";
</script>
