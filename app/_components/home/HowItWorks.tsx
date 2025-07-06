import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function HowItWorks() {

    return (
        <div className="bg-gray-50 px-10">
            <section className="mx-auto max-w-lg min-h-screen py-24 flex flex-col gap-12">
                <div className="flex justify-between items-center gap-6">
                    <h2 className="font-bold tracking-tighter text-6xl"><span className="text-gray-800">How FundDreamz works</span></h2>
                    <button className="group w-fit flex items-center justify-center gap-4 pl-6 pr-2 h-12 rounded-full bg-gray-800/20 text-gray-800 hover:bg-gray-800 hover:text-white">
                        <span className="font-semibold tracking-tighter">Learn more</span>
                        <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-gray-800 text-white group-hover:bg-white group-hover:text-gray-800">
                            <FaArrowRight size={16} />
                        </span>
                    </button>
                </div>
                <div className="relative w-full aspect-video max-h-[90vh] rounded-3xl overflow-hidden border-3 border-main/40">
                    <Image src="/home/video-image.jpg" alt="Video cover" fill className="object-cover block" />
                    <div className="relative w-full h-full flex items-center justify-center">
                        <button className="flex items-center justify-center gap-1 backdrop-blur bg-white hover:bg-green-200 hover:text-dark-green text-dark-green rounded-full p-2 pr-6">
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