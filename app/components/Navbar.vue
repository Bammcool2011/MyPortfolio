<template>
  <UHeader
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
      <UNavigationMenu :items="navItems" variant="link" :ui="navMenuUi" />
    </template>

    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        class="-mx-2.5"
        variant="link"
        :ui="navMenuUi"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const navItems = [
  {
    label: "ABOUT",
    to: "#about",
    onSelect: () => handleNavigation("#about"),
  },
  {
    label: "HOBBIES",
    to: "#hobbies",
    onSelect: () => handleNavigation("#hobbies"),
  },
  {
    label: "PROJECTS",
    to: "#projects",
    onSelect: () => handleNavigation("#projects"),
  },
  {
    label: "CONTACT",
    to: "#contact",
    onSelect: () => handleNavigation("#contact"),
  },
];

const navMenuUi = {
  link: "hover:text-[#e31b6d] hover:bg-transparent transition-colors",
  childLink: "hover:text-[#e31b6d] hover:bg-transparent transition-colors",
};

const handleNavigation = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    const headerHeight = 20; // Adjusted for section padding
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: "smooth",
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
