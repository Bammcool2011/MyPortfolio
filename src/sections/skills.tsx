import { Button } from "@/components/ui/button";

export default function Skills() {
    const frontEndSkills = [
        { name: "Next.js", id: "nextjs" },
        { name: "React", id: "react" },
        { name: "Vite", id: "vite" },
        { name: "HTML5", id: "html5" },
        { name: "CSS", id: "css" },
    ];

    const programmingLanguages = [
        { name: "JavaScript", id: "javascript" },
        { name: "TypeScript", id: "typescript" },
        { name: "Golang", id: "golang" },
        { name: "PHP", id: "php" },
        { name: "Java", id: "java" },
        { name: "Python", id: "python" },
        { name: "C++", id: "cpp" },
    ];

    const databases = [
        { name: "MySQL", id: "mysql" },
        { name: "MongoDB", id: "mongodb" },
    ];

    const tools = [
        { name: "Docker", id: "docker" },
        { name: "Git", id: "git" },
        { name: "GitHub", id: "github" },
        { name: "Visual Studio", id: "visualstudio" },
        { name: "IntelliJ IDEA", id: "intellij" },
        { name: "Node.js", id: "nodejs" },
    ];

    const multimedia = [
        { name: "Photoshop", id: "photoshop" },
        { name: "Premiere Pro", id: "premierepro" },
        { name: "DaVinci Resolve", id: "davinciresolve" },
        { name: "Illustrator", id: "illustrator" },
        { name: "Lightroom", id: "lightroom" },
    ];

    return (
        <div id='skills'>
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl justify-center flex text-white">
                Skills
            </h1>

            <div className="m-10">
                <h2 className="text-white text-4xl mb-5">
                    Programming Languages
                </h2>
                <div className="flex flex-wrap gap-4">
                    {programmingLanguages.map((skill) => (
                        <Button key={skill.id} variant="secondary" className="text-lg">
                            {skill.name}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="m-10">
                <h2 className="text-white text-4xl mb-5">
                    Front End
                </h2>
                <div className="flex flex-wrap gap-4">
                    {frontEndSkills.map((skill) => (
                        <Button key={skill.id} variant="secondary" className="text-lg">
                            {skill.name}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="m-10">
                <h2 className="text-white text-4xl mb-5">
                    Databases
                </h2>
                <div className="flex flex-wrap gap-4">
                    {databases.map((skill) => (
                        <Button key={skill.id} variant="secondary" className="text-lg">
                            {skill.name}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="m-10">
                <h2 className="text-white text-4xl mb-5">
                    Tools
                </h2>
                <div className="flex flex-wrap gap-4">
                    {tools.map((skill) => (
                        <Button key={skill.id} variant="secondary" className="text-lg">
                            {skill.name}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="m-10">
                <h2 className="text-white text-4xl mb-5">
                    Miscellaneous
                </h2>
                <div className="flex flex-wrap gap-4">
                    {multimedia.map((skill) => (
                        <Button key={skill.id} variant="secondary" className="text-lg">
                            {skill.name}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}