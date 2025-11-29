<template>
  <nav class="bg-[#0a1018] min-w-full fixed top-0 z-50">
    <!-- Desktop Navbar -->
    <div class="hidden md:flex h-20 items-center justify-center relative">
      <div class="absolute left-8 text-white font-bold text-2xl">Pumin WPS</div>
      <div class="flex-1 flex justify-center">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="text-white font-thin text-xl mx-4 hover:text-[#e31b6d] transition-colors"
          @click.prevent="handleNavigation(item.href)"
        >
          {{ item.name }}
        </a>
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div class="md:hidden">
      <div class="flex items-center justify-between p-4">
        <a
          href="#home"
          class="text-white font-thin text-xl"
          @click.prevent="handleNavigation('#home')"
        >
          PUMIN WPS
        </a>
        <UButton
          variant="ghost"
          color="neutral"
          square
          aria-label="Toggle menu"
          class="relative z-50"
          @click="isOpen = !isOpen"
        >
          <svg
            v-if="isOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </UButton>
      </div>

      <Transition
        enter-active-class="animate-in slide-in-from-right duration-300"
        leave-active-class="animate-out slide-out-to-right duration-300"
      >
        <div
          v-if="isOpen"
          class="fixed inset-y-0 right-0 w-64 bg-[#0a1018] pt-16 shadow-lg z-40"
        >
          <div class="flex flex-col items-center">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="text-white font-thin text-xl py-4 w-full text-center hover:text-[#e31b6d] hover:bg-white/5 transition-colors"
              @click.prevent="handleNavigation(item.href)"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "HOBBIES", href: "#hobbies" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

const handleNavigation = (href: string) => {
  isOpen.value = false; // Close mobile menu
  const element = document.querySelector(href);
  if (element) {
    const navbarHeight = 120; // Matches h-20 (5rem = 80px)
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  }
};
</script>
