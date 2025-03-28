import { GlowEffect } from "@/components/ui/glow-effect";

const projectData = [
  {
    imageSrc: "https://i.imgur.com/CoVnGlu.png",
    imageAlt: "Cities: Skylines Thai Localization Mod",
    title: "Cities: Skylines Thai Localization Mod",
    details:
      "This community-driven mod provides a complete Thai localization for Cities: Skylines. It involved developing C++ interfaces to dynamically replace in-game text, creating XML parsing tools to manage over 15,000 strings, and resolving font rendering issues for Thai script compatibility, ensuring seamless UI integration across game updates.",
  },
  {
    imageSrc: "https://i.imgur.com/u5xqsZd.jpeg",
    imageAlt: "Style-War: Real-Time CSS Battle Platform",
    title: "Style-War: Real-Time CSS Battle Platform",
    details:
      "Style-War is a competitive coding website where users duel via CSS challenges with live previews and leaderboards. Built with Next.js 14 and Mantine UI, it features real-time code previews and leaderboards powered by WebSocket APIs. A Go backend handles live score updates, while Clerk provides secure OAuth2 authentication. PostgreSQL is used to track user coding input, and Monaco Editor with CSS linting streamlines the challenge experience.",
  },
];

export default function Projects() {
  return (
    <div id='projects' className="px-5 sm:px-10">
      <h1 className="text-4xl font-semibold tracking-tight text-center text-white lg:text-5xl">
        Projects
      </h1>

      <div className="flex flex-col gap-10 sm:p-20 p-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start lg:gap-10 gap-2"
          >
            {/* Glow Effect */}
            <div className="relative w-full lg:w-1/4">
              <GlowEffect
                colors={["#f06292", "#c2185b", "#e91e63"]}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={1.01}
              />
              <img
                className="relative w-full rounded-lg"
                src={project.imageSrc}
                alt={project.imageAlt}
              />
            </div>

            {/* Project Details */}
            <div className="text-white text-center lg:text-left flex flex-col lg:w-3/4 py-6 lg:py-0">
              <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
              <p className="text-lg font-light text-center md:text-justify">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
