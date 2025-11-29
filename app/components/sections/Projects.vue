<template>
  <section
    id="projects"
    class="flex flex-col items-center justify-center w-full min-h-screen bg-transparent"
  >
    <h1
      class="text-4xl font-semibold tracking-tight text-center text-white lg:text-5xl mb-10"
    >
      ⌈ Projects ⌋
    </h1>

    <div class="flex flex-col items-center gap-8 max-w-[85dvw] px-4 sm:px-8">
      <div
        v-for="project in projectData"
        :key="project.title"
        class="flex flex-col items-center lg:flex-row lg:items-stretch lg:gap-10 gap-8 bg-[#1a222c] rounded-xl shadow-lg p-6 w-full"
      >
        <!-- Project Image -->
        <div
          class="relative w-full max-w-[430px] aspect-3/2 flex items-center justify-center mx-auto"
        >
          <NuxtImg
            class="w-full h-full object-cover rounded-lg"
            :src="project.imageSrc || '/default-image.png'"
            :alt="project.imageAlt || 'Project image'"
          />
        </div>
        <!-- Project Details -->
        <div
          class="text-white flex flex-col w-full px-5 py-6 lg:py-2 items-center lg:items-start"
        >
          <h2 class="text-3xl font-semibold mb-2 text-center lg:text-left">
            {{ project.title }}
          </h2>
          <p class="text-lg font-light">{{ project.details }}</p>
          <div
            v-if="project.links?.length > 0"
            class="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            <UButton
              v-for="link in project.links"
              :key="link.label"
              variant="soft"
              color="primary"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import projectData from "~/data/projectData.json";
</script>
