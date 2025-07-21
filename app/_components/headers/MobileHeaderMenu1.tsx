import { LINKS } from "@/app/_assets/data/header";
import { SIGN_UP_LINK } from "@/app/_assets/data/links";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiArrowDown } from "react-icons/fi";


interface MobileHeaderMenuProps {
    show: boolean;
    open: () => void;
    close: () => void;
}

export default function MobileHeaderMenu({ show, open, close }: MobileHeaderMenuProps) {

    if (!show) return;

    return (
        <nav className="flex flex-col lg:hidden absolute top-full left-0 p-4 sm:p-6 lg:p-10 w-full h-[calc(100dvh_-_48px)] sm:h-[calc(100dvh_-_64px)] bg-[var(--background)]">
            <div className="flex items-center bg-[var(--search-background)] rounded-xl text-[var(--text-color)]">
                <input type="text" className="px-4 flex-1 min-w-30 bg-transparent border-none focus:outline-none text-sm lg:text-base tracking-tighter h-12 placeholder:text-[var(--text-color)] text-[var(--text-color)_!important]" placeholder="Search" />
                <button className="flex items-center justify-center w-8 mr-1 aspect-square rounded-full hover:bg-[var(--main)]/20 hover:text-[var(--main)]">
                    <BiSearch size={16} />
                </button>
            </div>
            <ul className="py-8 flex-1 flex flex-col">
                {
                    LINKS.map(({ title, href, subLinks }) => (
                        <li key={title} className="flex flex-col gap-4">
                            {
                                subLinks?.length ?
                                    <button className="flex items-center justify-between h-12 gap-4">
                                        <span className="text-2xl font-semibold tracking-tighter">{title}</span>
                                        <FiArrowDown size={16} />
                                    </button> :
                                    <a href={href} className="flex items-center h-12">
                                        <span className="text-2xl font-semibold tracking-tighter">{title}</span>
                                    </a>
                            }
                        </li>
                    ))
                }
            </ul>
            <div className="flex items-center gap-3 lg:gap-6">
                <div className="flex items-center gap-2">
                    <Link href="/sign-in" className="px-6 rounded-full h-10 hover:bg-[var(--secondary)] text-[var(--main)] flex items-center justify-center">
                        <span className="font-semibold whitespace-nowrap text-xs xs:text-sm">Sign in</span>
                    </Link>
                    <a href={SIGN_UP_LINK} className="flex items-center justify-center px-6 rounded-full h-10 bg-[var(--main)] text-[var(--secondary)]">
                        <span className="font-semibold whitespace-nowrap text-xs xs:text-sm">Start a Dream</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}