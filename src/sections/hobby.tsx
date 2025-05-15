import hobbyData from '../data/hobbyData.json';

export default function Hobby() {
    return (
        <div className="container mx-auto">
            <div className="mb-16">
                <h1 className="text-5xl text-white font-semibold text-center mb-4">Hobbies</h1>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-wrap gap-8 justify-center">
                    {hobbyData.map((hobby, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1a222c] w-[500px] h-[250px] flex items-center p-6 rounded-lg shadow"
                        >
                            <div className="text-6xl mr-6">{hobby.icon}</div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">{hobby.title}</h2>
                                <p className="text-gray-300">{hobby.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}