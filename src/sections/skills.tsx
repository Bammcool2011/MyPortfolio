import { Button } from "@/components/ui/button";
import {
    FaCode,
    FaDatabase,
    FaTools,
    FaPaintBrush,
    FaHtml5
} from "react-icons/fa";
import skillsData from "../data/skillsData.json";

import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
    FaCode: FaCode,
    FaDatabase: FaDatabase,
    FaTools: FaTools,
    FaPaintBrush: FaPaintBrush,
    FaHtml5: FaHtml5
};

export default function Skills() {
    return (
        <div id="skills" className="mb-20">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl justify-center flex text-white">
                Skills
            </h1>
            {skillsData.map((section) => {
                const Icon = iconMap[section.icon];
                return (
                    <div className="m-10" key={section.section}>
                        <h2 className="text-white text-2xl md:text-3xl mb-5 flex items-center gap-2">
                            {Icon && <Icon />} {section.section}
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {section.skills.map((skill) => (
                                <Button key={skill.id} variant="secondary" className="text-lg">
                                    {skill.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

