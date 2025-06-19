import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function HowItWorks() {

    return (
        <div className="bg-green-200 px-10">
            <section className="mx-auto max-w-lg min-h-screen py-24 flex flex-col gap-12">
                <div className="flex justify-between items-center gap-6">
                    <h2 className="font-bold tracking-tighter text-6xl"><span className="text-dark-green/80">How FundDreamz works</span></h2>
                    <button className="group w-fit flex items-center justify-center gap-4 pl-6 pr-2 h-12 rounded-full bg-dark-green/30 text-dark-green hover:bg-dark-green hover:text-green-200">
                        <span className="font-semibold tracking-tighter">Learn more</span>
                        <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-dark-green/80 text-green-200 group-hover:bg-green-200 group-hover:text-dark-green">
                            <FaArrowRight size={16} />
                        </span>
                    </button>
                </div>
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-3 border-dark-green/40">
                    <Image src="/home/video-image.jpg" alt="Video cover" fill className="object-cover block" />
                    <div className="relative w-full h-full flex items-center justify-center">
                        <button className="flex items-center justify-center gap-1 backdrop-blur bg-dark-green/80 text-green-200 rounded-full p-2 pr-6">
                            <span className="flex items-center justify-center w-10 aspect-square rounded-full">
                                <FaPlay size={20} />
                            </span>
                            <span className="font-semibold tracking-tighter text-lg">Play video</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}