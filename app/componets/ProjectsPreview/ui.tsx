import { introCond } from "@/app/page"
import { IconArrowUpRight } from '@tabler/icons-react';
import Image from "next/image"

export const ProjectsPreview = () => {
    return (
        <section className="flex justify-center mt-24 mb-12">
            <div className="container">
                <div className="flex justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center"><span className={`${introCond.className} text-white`}>Реализованные проекты</span></h2>
                </div>
                <div className="grid px-2 max-[400px]:px-6 max-[400px]:grid-cols-1 grid-cols-[1fr_1fr] lg:grid-cols-[minmax(300px,1fr)_minmax(300px,1fr)_minmax(300px,1fr)] xl:grid-cols-[minmax(300px,1fr)_minmax(280px,320px)_minmax(300px,1fr)_minmax(300px,1fr)] max-[400px]:gap-8 max-[500px]:gap-4 gap-8 md:gap-12 lg:gap-8 xl:gap-6 2xl:gap-8" style={{maskImage: 'linear-gradient(to top, rgba(255,255,255,0) 3%, rgba(27,27,27,1) 40%)'}}>
                    <div className="relative group/bessarab">
                        <Image className="h-full object-cover object-left rounded-xl group-hover/bessarab:opacity-75 transition duration-500" src={'/image/project-1.jpg'} width={500} priority height={285} quality={100} alt="project" />
                        <button className="px-4 py-2 hidden text-[#fff] items-center gap-2 rounded-xl text-sm group-hover/bessarab:flex bg-[rgba(0,0,0,.6)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Bessarab
                            <IconArrowUpRight className="border-l pl-2 w-[20px] box-content border-white/[0.2]" />
                        </button>
                    </div>
                    <div className="relative group/sauzme row-span-2">
                        <Image className="h-full object-cover object-left rounded-xl group-hover/sauzme:opacity-75 transition duration-500" src={'/image/project-3.jpg'} width={400} priority height={280} quality={100} alt="project" />
                        <button className="px-4 py-2 hidden text-[#fff] items-center gap-2 rounded-xl text-sm group-hover/sauzme:flex bg-[rgba(0,0,0,.6)] absolute top-1/2 left-1/2 -translate-y-1/2left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Sauzme
                            <IconArrowUpRight className="border-l pl-2 w-[20px] box-content border-white/[0.2]" />
                        </button>
                    </div>
                    
                    <div className="relative group/tripEvent">
                        <Image className="h-full object-cover object-left rounded-xl group-hover/tripEvent:opacity-75 transition duration-500" src={'/image/project-5.jpg'} width={400} height={260} quality={100} alt="project" />
                        <button className="px-4 py-2 hidden text-[#fff] items-center gap-2 rounded-xl text-sm group-hover/tripEvent:flex bg-[rgba(0,0,0,.6)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            TripEvent
                            <IconArrowUpRight className="border-l pl-2 w-[20px] box-content border-white/[0.2]" />
                        </button>
                    </div>
                    <div className="relative group/fineMob">
                        <Image className="h-full object-cover object-left rounded-xl group-hover/fineMob:opacity-75 transition duration-500" src={'/image/project-7.jpg'} width={400} height={260} quality={100} alt="project" />
                        <button className="px-4 py-2 hidden text-[#fff] items-center gap-2 rounded-xl text-sm group-hover/fineMob:flex bg-[rgba(0,0,0,.6)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Штраф.онлайн
                            <IconArrowUpRight className="border-l pl-2 w-[20px] box-content border-white/[0.2]" />
                        </button>
                    </div>
                    <div className="relative group/course">
                        <Image className="h-full object-cover rounded-xl group-hover/course:opacity-75 transition duration-500" src={'/image/project-2.jpg'} width={500} height={260} quality={100} alt="project" />
                        <button className="px-4 py-2 hidden text-[#fff] items-center gap-2 rounded-xl text-sm group-hover/course:flex bg-[rgba(0,0,0,.6)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Course
                            <IconArrowUpRight className="border-l pl-2 w-[20px] box-content border-white/[0.2]" />
                        </button>
                    </div>
                    <div className="relative group/bankruptcy">
                        <Image className="h-full object-cover rounded-xl group-hover/bankruptcy:opacity-75 transition duration-500" src={'/image/project-6.jpg'} width={400} height={260} quality={100} alt="project" />
                        <button className="px-4 py-2 hidden text-[#fff] items-center gap-2 rounded-xl text-sm group-hover/bankruptcy:flex bg-[rgba(0,0,0,.6)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Bankruptcy
                            <IconArrowUpRight className="border-l pl-2 w-[20px] box-content border-white/[0.2]" />
                        </button>
                    </div>                        
                    <div className="relative group/furniture">
                        <Image className="h-full object-cover rounded-xl group-hover/furniture:opacity-75 transition duration-500" src={'/image/project-4.jpg'} width={400} height={260} quality={100} alt="project" />
                        <button className="px-4 py-2 hidden text-[#fff] items-center gap-2 rounded-xl text-sm group-hover/furniture:flex bg-[rgba(0,0,0,.6)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Furniture
                            <IconArrowUpRight className="border-l pl-2 w-[20px] box-content border-white/[0.2]" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}