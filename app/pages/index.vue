<template>
  <div>
    <Home />
    <div class="py-14 space-y-36">
      <About />
      <Hobby />
      <Projects />
      <Activities />
    </div>
  </div>
</template>

<script setup lang="ts">
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
