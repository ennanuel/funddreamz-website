import { LINKS } from "@/app/_assets/data/header";
import Link from "next/link";
import { PiPlantFill } from "react-icons/pi";


const DEFAULT_HEADER_COLORS = {
    '--background': '#f3f4f6',
    '--icon-background': '#b9f8cf',
    '--icon-color': '#02a85c',
    '--main': '#022d19',
    '--secondary': '#ffffff',
    '--text-color': '#1e2939',
    '--search-background': 'rgba(255, 255, 255, 0.8)',
} as React.CSSProperties;

export default function Header({ colors = DEFAULT_HEADER_COLORS }: { colors?: React.CSSProperties }) {

    return (
        <header style={colors} className="px-6 font-montserrat">
            <nav className="h-12 mx-auto max-w-xl w-full flex items-center justify-between">
                <Link href="/" className="font-dm-sans -mt-1 flex gap-2 items-center justify-center">
                    <span className="w-8 flex items-center justify-center aspect-square rounded-full bg-[var(--icon-background)] text-[var(--icon-color)]">
                        <PiPlantFill size={16} className="" />
                    </span>
                    <div className="text-lg flex items-center text-[var(--main)] font-bold leading-[1.3rem] tracking-tighter">
                        <span>f.</span>
                        <span>dreamz</span>
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    <ul className="flex items-center">
                        {
                            LINKS.map(({ title, href }) => (
                                <li key={title}>
                                    <Link href={href} className="px-2 group h-7 rounded-md flex items-center justify-center hover:bg-gray-50">
                                        <span className="text-xs text-gray-500 group-hover:text-gray-800">{title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center justify-center h-8 px-3 rounded-md text-gray-800 hover:bg-gray-50">
                            <span className="text-xs font-semibold">Start your Dream</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}