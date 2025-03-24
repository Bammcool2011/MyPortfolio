export default function About() {
    return (
        <div id='about' className="mb-20">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl justify-center flex text-white">
                About
            </h1>
            <div className="mt-10 flex flex-col md:flex-row md:justify-center">

                {/* Past Section */}
                <div className="p-4 md:w-125 mx-10">
                    <div className="text-center text-4xl text-[#e31b6d]">
                        Past
                    </div>
                    <p className="mt-6 text-center text-xl md:text-2xl text-white font-thin">
                        I’ve always been into video games and got obsessed with modding them as a kid. Tweaking stuff was fun, but I soon figured out I needed programming skills to go further. That’s when I decided software engineering was for me.
                    </p>
                </div>

                {/* Present Section */}
                <div className="p-4 md:w-125 mx-10">
                    <div className="text-center text-4xl text-[#e31b6d]">
                        Present
                    </div>
                    <p className="mt-6 text-center text-xl md:text-2xl text-white font-thin">
                        I’m studying software engineering at Stamford International University in Thailand right now. My professors and seniors are great, always encouraging me to aim higher. I built a web platform called Style-War, which was a blast and taught me tons about coding in the real world.
                    </p>
                </div>

                {/* Future Section */}
                <div className="p-4 md:w-125 mx-10">
                    <div className="text-center text-4xl text-[#e31b6d]">
                        Future
                    </div>
                    <p className="mt-6 text-center text-xl md:text-2xl text-white font-thin">
                        Going forward, I want to boost my programming skills and explore AI. It’s amazing what AI can do, and I’m pumped to see how it can tackle big issues. I hope to help build something that really matters.                    </p>
                </div>

            </div>
        </div>
    );
}