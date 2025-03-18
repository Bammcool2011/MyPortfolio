import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="p-15 md:20 min-w-full min-h-screen">
      <section className="flex flex-col xl:flex-row">
        <div className="xl:w-1/2 p-4">
          <span className="text-4xl text-white leading-relaxed">
            <h1>Hello! My name is</h1>
            <h1 className="text-5xl md:text-6xl text-white font-semibold">Pumin Whungprasit</h1>
          </span>

          <p className="text-[#e31b6d] text-2xl mt-6 tracking-widest">
            Junior Dev • Software Engineer
          </p>

          <p className="text-white text-2xl font-thin tracking-wide mt-2">
            I'm a Software Engineering graduate and junior developer. I'm
            passionate about improving my skills in web development and have
            experience creating websites for university workshops and
            contributing to game modding. I'm eager to take on new challenges
            and grow as a developer, focusing on both frontend and backend
            technologies to build impactful solutions.
          </p>
          <Button variant="outline" className="mt-10 text-white text-xl">View my resume</Button>
        </div>

        <div className="w-full xl:w-1/2 p-6 xl:block hidden">
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
        </div>
      </section>
    </div>
  );
}