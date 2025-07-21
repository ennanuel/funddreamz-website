import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function HowItWorks() {

    return (
        <div className="bg-white px-4 xs:px-6 sm:px-10">
            <section className="mx-auto max-w-lg min-h-screen py-24 flex flex-col gap-12">
                <div className="flex justify-between items-center gap-6">
                    <h2 className="font-bold tracking-tighter text-3xl sm:text-4xl lg:text-6xl"><span className="text-dark-green">How FundDreamz works</span></h2>
                </div>
                <div className="flex rounded-4xl overflow-hidden bg-light-green p-2">
                    <div className="relative w-full aspect-video max-h-[90vh] rounded-3xl rounded-br-md overflow-hidden">
                        <Image src="/home/video-image.jpg" alt="Video cover" fill className="object-cover block" />
                        <div className="relative w-full h-full flex items-center justify-center">
                            <button className="flex items-center justify-center gap-1 backdrop-blur bg-white hover:bg-light-green hover:text-dark-green text-dark-green rounded-full p-1 lg:p-2 pr-6">
                                <span className="flex items-center justify-center w-10 aspect-square rounded-full">
                                    <FaPlay size={20} />
                                </span>
                                <span className="font-semibold tracking-tighter text-base lg:text-lg">Play video</span>
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col gap-12 p-10 rounded-[32px]">
                        <p className="text-base lg:text-2xl font-semibold tracking-tighter max-w-[48ch]">
                            <span className="text-dark-green/60">See the magic happen! This short, insightful video demystifies the FundDreamz process, illustrating exactly how we make fundraising effortless and secure. From setting up your campaign in minutes to watching your funds grow with confidence, discover the intuitive journey that awaits. Press play and let us show you the FundDreamz difference.</span>
                        </p>
                        <button className="group w-fit flex items-center justify-center gap-4 pl-6 pr-1 lg:pr-2 h-10 lg:h-12 rounded-full bg-dark-green text-light-green hover:bg-dark-green/80">
                            <span className="text-sm lg:text-base font-semibold tracking-tighter">Learn more</span>
                            <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-light-green text-dark-green">
                                <FaArrowRight size={16} />
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}