import { GlowEffect } from "@/components/ui/glow-effect";

export default function Projects() {
    const projectData = [
        {
            imageSrc: "src/assets/projects/cs-mods.png",
            imageAlt: "CS Mods",
            titleText: "CS Mods",
            infoText: "Test Information Here",
            imageWidth: "auto",
            imageHeight: "auto",
        },
        {
            imageSrc: "src/assets/projects/style-war.jpg",
            imageAlt: "Style War",
            titleText: "Style War",
            infoText: "Style War Details",
            imageWidth: "480px",
            imageHeight: "336px",
        },
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
                        className={`flex flex-col sm:flex-row items-center ${index > 0 ? "mt-8" : ""
                            }`}
                    >
                        <div className="relative w-120 mb-4 sm:mb-0 sm:mr-8">
                            <GlowEffect
                                colors={["#f06292", "#c2185b", "#e91e63"]}
                                mode="colorShift"
                                blur="soft"
                                duration={3}
                                scale={1.01}
                            />
                            <img
                                className="relative"
                                src={project.imageSrc}
                                alt={project.imageAlt}
                                style={{ width: project.imageWidth, height: project.imageHeight }}
                            />
                        </div>
                        <div className="text-white text-5xl flex-row">{project.titleText}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}