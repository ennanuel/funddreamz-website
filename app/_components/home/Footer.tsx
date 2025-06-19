import { LINKS_2 } from "@/app/assets/data/footer";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import { TbArrowUpRight } from "react-icons/tb";



export default function Footer() {

    return (
        <footer className="px-10 bg-black text-white/60">
            <div className="mx-auto pt-20 pb-16 w-full max-w-lg flex flex-col gap-12">
                <div className="grid gap-10 grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl tracking-tighter max-w-[24ch]">
                            <span className="font-semibold text-white/60">FundDreamz is an official platform to start crow funded and funding for your needs.</span>
                        </h3>
                        <div className="flex items-center">
                            <Link href="" className="group w-fit flex items-center justify-center gap-4 p-2 pl-4 rounded-full bg-white/20 hover:bg-white text-white hover:text-black">
                                <span className="tracking-tighter font-semibold">Get started</span>
                                <span className="flex items-center justify-center w-8 bg-white/80 group-hover:bg-black text-black group-hover:text-white aspect-square rounded-full">
                                    <FaArrowRight size={18} />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <ul className="grid grid-cols-3 gap-y-20 gap-x-6">
                        {
                            LINKS_2.map(({ title, subLinks }) => (
                                <li key={title} className="flex flex-col gap-2.5">
                                    <h4><span className="text-white/40 font-semibold tracking-tighter text-xl">{title}</span></h4>
                                    <ul className="flex flex-col gap-2">
                                        {
                                            subLinks.map((subLink) => (
                                                <li key={subLink.title}>
                                                    <Link href={subLink.href} className="flex items-end gap-1">
                                                        <span className="text-xl font-semibold tracking-tighter text-white/60 hover:underline">{subLink.title}</span>
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
                <div className="grid grid-cols-2 gap-10">
                    <div className="">
                        <Link href="/" className="flex gap-2 items-center justify-center w-fit">
                            <span className="w-20 aspect-square rounded-full flex items-center justify-center bg-white/60 text-black">
                                <PiPlantFill size={48} />
                            </span>
                            <span className="font-bold tracking-tighter text-8xl">f.dreamz</span>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-end mb-2">
                        <p>
                            <span className="text-white/60 tracking-tighter text-lg">© 2025 FundDreamz Corporation, (funddreamz.io)</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}