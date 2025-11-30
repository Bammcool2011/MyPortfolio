<template>
  <UHeader
    v-model:open="open"
    mode="slideover"
    :toggle="{ color: 'neutral', variant: 'ghost' }"
    :ui="{
      root: 'bg-[#0a1018] backdrop-blur-md border-b border-gray-800 h-(--ui-header-height) sticky top-0 z-50',
      container:
        'flex items-center justify-center sm:justify-start gap-3 h-full px-4 sm:px-6 max-w-none relative',
      left: 'flex items-center gap-1.5 min-w-0',
      toggle:
        'absolute right-4 top-4 -translate-y-0 z-50 sm:static sm:inset-auto sm:translate-y-0 sm:z-auto',
      content: 'bg-gray-900/95 backdrop-blur-md',
    }"
  >
    <template #left>
      <span
        class="cursor-pointer text-lg font-bold text-white lg:text-xl"
        @click="scrollToTop"
        >Pumin WPS</span
      >
    </template>

    <template #default>
      <nav class="flex items-center gap-4">
        <button
          v-for="item in navItems"
          :key="item.label"
          class="transition-colors hover:bg-transparent hover:text-[#e31b6d]"
          @click="item.onSelect"
        >
          {{ item.label }}
        </button>
      </nav>
    </template>

    <template #body>
      <nav class="flex flex-col items-start gap-2">
        <button
          v-for="item in navItems"
          :key="item.label"
          class="transition-colors hover:bg-transparent hover:text-[#e31b6d]"
          @click="item.onSelect"
        >
          {{ item.label }}
        </button>
      </nav>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import { navigateTo, useRoute } from "#app";
import { computed, ref } from "vue";

const route = useRoute();
const open = ref(false);

const navItems = computed(() => [
  {
    label: "ABOUT",
    onSelect: () => handleNavigation("#about"),
  },
  {
    label: "HOBBIES",
    onSelect: () => handleNavigation("#hobbies"),
  },
  {
    label: "PROJECTS",
    onSelect: () => handleNavigation("#projects"),
  },
  {
    label: "CONTACT",
    onSelect: () => handleNavigation("#contact"),
  },
]);

const handleNavigation = (href: string) => {
  if (route.path === "/" || route.path === "/index") {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 20;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  } else {
    // On other pages, navigate to home with anchor
    navigateTo("/" + href);
  }
  // Close the mobile menu
  open.value = false;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
