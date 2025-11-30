<template>
  <div id="hobbies" class="px-4 pt-24">
    <div class="mb-16">
      <h1
        class="mb-4 text-center text-3xl font-semibold text-white lg:text-4xl xl:text-5xl"
      >
        ⌈ Hobbies ⌋
      </h1>
    </div>
    <div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
      <div
        v-for="(hobby, idx) in hobbyData"
        :key="idx"
        class="flex flex-col items-center rounded-lg border border-transparent bg-[#1a222c] p-6 shadow transition-all duration-300 hover:border-gray-600"
      >
        <div class="mb-4 flex justify-center text-4xl lg:text-5xl">
          {{ hobby.icon }}
        </div>
        <div class="text-center">
          <h2 class="mb-2 text-lg font-bold text-white lg:text-xl xl:text-2xl">
            {{ hobby.title }}
          </h2>
          <p class="text-sm text-gray-300 lg:text-base">
            {{ hobby.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import hobbyData from "~/data/landing-page/hobbyData.json";
</script>
