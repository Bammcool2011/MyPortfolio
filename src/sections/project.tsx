import { GlowEffect } from "@/components/ui/glow-effect";

export default function Projects() {
  const projectData = [
    {
      imageSrc: "src/assets/projects/cs-mods.png",
      imageAlt: "Cities: Skylines Thai Localization Mod",
      title: "Cities: Skylines Thai Localization Mod",
      details:
        "This community-driven mod provides a complete Thai localization for Cities: Skylines. It involved developing C++ interfaces to dynamically replace in-game text, creating XML parsing tools to manage over 15,000 strings, and resolving font rendering issues for Thai script compatibility, ensuring seamless UI integration across game updates.",
      imageWidth: "auto",
      imageHeight: "auto",
    },
    {
      imageSrc: "src/assets/projects/style-war.jpg",
      imageAlt: "Style-War: Real-Time CSS Battle Platform",
      title: "Style-War: Real-Time CSS Battle Platform",
      details:
        "Style-War is a competitive coding website where users duel via CSS challenges with live previews and leaderboards. Built with Next.js 14 and Mantine UI, it features real-time code previews and leaderboards powered by WebSocket APIs. A Go backend handles live score updates, while Clerk provides secure OAuth2 authentication. PostgreSQL is used to track user coding input, and Monaco Editor with CSS linting streamlines the challenge experience.",
      imageWidth: "auto",
      imageHeight: "auto",
    },
    // Add more projects here
  ];

  return (
    <div className="p-5 sm:p-10">
      <div className="">
        <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl justify-center flex text-white">
          Projects
        </h1>
      </div>

      <div className="flex flex-col sm:p-20 p-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-start ${
              index > 0 ? "mt-8" : ""
            }`}
          >
            <div className="relative w-full sm:w-1/4 mb-4 sm:mb-0 sm:mr-8">
              <GlowEffect
                colors={["#f06292", "#c2185b", "#e91e63"]}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={1.01}
              />
              <img
                className="relative w-full"
                src={project.imageSrc}
                alt={project.imageAlt}
                style={{
                  width: project.imageWidth,
                  height: project.imageHeight,
                }}
              />
            </div>
            <div className="text-white flex flex-col w-full sm:w-3/4">
              <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
              <p className="text-lg">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}