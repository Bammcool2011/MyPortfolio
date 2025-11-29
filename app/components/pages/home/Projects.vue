<template>
  <section
    id="projects"
    class="flex min-h-screen w-full flex-col items-center justify-center bg-transparent"
  >
    <h1
      class="mb-10 text-center text-4xl font-semibold tracking-tight text-white lg:text-5xl"
    >
      ⌈ Projects ⌋
    </h1>

    <div class="flex max-w-[85dvw] flex-col items-center gap-8 px-4 sm:px-8">
      <div
        v-for="project in projectData"
        :key="project.title"
        class="flex w-full flex-col items-center gap-8 rounded-xl bg-[#1a222c] p-6 shadow-lg lg:flex-row lg:items-stretch lg:gap-10"
      >
        <!-- Project Image -->
        <div
          class="relative mx-auto flex aspect-3/2 w-full max-w-[430px] items-center justify-center"
        >
          <NuxtImg
            class="h-full w-full rounded-lg object-cover"
            :src="project.imageSrc || '/default-image.png'"
            :alt="project.imageAlt || 'Project image'"
          />
        </div>
        <!-- Project Details -->
        <div
          class="flex w-full flex-col items-center px-5 py-6 text-white lg:items-start lg:py-2"
        >
          <h2 class="mb-2 text-center text-3xl font-semibold lg:text-left">
            {{ project.title }}
          </h2>
          <p class="text-lg font-light">{{ project.details }}</p>
          <div
            v-if="project.links?.length > 0"
            class="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start"
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
