import hobbyData from "../data/hobbyData.json";

export default function Hobby() {
    return (
        <div className="container mx-auto px-6">
            <div className="mb-16">
                <h1 className="text-5xl text-white font-semibold text-center mb-4">
                    ⌈ Hobbies ⌋
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-wrap gap-8 justify-center">
                    {hobbyData.map((hobby, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1a222c] w-full sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto min-h-[180px]
                                       flex flex-col sm:flex-row items-center sm:items-center
                                       p-4 sm:p-6 rounded-lg shadow"
                        >
                            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-0 sm:mr-6 flex justify-center">
                                {hobby.icon}
                            </div>
                            <div className="text-center sm:text-left">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    {hobby.title}
                                </h2>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    {hobby.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
