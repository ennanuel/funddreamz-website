import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";
import { PiPlantFill } from "react-icons/pi";
import { RiMenu5Line } from "react-icons/ri";

import { LINKS } from "@/app/_assets/data/header";


export default function Header() {

    return (
        <header className="z-10 px-4 sm:px-6 md:px-10 bg-background sticky top-0">
            <nav className="mx-auto h-16 max-w-lg grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                <Link href="/" className="text-main flex flex-col items-center justify-center font-bold">
                    <span className="block h-0 max-h-0">
                        <PiPlantFill size={20} className="-mt-3" />
                    </span>
                    <span className="block">fundreams</span>
                </Link>
                <div className="lg:pl-10 pr-2 sm:pr-4 lg:pr-6 relative flex justify-end lg:justify-between items-center gap-6 after:hidden lg:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0.25 after:h-6 after:bg-gray-200">
                    <div className="flex items-center pr-2 bg-gray-200/50 rounded-full text-gray-800">
                        <input type="text" className="px-4 w-30 sm:w-auto bg-transparent border-none focus:outline-none h-8 text-xs sm:text-sm" placeholder="Search" />
                        <BiSearch size={16} />
                    </div>
                    <ul className="hidden lg:flex items-center gap-2">
                        {
                            LINKS.map(({ title, href, subLinks }) => (
                                <li key={title}>
                                    {
                                        subLinks ? 
                                            <button className="flex items-center justify-center gap-3 h-7 rounded-md px-2 hover:bg-gray-100">
                                                <span className="text-sm">{title}</span>
                                                <GoTriangleDown size={14} />
                                            </button> :
                                            <Link href={href} className="flex items-center justify-center gap-4 h-7 rounded-md px-2 hover:bg-gray-100">
                                                <span className="text-sm">{title}</span>
                                            </Link>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                    <Link href="/sign-in" className="px-4 rounded-full h-8 hover:bg-gray-200/50 flex items-center justify-center">
                        <span className="text-sm">Sign in</span>
                    </Link>
                    <Link href="/get-started" className="flex items-center justify-center px-6 rounded-full h-8 border border-gray-400 hover:border-gray-600 hover:bg-gray-200/50">
                        <span className="text-sm font-semibold">Get started</span>
                    </Link>
                </div>
                <button className="flex lg:hidden items-center justify-center w-8 sm:w-10 aspect-square rounded-lg focus:bg-gray-100/50">
                    <RiMenu5Line size={20} />
                </button>
            </nav>
        </header>
    )
}