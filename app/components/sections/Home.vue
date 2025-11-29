<template>
  <section id="home" class="min-w-full sm:min-h-screen relative top-16">
    <div class="flex flex-col xl:flex-row items-center xl:items-start">
      <!-- Left: Intro -->
      <div
        class="xl:w-1/2 p-4 flex flex-col items-center xl:items-start text-center xl:text-left"
      >
        <header class="sm:text-4xl text-2xl text-white leading-relaxed">
          <h1>Hello! My name is</h1>
          <h2 class="text-3xl sm:text-5xl md:text-6xl text-white font-semibold">
            Pumin Whungprasit
          </h2>
        </header>

        <div
          class="inline-flex whitespace-pre-wrap text-2xl mt-6 tracking-widest text-[#e31b6d] justify-center xl:justify-start"
        >
          Junior •
          <TextLoop
            class="overflow-y-clip"
            :items="['Engineer', 'Developers', 'Learner']"
          />
        </div>

        <p
          class="text-white text-xl md:text-xl lg:text-2xl font-thin tracking-wide mt-4"
        >
          I'm a Software Engineering graduate and junior developer. I'm
          passionate about improving my skills in web development and have
          experience creating websites for university workshops and contributing
          to game modding. I'm eager to take on new challenges and grow as a
          developer, focusing on both frontend and backend technologies to build
          impactful solutions.
        </p>

        <div class="flex justify-center md:justify-start space-x-4">
          <UButton
            variant="outline"
            color="primary"
            size="lg"
            :href="'https://drive.google.com/file/d/1rilip8IqUVon7Ze5OCbF9zc_w3hkPeXn/view?usp=drive_link'"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-10 sm:mt-6 text-white"
          >
            View my resume
          </UButton>
        </div>
      </div>

      <!-- Right: ASCII Art -->
      <aside class="w-full xl:w-1/2 p-6 xl:block hidden">
        <pre
          class="text-white w-[40%] mx-auto text-center font-mono whitespace-pre m-12"
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
      class="absolute bottom-50 left-1/2 transform -translate-x-1/2 hidden sm:block"
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
