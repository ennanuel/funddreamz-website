import { TIPS } from "../../_assets/data";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";


export default function Tips() {

    return (
        <div className="bg-purple-900 text-purple-200 px-4 xs:px-6 sm:px-10">
            <section className="mx-auto max-w-lg w-full py-16">
                <div className="flex items-center justify-between gap-6">
                    <h2 className="text-lg sm:text-2xl tracking-tighter font-semibold">
                        <span className="text-purple-200/80">Top crowdfunding tips</span>
                    </h2>
                    <Link href="/" className="bg-purple-300 text-purple-900 px-6 h-8 sm:h-10 flex items-center justify-center rounded-full">
                        <span className="text-sm lg:text-base tracking-tighter font-semibold">View all</span>
                    </Link>
                </div>
                <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {
                        TIPS.map(({ title, Icon }) => (
                            <li key={title}>
                                <Link href="/" className="flex flex-col lg:flex-row h-full w-full lg:items-center gap-4 bg-purple-200 hover:bg-purple-300 text-purple-900 rounded-xl xl:rounded-2xl p-3 sm:p-4 xl:p-6">
                                    <span className="flex items-center justify-center w-10 lg:w-12 aspect-square rounded-full bg-purple-900/20">
                                        <Icon size={20} />
                                    </span>
                                    <div className="flex-1 flex lg:items-center justify-between gap-4">
                                        <span className="flex-1 text-sm sm:text-base xl:text-xl font-semibold">{title}</span>
                                        <HiArrowRight size={20} />
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <p className="mt-8 text-sm lg:text-base font-semibold tracking-tighter">
                    <span className="text-purple-200/60">*Statistics on this page are averaged figures based on 2023–2024 FundDreamz data.</span>
                </p>
            </section>
        </div>
    )
}