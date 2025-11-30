<template>
  <div id="about" class="py-10 pt-24">
    <h1
      class="flex scroll-m-20 justify-center text-3xl font-semibold tracking-tight text-white lg:text-4xl xl:text-5xl"
    >
      ⌈ About ⌋
    </h1>
    <div
      class="mt-16 flex flex-col gap-12 px-4 lg:flex-row lg:justify-center lg:gap-16 lg:px-28"
    >
      <div
        v-for="section in aboutData"
        :key="section.title"
        class="mx-auto max-w-xl flex-1 lg:mx-0"
      >
        <div
          class="mb-2 text-center text-2xl text-[#e31b6d] lg:text-3xl xl:text-4xl"
        >
          {{ section.title }}
        </div>
        <p
          class="mt-4 text-center text-base font-thin text-white lg:text-lg xl:text-xl"
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
