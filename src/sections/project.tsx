import { GlowEffect } from "@/components/ui/glow-effect";

export default function Projects() {
    return (
        <div className="p-5 sm:p-10">
            <div className="">
                <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl justify-center flex text-white">
                    Projects
                </h1>
            </div>

            <div className="sm:p-20 p-10">
                <div className='relative w-120'>
                    <GlowEffect
                        colors={['#f06292', '#c2185b', '#e91e63']}
                        mode='colorShift'
                        blur='soft'
                        duration={3}
                        scale={1.01}
                    />
                    <div
                        className='relative rounded-md outline outline-1 outline-[#fff2f21f] bg-white w-[480px] h-[270px]'
                    ></div>
                </div>
            </div>
        </div>
    );
}