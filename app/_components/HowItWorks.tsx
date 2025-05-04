import Image from "next/image";
import Link from "next/link";
import { HiOutlinePlay } from "react-icons/hi2";



export default function HowItWorks() {


    return (
        <section className="px-4 sm:px-6 md:px-10">
            <div className="mx-auto max-w-lg pt-30 pb-20">
                <div className="flex items-center justify-between gap-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">How FundDreams works</h2>
                    <Link href="/" className="h-8 hidden sm:flex items-center justify-center px-4 border border-gray-300 rounded-lg">
                        <span className="text-sm font-semibold whitespace-nowrap">Learn more</span>
                    </Link>
                </div>
                <div className="telative mt-10 mx-auto relative overflow-hidden bg-light-green rounded-3xl w-full max-h-[560px] aspect-video flex items-center justify-center">
                    <Image src="/home/video-image.jpg" fill alt="Video image" className="object-cover" />
                    <button className="relative flex items-center justify-center px-4 sm:px-6 gap-2 rounded-2xl h-10 sm:h-14 min-w-14 bg-white shadow-lg shadow-black/10 hover:bg-main hover:text-white">
                        <HiOutlinePlay size={18} />
                        <span className="font-semibold text-xs sm:text-sm">Play video</span>
                    </button>
                </div>
                <Link href="/" className="mt-6 h-8 w-fit flex sm:hidden items-center justify-center px-3 border border-gray-300 rounded-lg">
                    <span className="text-xs font-semibold whitespace-nowrap">Learn more</span>
                </Link>
            </div>
        </section>
    )
}