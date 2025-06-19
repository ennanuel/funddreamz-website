import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { TIPS } from "../assets/data";

export default function Tips() {

    return (
        <section className="px-4 sm:px-6 md:px-10">
            <div className="mx-auto max-w-lg pt-20 pb-6">
                <div className="flex items-center justify-between gap-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Top crowdfunding tips</h2>
                    <Link href="/" className="hidden sm:block px-3 sm:px-4 py-0.5 sm:py-1 border border-gray-200 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold">View all</span>
                    </Link>
                </div>
                <ul className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
                    {
                        TIPS.map(({ title, Icon }) => (
                            <li key={title}>
                                <Link href="/" className="flex h-full w-full items-center gap-4 bg-light-orange rounded-md px-6 py-8">
                                    <span className="flex items-center justify-center w-10 aspect-square rounded-full bg-yellow-300/30">
                                        <Icon size={20} />
                                    </span>
                                    <span className="flex-1 text-sm sm:text-lg lg:text-xl font-semibold">{title}</span>
                                    <HiArrowRight size={20} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Link href="/" className="block w-fit mt-6 sm:hidden px-3 sm:px-4 py-0.5 sm:py-1 border border-gray-200 rounded-lg">
                    <span className="text-xs sm:text-sm font-semibold">View all</span>
                </Link>
                <p className="mt-8 text-xs lg:text-sm">*Statistics on this page are averaged figures based on 2023–2024 GoFundMe data.</p>
            </div>
        </section>
    )
}