import { GlowEffect } from "@/components/ui/glow-effect";
import projectData from "../data/projectData.json";

const glowColors = ["#f06292", "#c2185b", "#e91e63"];

export default function ProjectsSection() {
  return (
    <div id='section-projects'>
      <div id='projects'>
        <h1 className="text-4xl font-semibold tracking-tight text-center text-white lg:text-5xl">
          Projects
        </h1>

        <div className="flex flex-col gap-14 sm:p-20 p-10">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="flex flex-col lg:flex-row items-start lg:gap-10 gap-2"
            >
              {/* Glow Effect */}
              <div className="relative w-full lg:w-1/4">
                <GlowEffect
                  colors={glowColors}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={1.01}
                />
                <img
                  className="relative w-full rounded-lg"
                  src={project.imageSrc || "/default-image.png"}
                  alt={project.imageAlt || "Project image"}
                />
              </div>

              {/* Project Details */}

              <div className="text-white text-center lg:text-left flex flex-col lg:w-3/4 py-6 lg:py-0">
                <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
                <p className="text-lg font-light text-justify">{project.details}</p>

                {/* Button Section */}
                {project.links && project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-soft btn-primary "
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
