<template>
  <div id="about" class="py-10">
    <h1
      class="flex scroll-m-20 justify-center text-4xl font-semibold tracking-tight text-white lg:text-5xl"
    >
      ⌈ About ⌋
    </h1>
    <div
      class="mt-16 flex flex-col gap-12 px-2 md:flex-row md:justify-center md:gap-16 md:px-28"
    >
      <div
        v-for="section in aboutData"
        :key="section.title"
        class="mx-auto max-w-xl flex-1 md:mx-0"
      >
        <div class="mb-2 text-center text-4xl text-[#e31b6d]">
          {{ section.title }}
        </div>
        <p
          class="mt-4 text-center text-xl font-thin text-white sm:text-lg md:text-2xl"
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
