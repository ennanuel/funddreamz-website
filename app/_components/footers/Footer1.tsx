
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { TbArrowUpRight } from "react-icons/tb";

import { LINKS_2 } from "../../_assets/data/footer";
import Image from "next/image";


export default function Footer() {

    return (
        <footer className="px-4 xs:px-6 sm:px-10 bg-black text-white/60">
            <div className="mx-auto pt-20 pb-16 min-h-screen max-w-lg flex flex-col justify-between gap-12">
                <div className="grid gap-16 md:gap-10 grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg sm:text-xl lg:xt-2xl tracking-tighter max-w-[24ch]">
                            <span className="font-semibold text-white/60">FundDreamz is an official platform to start crow funding and get funded for your needs.</span>
                        </h3>
                        <div className="flex items-center">
                            <Link href="" className="group w-fit flex items-center justify-center gap-4 p-1 lg:p-2 pl-4 rounded-full bg-white/20 hover:bg-white text-white hover:text-black">
                                <span className="text-sm sm:text-base tracking-tighter font-semibold">Get started</span>
                                <span className="flex items-center justify-center w-6 sm:w-8 bg-white/80 group-hover:bg-black text-black group-hover:text-white aspect-square rounded-full">
                                    <FaArrowRight size={18} />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-6">
                        {
                            LINKS_2.map(({ title, subLinks }) => (
                                <li key={title} className="flex flex-col gap-2.5">
                                    <h4><span className="text-white/40 font-semibold tracking-tighter text-base sm:text-lg lg:text-xl">{title}</span></h4>
                                    <ul className="flex flex-col gap-2">
                                        {
                                            subLinks.map((subLink) => (
                                                <li key={subLink.title}>
                                                    <Link href={subLink.href} className="flex items-end gap-1">
                                                        <span className="text-base sm:text-lg lg:text-xl font-semibold tracking-tighter text-white/60 hover:underline">{subLink.title}</span>
                                                        {
                                                            subLink.isExternalLink ?
                                                                <span className="flex items-center justify-center h-5 aspect-square mb-1">
                                                                    <TbArrowUpRight size={24} />
                                                                </span> :
                                                                null
                                                        }
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                    <div className="">
                        <Link href="/" className="flex gap-2 items-center justify-center w-fit grayscale">
                            <Image src="/favicon.svg" width={200} height={200} alt="Fund dreams logo" className="w-6 sm:w-8 md:w-12 lg:w-16 aspect-square block object-cover border-2 border-white/60 rounded-full" />
                            <Image src="/logo-cover.png" alt="Logo cover" width={160} height={64} className="h-8 sm:h-10 md:h-16 lg:h-20 w-auto object-cover" />
                        </Link>
                    </div>
                    <div className="flex flex-col justify-end mb-2">
                        <p>
                            <span className="text-white/60 tracking-tighter text-sm md:text-base lg:text-lg">© 2025 FundDreamz Corporation, (funddreamz.app)</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}