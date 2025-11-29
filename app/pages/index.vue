<template>
  <div>
    <HeroBanner />
    <div class="py-14 space-y-36">
      <About />
      <Hobby />
      <Projects />
      <Activities />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";

import About from "~/components/pages/home/About.vue";
import Activities from "~/components/pages/home/Activities.vue";
import HeroBanner from "~/components/pages/home/HeroBanner.vue";
import Hobby from "~/components/pages/home/Hobby.vue";
import Projects from "~/components/pages/home/Projects.vue";

// Page metadata
useHead({
  title: "Pumin Whungprasit - Portfolio",
  meta: [
    {
      name: "description",
      content: "Software Engineering graduate and junior developer portfolio",
    },
  ],
});
</script>
