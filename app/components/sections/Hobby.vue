<template>
  <div id="hobbies" class="container mx-auto px-6">
    <div class="mb-16">
      <h1 class="text-5xl text-white font-semibold text-center mb-4">
        ⌈ Hobbies ⌋
      </h1>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-wrap gap-8 justify-center">
        <div
          v-for="(hobby, idx) in hobbyData"
          :key="idx"
          class="bg-[#1a222c] w-full sm:w-[350px] md:w-[400px] lg:w-[550px] h-auto min-h-[180px] flex flex-col sm:flex-row items-center sm:items-center p-4 sm:p-6 rounded-lg shadow border border-transparent transition-all duration-300 hover:border-gray-600"
        >
          <div
            class="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-0 sm:mr-6 flex justify-center"
          >
            {{ hobby.icon }}
          </div>
          <div class="text-center sm:text-left">
            <h2 class="text-xl sm:text-2xl font-bold text-white mb-2">
              {{ hobby.title }}
            </h2>
            <p class="text-gray-300 text-sm sm:text-base">
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
