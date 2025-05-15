import { TextLoop } from "@/components/ui/text-loop";

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 120;
      const topPosition = aboutSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-w-full sm:min-h-screen relative top-16">
      <div className="flex flex-col xl:flex-row items-center xl:items-start">
        {/* Left: Intro */}
        <div className="xl:w-1/2 p-4 flex flex-col items-center xl:items-start text-center xl:text-left">
          <header className="sm:text-4xl text-2xl text-white leading-relaxed">
            <h1>Hello! My name is</h1>
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-white font-semibold">
              Pumin Whungprasit
            </h2>
          </header>

          <div className="inline-flex whitespace-pre-wrap text-2xl mt-6 tracking-widest text-[#e31b6d] justify-center xl:justify-start">
            Junior •{' '}
            <TextLoop
              className="overflow-y-clip"
              transition={{
                type: 'spring',
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
                animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
                exit: { y: -20, rotateX: -90, opacity: 0, filter: 'blur(4px)' },
              }}
            >
              <span>Engineer</span>
              <span>Developers</span>
              <span>Learner</span>
            </TextLoop>
          </div>

          <p className="text-white text-xl md:text-xl lg:text-2xl font-thin tracking-wide mt-4">
            I'm a Software Engineering graduate and junior developer. I'm
            passionate about improving my skills in web development and have
            experience creating websites for university workshops and
            contributing to game modding. I'm eager to take on new challenges
            and grow as a developer, focusing on both frontend and backend
            technologies to build impactful solutions.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://drive.google.com/file/d/127ODDoYMQOoKpI1GBwWI_f79gIDDypAu/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-[1px] mt-10 sm:mt-6 text-white text-xl"
            >
              View my resume
            </a>
          </div>
        </div>

        {/* Right: ASCII Art */}
        <aside className="w-full xl:w-1/2 p-6 xl:block hidden">
          <pre className="text-white w-[40%] mx-auto text-center font-mono whitespace-pre-wrap m-12">
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

      {/* Down Arrow Button */}
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <button
          className="btn btn-outline w-16 h-16 rounded-full p-0 flex items-center justify-center border-white hover:bg-white/10 transition-colors"
          style={{ borderColor: "white" }}
          onClick={scrollToAbout}
          aria-label="Scroll to About"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}