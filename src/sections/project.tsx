import projectData from "../data/projectData.json";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent"
    >
      <h1 className="text-4xl font-semibold tracking-tight text-center text-white lg:text-5xl mb-10">
        ⌈ Projects ⌋
      </h1>

      <div className="flex flex-col items-center gap-8 max-w-[80dvw] px-4 sm:px-8">
        {projectData.map((project) => (
          <div
            key={project.title}
            className="flex flex-col items-center lg:flex-row lg:items-stretch lg:gap-10 gap-8 bg-[#1a222c] rounded-xl shadow-lg p-6 w-full"
          >
            {/* Project Image */}
            <div className="relative w-full max-w-[450px] aspect-[3/2] flex items-center justify-center transition-transform duration-300 hover:-translate-y-2 mx-auto">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={project.imageSrc || "/default-image.png"}
                alt={project.imageAlt || "Project image"}
              />
            </div>
            {/* Project Details */}
            <div className="text-white flex flex-col w-full px-5 py-6 lg:py-2 items-center lg:items-start">
              <h2 className="text-3xl font-semibold mb-2 text-center lg:text-left">{project.title}</h2>
              <p className="text-lg font-light text-justify">{project.details}</p>
              {project.links?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-soft btn-primary"
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
    </section>
  );
}
