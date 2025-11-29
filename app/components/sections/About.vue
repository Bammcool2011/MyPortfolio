<template>
  <div id="about" class="py-10">
    <h1
      class="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl justify-center flex text-white"
    >
      ⌈ About ⌋
    </h1>
    <div
      class="px-2 md:px-28 mt-16 flex flex-col gap-12 md:flex-row md:justify-center md:gap-16"
    >
      <div
        v-for="section in aboutData"
        :key="section.title"
        class="flex-1 max-w-xl mx-auto md:mx-0"
      >
        <div class="text-center text-4xl text-[#e31b6d] mb-2">
          {{ section.title }}
        </div>
        <p
          class="mt-4 text-center text-xl sm:text-lg md:text-2xl text-white font-thin"
        >
          {{ section.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import aboutData from "~/data/aboutData.json";
</script>
