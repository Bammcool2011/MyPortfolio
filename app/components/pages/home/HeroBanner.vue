<template>
  <section id="home" class="relative min-w-full sm:min-h-screen">
    <div
      class="flex flex-col items-center p-4 xl:flex-row xl:items-start xl:p-16"
    >
      <!-- Left: Intro -->
      <div
        class="flex flex-col items-center p-4 text-center xl:w-1/2 xl:items-start xl:text-left"
      >
        <header class="text-2xl leading-relaxed text-white sm:text-4xl">
          <h1>Hello! My name is</h1>
          <h2 class="text-3xl font-semibold text-white sm:text-5xl md:text-6xl">
            Pumin Whungprasit
          </h2>
        </header>

        <div
          class="mt-6 inline-flex justify-center text-2xl tracking-widest whitespace-pre-wrap text-[#e31b6d] xl:justify-start"
        >
          Junior •
          <TextLoop
            class="overflow-y-clip"
            :items="['Engineer', 'Developers', 'Learner']"
          />
        </div>

        <p
          class="mt-4 text-xl font-thin tracking-wide text-white md:text-xl lg:text-2xl"
        >
          I'm a Software Engineering graduate and junior developer. I'm
          passionate about improving my skills in web development and have
          experience creating websites for university workshops and contributing
          to game modding. I'm eager to take on new challenges and grow as a
          developer, focusing on both frontend and backend technologies to build
          impactful solutions.
        </p>

        <div class="flex justify-center space-x-4 md:justify-start">
          <UButton
            variant="outline"
            color="primary"
            size="lg"
            :href="'https://drive.google.com/file/d/1rilip8IqUVon7Ze5OCbF9zc_w3hkPeXn/view?usp=drive_link'"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-10 text-white sm:mt-6"
          >
            View my resume
          </UButton>
        </div>
      </div>

      <!-- Right: ASCII Art -->
      <aside class="hidden w-full p-6 xl:block xl:w-1/2">
        <pre
          class="m-12 mx-auto w-[40%] text-center font-mono whitespace-pre text-white"
        >
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⢀⡴⣆⠀⠀⠀⠀⠀⣠⡀⠀⠀⠀⠀⠀⠀⣼⣿⡗⠀⠀⠀⠀
          ⠀⠀⠀⣠⠟⠀⠘⠷⠶⠶⠶⠾⠉⢳⡄⠀⠀⠀⠀⠀⣧⣿⠀⠀⠀⠀⠀
          ⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣤⣤⣤⣤⣤⣿⢿⣄⠀⠀⠀⠀
          ⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠙⣷⡴⠶⣦
          ⠀⠀⢱⡀⠀⠉⠉⠀⠀⠀⠀⠛⠃⠀⢠⡟⠀⠀⠀⢀⣀⣠⣤⠿⠞⠛⠋
          ⣠⠾⠋⠙⣶⣤⣤⣤⣤⣤⣀⣠⣤⣾⣿⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀
          ⠛⠒⠛⠉⠉⠀⠀⠀⣴⠟⢃⡴⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        </pre>
      </aside>
    </div>

    <!-- Down Arrow Button -->
    <div
      class="absolute bottom-30 left-1/2 hidden -translate-x-1/2 transform sm:block"
    >
      <UButton
        variant="outline"
        color="primary"
        square
        size="xl"
        aria-label="Scroll to About"
        class="rounded-full"
        @click="scrollToAbout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToAbout = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    const offset = 120;
    const topPosition =
      aboutSection.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  }
};
</script>
