<template>
  <div id="hobbies" class="container mx-auto px-6">
    <div class="mb-16">
      <h1 class="mb-4 text-center text-5xl font-semibold text-white">
        ⌈ Hobbies ⌋
      </h1>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(hobby, idx) in hobbyData"
          :key="idx"
          class="flex h-auto min-h-[180px] w-full flex-col items-center rounded-lg border border-transparent bg-[#1a222c] p-4 shadow transition-all duration-300 hover:border-gray-600 sm:w-[350px] sm:flex-row sm:items-center sm:p-6 md:w-[400px] lg:w-[550px]"
        >
          <div
            class="mb-2 flex justify-center text-4xl sm:mr-6 sm:mb-0 sm:text-5xl md:text-6xl"
          >
            {{ hobby.icon }}
          </div>
          <div class="text-center sm:text-left">
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
  </div>
</template>

<script setup lang="ts">
import hobbyData from "~/data/hobbyData.json";
</script>
