import { TIPS } from "@/app/assets/data";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";


export default function Tips() {

    return (
        <div className="bg-purple-900 text-purple-200 px-10">
            <section className="mx-auto max-w-lg w-full py-16">
                <div className="flex items-center justify-between gap-6">
                    <h2 className="text-2xl tracking-tighter font-semibold">
                        <span className="text-purple-200/80">Top crowdfunding tips</span>
                    </h2>
                    <Link href="/" className="bg-purple-400 text-purple-900 px-6 h-10 flex items-center justify-center rounded-full">
                        <span className="text-base tracking-tighter font-semibold">View all</span>
                    </Link>
                </div>
                <ul className="mt-10 grid grid-cols-3 gap-3">
                    {
                        TIPS.map(({ title, Icon }) => (
                            <li key={title}>
                                <Link href="/" className="flex h-full w-full items-center gap-4 bg-purple-200 hover:bg-purple-300 text-purple-900 rounded-2xl p-6">
                                    <span className="flex items-center justify-center w-12 aspect-square rounded-full bg-purple-900/20">
                                        <Icon size={20} />
                                    </span>
                                    <span className="flex-1 text-xl font-semibold">{title}</span>
                                    <HiArrowRight size={20} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <p className="mt-8 text-base font-semibold tracking-tighter">
                    <span className="text-purple-200/60">*Statistics on this page are averaged figures based on 2023–2024 GoFundMe data.</span>
                </p>
            </section>
        </div>
    )
}